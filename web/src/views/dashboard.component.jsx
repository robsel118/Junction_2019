import React, { useState } from "react";
import { Row, Col, PageHeader, Tabs } from "antd";
import "./dashboard.styles.sass";
import BasketList from "../components/basketList/basketList.component";
import UserData from "../components/userStat/userStat.component";

const { TabPane } = Tabs;

const Dashboard = () => {
  const [tab, setTab] = useState(1);

  function callback(key) {
    setTab(key);
    console.log("HERE----" + key);
  }
  return (
    <Row>
      <Col className="dashboard-right-containter" xs={24} md={16}>
        <UserData />
      </Col>
      <Col className="dashboard-left-containter" xs={24} md={8}>
        <PageHeader
          title="Weekly Leaderboard"
          footer={
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="Wall of Fame" key="1" />
              <TabPane tab="Wall of Shame" key="2" />
            </Tabs>
          }
        />
        <BasketList tab={tab} />
      </Col>
    </Row>
  );
};

export default Dashboard;
