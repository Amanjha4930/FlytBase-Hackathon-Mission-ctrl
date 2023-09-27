import React from "react";
import {
  Card,
  Col,
  Row,
  Statistic,
  Space,
} from "antd";
import { useState } from "react";

const Dashboard = () => {
  // State to store drone data

  const [totalMisson, setTotalMisson] = useState(0);
  const [totalSchedules, setTotalSchedules] = useState(0);


  return (
    <div>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <h3 className="mb-4">Dashboard</h3>
        <Row gutter={16}>
          <Col span={12}>
            <Card bordered={false}>
              <Statistic
                title="Total Mission"
                value={10}
                valueStyle={{
                  color: "#3f8600",
                }}
              />
            </Card>
          </Col>
          <Col span={12}>
              <Card bordered={false}>
                <Statistic
                  title="Total Schedule"
                  value={5}
                  valueStyle={{
                    color: "#cf1322",
                  }}
                />
              </Card>
          </Col>
        </Row>
      </Space>
    </div>
  );
};

export default Dashboard;
