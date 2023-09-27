import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  AiOutlineDashboard,
  AiOutlineSchedule
} from "react-icons/ai";
import { MdSchedule} from "react-icons/md";
import {GiDeliveryDrone} from 'react-icons/gi';
import { Layout, Menu, theme, Dropdown, Space, Avatar } from "antd";

import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);


  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  const items = [
    {
      label: "Profile",
      key: "profile",
    },
    {
      label: "Logout",
      key: "logout",
    },
  ];

  const menuProps = {
    items,
  };
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-white fs-5 text-center py-3 mb-0 ">
            <span className="sm-logo">O</span>
            <span className="lg-logo">Admin</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "dashboard",
              icon: <AiOutlineDashboard className="fs-4" />,
              label: "Dashboard",
            },
            {
              key: "live",
              icon: <GiDeliveryDrone className="fs-4" />,
              label: "Live View",
            },

            {
              key: "mission",
              icon: <AiOutlineSchedule className="fs-4" />,
              label: "Mission Planning",
            },

            {
              key: "schedule",
              icon: <MdSchedule className="fs-4" />,
              label: "Scheduling",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="d-flex justify-content-between"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="d-flex gap-3 align-items-center">
            <div></div>
            <div className="d-flex gap-3 align-items-center">
              <div>
                <Space wrap>
                  <Dropdown menu={menuProps}>
                    <Avatar
                      size={{
                        xl: 50,
                      }}
                      icon={<UserOutlined />}
                    ></Avatar>
                  </Dropdown>
                </Space>
              </div>
              <div>
                <h5 className="mb-0">XYZ</h5>
                <p className="mb-0">xyz@email.com</p>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
