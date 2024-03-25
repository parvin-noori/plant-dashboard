import { Button, Card, Flex, Typography } from "antd";
import React from "react";

export default function Banner() {
  return (
    <Card style={{ height: 260, padding: 20 }}>
      <Flex vertical gap="30px">
        <Flex vertical align="flex-start">
          <Typography.Title level={2} strong>
            create and sell products
          </Typography.Title>
          <Typography.Text type="secondary" strong>
            lorem ipsum dolor sit amet consecteture adipisicing elit. aliquied,
            aliquim!
          </Typography.Text>
        </Flex>
        <Flex gap="large">
          <Button type="primary" size="large">
            explore more
          </Button>
          <Button size="large">top sellers</Button>
        </Flex>
      </Flex>
    </Card>
  );
}
