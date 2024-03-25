import { Card, Flex, Typography, Image } from "antd";
import React from "react";
import plant from "../assets/plant01.png";

export default function ContenxtSideBar() {
  return (
    <div>
      <Card className="card">
        <Flex vertical gap="large">
          <Typography.Title level={4} strong>
            Todat <br /> 5 orders
          </Typography.Title>
          <Typography.Title level={4} strong>
            This month <br /> 240 orders
          </Typography.Title>
        </Flex>
        <Image
          src={plant}
          alt="plant"
          style={{
            position: "absolute",
            bottom: -50,
            left: 12,
            height: "300px",
            width: "auto",
          }}
        />
      </Card>
    </div>
  );
}
