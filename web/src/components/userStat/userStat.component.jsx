import React, { useEffect, useState } from "react";
import { Statistic, Row, Col, Card, Icon, PageHeader, Progress } from "antd";
import {
  firestore,
  convertBasketSnapshotToArray
} from "../../firebase/firebase.utils";
const UserData = () => {
  const [baskets, setBaskets] = useState([]);
  const [stat, setStat] = useState({ sum: 0, karma: 0, lastKarma: 0 });

  const generateStat = baskets => {
    var sum = baskets.reduce((total, basket) => total + basket.price, 0);
    var karma = baskets.reduce((total, basket) => total + basket.karma, 0);
    var lastKarma = (baskets[0] || { karma: 0 }).karma;
    setStat({ sum, karma, lastKarma });
    setBaskets(baskets);
  };
  useEffect(() => {
    const basketsRef = firestore.collection("baskets");
    basketsRef
      .where("user", "==", "GbaVM57M1hSGNUruaBoD")
      .onSnapshot(function(querySnapshot) {
        generateStat(convertBasketSnapshotToArray(querySnapshot));
      });
  }, []);

  return (
    <div>
      <PageHeader title="Weekly Stats" />
      <Row type="flex" justify="center" gutter={16}>
        <Col span={7}>
          <Card>
            <Statistic title="Spent" value={stat.sum} />
          </Card>
        </Col>
        <Col span={7}>
          <Card>
            <Statistic title="Karma" value={stat.karma} precision={2} />
          </Card>
        </Col>
        <Col span={7}>
          <Card>
            <Statistic
              title="Karma Points given"
              value={stat.lastKarma}
              precision={2}
              valueStyle={{ color: stat.lastKarma < 0 ? "red" : "green" }}
              prefix={
                <Icon type={stat.lastKarma < 0 ? "arrow-down" : "arrow-up"} />
              }
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
      <PageHeader title="Weekly Reward" />
      <Row type="flex" justify="center" gutter={16}>
        <Col span={7}>
          <Card>
            <h2>British Bake-off</h2>
            <h4>Buy 2kg of flour</h4>
            <Progress type="circle" percent={50} format={percent => "1/2kg"} />
            <div>
              <Icon type="lock" />
              +200 karma
            </div>
          </Card>
        </Col>
        <Col span={7}>
          <Card>
            <h2>IT'S RAW?</h2>
            <h4>Buy lamb sauce</h4>
            <Progress type="circle" percent={100} />
            <div style={{ color: "#52c41a" }}>
              <Icon theme="twoTone" twoToneColor="#52c41a" type="unlock" /> 5
              trees planted
            </div>
          </Card>
        </Col>
        <Col span={7}>
          <Card>
            <h2>Hard Worker</h2>
            <h4>Vote 200 times this week</h4>
            <Progress
              type="circle"
              percent={75}
              status="active"
              format={percent => "150/200"}
            />
            <div>
              <Icon type="lock" />
              5x points voucher
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UserData;
