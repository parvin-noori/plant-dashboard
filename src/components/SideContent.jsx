import React from "react";
import ContenxtSideBar from "./ContenxtSideBar";
import { Flex } from "antd";
import Activity from "./Activity";

export default function SideContent() {
  return (
    <Flex vertical gap="2.3rem" style={{ width: 350 }}>
      <ContenxtSideBar />
      <Activity />
    </Flex>
  );
}
