import { Button, Flex, Layout } from "antd";
import "./App.css";
import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import CustomHeader from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";
import SideContent from "./components/SideContent.jsx";

const { Sider, Header, Content } = Layout;

function App() {
  const [collapsed, setcollapsed] = useState(false);
  return (
    <Layout>
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sider"
      >
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setcollapsed(!collapsed)}
          className="triger-btn"
        />
        <Sidebar />
      </Sider>
      <Layout>
        <Header className="header">
          <CustomHeader />
        </Header>
        <Content className="content">
          <Flex gap="large">
            <MainContent />
            <SideContent />
          </Flex>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
