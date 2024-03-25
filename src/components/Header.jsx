import { Avatar, Flex, Typography } from "antd";
import Search from "antd/es/input/Search";
import React from "react";
import {
  MessageOutlined,
  NotificationOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

export default function CustomHeader() {
  return (
    <Flex align="center" justify="space-between">
      <Typography.Title level={3} type="secondary">
        welcome back,Jhon
      </Typography.Title>
      <Flex align="center" gap="3rem">
        <Search placeholder="search dashboard" allowClear />
        <Flex align="center" gap="10px">
          <MessageOutlined  className="header-icon"/>
          <NotificationOutlined className="header-icon"/>
          <Avatar icon={<UserAddOutlined />} />
        </Flex>
      </Flex>
    </Flex>
  );
}
