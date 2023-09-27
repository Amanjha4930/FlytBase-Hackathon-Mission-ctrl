import React, { useState } from "react";
import {
  Col,
  InputNumber,
  Row,
  Slider,
  Space,
  Card,
  Tabs,
  Result,
  Cascader,
  Button,
  Form,
  Input,
} from "antd";
import { CreateMission } from "../functions/Mission";

const MissonSpeed = () => {
  const [inputValue, setInputValue] = useState(1);
  const onChange = (newValue) => {
    setInputValue(newValue);
  };
  return (
    <div>
      <h5 className="mt-5">Misson Speed</h5>
      <Row>
        <Col span={10}>
          <Slider
            min={1}
            max={20}
            onChange={onChange}
            value={typeof inputValue === "number" ? inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={20}
            style={{
              margin: "0 16px",
            }}
            value={inputValue}
            onChange={onChange}
          />
        </Col>
      </Row>
    </div>
  );
};

const MissonAltitude = () => {
  const [inputValue, setInputValue] = useState(1);
  const onChange = (newValue) => {
    setInputValue(newValue);
  };
  return (
    <div>
      <h5 className="mt-5">Misson Altitude</h5>
      <Row>
        <Col span={10}>
          <Slider
            min={1}
            max={20}
            onChange={onChange}
            value={typeof inputValue === "number" ? inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={20}
            style={{
              margin: "0 16px",
            }}
            value={inputValue}
            onChange={onChange}
          />
        </Col>
      </Row>
    </div>
  );
};

const MissonRadius = () => {
  const [inputValue, setInputValue] = useState(1);
  const onChange = (newValue) => {
    setInputValue(newValue);
  };
  return (
    <div>
      <h5 className="mt-5">Misson Radius</h5>
      <Row>
        <Col span={10}>
          <Slider
            min={1}
            max={20}
            onChange={onChange}
            value={typeof inputValue === "number" ? inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={20}
            style={{
              margin: "0 16px",
            }}
            value={inputValue}
            onChange={onChange}
          />
        </Col>
      </Row>
    </div>
  );
};

const CompleteAction = () => {
  const options = [
    {
      value: "loc1",
      label: "Return to home",
    },
    {
      value: "loc2",
      label: "Return to home 2",
    },
  ];

  const onChange = (value) => {
    console.log(value);
  };

  return (
    <div>
      <h5 className="mt-5">Final Complete Action</h5>
      <Cascader
        options={options}
        onChange={onChange}
        placeholder="Please select action"
      />
    </div>
  );
};

const MissionBasic = () => {
  const [form] = Form.useForm();
  const { TextArea } = Input;
  return (
    <div className="mt-5">
      <Form layout={"vertical"} form={form}>
        <Form.Item label="Mission Name">
          <Input placeholder="Enter Name" />
        </Form.Item>
        <Form.Item label="Mission Details">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Mission Tags">
          <Input placeholder="Enter Tags" />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Save</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const Mission = () => {
  const tabChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Info",
      children: (
        <div>
          <MissionBasic />
        </div>
      ),
    },
    {
      key: "2",
      label: "Route",
      children: (
        <div>
          <Space
            style={{
              width: "100%",
            }}
            direction="vertical"
          >
            <MissonSpeed />
            <MissonAltitude />
            <MissonRadius />
            <CompleteAction />
          </Space>
        </div>
      ),
    },
    {
      key: "3",
      label: "Waypoint",
      children: (
        <div>
          <Space
            style={{
              width: "100%",
            }}
            direction="vertical"
          >
            <WaypointSpeed />
            <WaypointAltitude />
            <WaypointRadius />
            <WaypointBasic />
          </Space>
        </div>
      ),
    },
  ];

  const handleSubmit = (data) => {
    const res =  CreateMission(data);
  }



  return (
    <div>
      <div className="d-flex flex-row">
        <h3 className="mb-2">Mission Planning</h3>
        <Button type="primary" className="mx-5" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
      <Row gutter={10}>
        <Col span={8}>
          <Tabs
            defaultActiveKey="1"
            items={items}
            onChange={tabChange}
            size="large"
            tabPosition="left"
          />
        </Col>
        <Col span={16}>
          <Card
            style={{
              height: 700,
            }}
          >
            <Result
              status="warning"
              title="There are some problems with streaming server."
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Mission;

const WaypointBasic = () => {
  const [form] = Form.useForm();
  return (
    <div className="mt-5">
      <Form layout={"vertical"} form={form}>
        <Form.Item label="Latitude">
          <Input placeholder="Enter value" />
        </Form.Item>
        <Form.Item label="Longitude">
        <Input placeholder="Enter value" />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Save</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const WaypointSpeed = () => {
  const [inputValue, setInputValue] = useState(1);
  const onChange = (newValue) => {
    setInputValue(newValue);
  };
  return (
    <div>
      <h5 className="mt-5">Waypoint Speed</h5>
      <Row>
        <Col span={10}>
          <Slider
            min={1}
            max={20}
            onChange={onChange}
            value={typeof inputValue === "number" ? inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={20}
            style={{
              margin: "0 16px",
            }}
            value={inputValue}
            onChange={onChange}
          />
        </Col>
      </Row>
    </div>
  );
};

const WaypointAltitude = () => {
  const [inputValue, setInputValue] = useState(1);
  const onChange = (newValue) => {
    setInputValue(newValue);
  };
  return (
    <div>
      <h5 className="mt-5">Waypoint Altitude</h5>
      <Row>
        <Col span={10}>
          <Slider
            min={1}
            max={20}
            onChange={onChange}
            value={typeof inputValue === "number" ? inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={20}
            style={{
              margin: "0 16px",
            }}
            value={inputValue}
            onChange={onChange}
          />
        </Col>
      </Row>
    </div>
  );
};

const WaypointRadius = () => {
  const [inputValue, setInputValue] = useState(1);
  const onChange = (newValue) => {
    setInputValue(newValue);
  };
  return (
    <div>
      <h5 className="mt-5">Waypoint Radius</h5>
      <Row>
        <Col span={10}>
          <Slider
            min={1}
            max={20}
            onChange={onChange}
            value={typeof inputValue === "number" ? inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={20}
            style={{
              margin: "0 16px",
            }}
            value={inputValue}
            onChange={onChange}
          />
        </Col>
      </Row>
    </div>
  );
};
