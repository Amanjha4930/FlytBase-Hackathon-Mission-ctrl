import React from "react";
import { Space, Card } from "antd";
const Live = () => {
  return (
    <div>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <h3 className="mb-2">Live</h3>
        <Card
          bordered={false}
          style={{
            width: 1200,
            height: 500,
          }}
        >
          <img src={`http://${process.env.REACT_APP_API}/stream?topic=<link to stream1>`}/>
        </Card>
      </Space>
    </div>
  );
};

export default Live;
