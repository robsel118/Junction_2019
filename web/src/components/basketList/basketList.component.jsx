import React, { useState, useEffect } from "react";
import { List, Modal, Descriptions } from "antd";
import { firestore, getTopBasket } from "../../firebase/firebase.utils";
import BasketListItem from "../basketListItem/basketListItem.component";
import moment from "moment";
import "./basketList.styles.sass";

const BasketList = ({ tab }) => {
  const [baskets, setBaskets] = useState([]);
  const [visible, setVisible] = useState(false);
  const [modalItem, setModalItem] = useState({});

  useEffect(() => {
    const basketsRef = firestore.collection("baskets");
    const unsub = basketsRef.onSnapshot(function(querySnapshot) {
      setBaskets(getTopBasket(querySnapshot, tab));
    });
    return () => unsub();
  }, [tab]);

  const onReceipt = item => {
    setModalItem(item);
    setVisible(true);
  };

  const onLike = basket => {
    firestore
      .collection("baskets")
      .doc(basket.id)
      .set({ ...basket, karma: basket.karma + 1 })
      .then(() => {
        console.log("Liked");
      });
  };
  const onDislike = basket => {
    firestore
      .collection("baskets")
      .doc(basket.id)
      .set({ ...basket, karma: basket.karma - 1 })
      .then(() => {
        console.log("Liked");
      });
  };
  return (
    <div>
      <Modal visible={visible} footer={null} onCancel={() => setVisible(false)}>
        {modalItem.id ? (
          <Descriptions
            layout="vertical"
            bordered
            title={`receipt ${modalItem.id}`}
            size="small"
          >
            <Descriptions.Item label="Purchase Date">
              {moment(modalItem.timestamp).format("YYYY-MM-DD HH:mm:ss")}}
            </Descriptions.Item>
            <Descriptions.Item label="Store">
              {modalItem.store}
            </Descriptions.Item>
            <Descriptions.Item label="Total Price">
              {modalItem.price}
            </Descriptions.Item>
            <Descriptions.Item label="Items">
              {modalItem.items.map(item => (
                <span key={`${item.ean}-${item.name}`}>
                  {`${item.name} - ${item.totalPrice}`}
                  <br />
                </span>
              ))}
            </Descriptions.Item>
          </Descriptions>
        ) : (
          <div></div>
        )}
      </Modal>
      <List
        itemLayout="horizontal"
        dataSource={baskets}
        renderItem={item => (
          <List.Item className="basket-item" key={item.id}>
            <BasketListItem
              key={item.id}
              item={item}
              actions={true}
              onLike={onLike}
              onReceipt={onReceipt}
              onDislike={onDislike}
            />
          </List.Item>
        )}
      />
    </div>
  );
};
export default BasketList;
