import { Card, Flex, Typography, Image } from "antd";
import React from "react";
import plant from "../assets/plant02.png";

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
            bottom: -30,
            left: 150,
            height: "250px",
            width: "auto",
          }}
        />
      </Card>
    </div>
  );
}
