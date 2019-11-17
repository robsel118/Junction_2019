import React from "react";
import { Icon, Comment, Avatar, Tooltip } from "antd";
import moment from "moment";
const _ = require("lodash");

const BasketListItem = ({ item, actions, onLike, onDislike, onReceipt }) => {
  return (
    <Comment
      author={<p>{item.store}</p>}
      actions={
        actions
          ? [
              <span className="actionButton" key="comment-basic-like">
                <Tooltip title="Like">
                  <Icon
                    type="like"
                    // theme={action === "liked" ? "filled" : "outlined"}
                    onClick={() => onLike(item)}
                  />
                </Tooltip>
                <span style={{ paddingLeft: 8, cursor: "auto" }}>like</span>
              </span>,
              <span
                className="actionButton"
                key=' key="comment-basic-dislike"'
                onClick={() => onDislike(item)}
              >
                <Tooltip title="Dislike">
                  <Icon
                    type="dislike"
                    // theme={action === "disliked" ? "filled" : "outlined"}
                  />
                </Tooltip>
                <span style={{ paddingLeft: 8, cursor: "auto" }}>dislike</span>
              </span>,
              <span key=' key="comment-basic-receipt"' className="actionButton">
                <Tooltip title="Receipt">
                  <Icon
                    type="barcode"
                    // theme={action === "disliked" ? "filled" : "outlined"}
                    onClick={() => onReceipt(item)}
                  />
                </Tooltip>
                <span style={{ paddingLeft: 8, cursor: "auto" }}>Receipt</span>
              </span>
            ]
          : []
      }
      avatar={
        <Avatar
          style={{
            backgroundColor: item.karma < 0 ? "red" : "green",
            marginTop: "50%",
            marginLeft: "0.5rem"
          }}
        >
          {item.karma}
        </Avatar>
      }
      content={<h3>{item.price}€</h3>}
      datetime={
        <Tooltip
          title={moment(item.timestamp)
            .subtract(2, "days")
            .format("YYYY-MM-DD HH:mm:ss")}
        >
          <span>
            {moment(item.timestamp)
              .subtract(2, "days")
              .fromNow()}
          </span>
        </Tooltip>
      }
    ></Comment>
  );
};

export default BasketListItem;
