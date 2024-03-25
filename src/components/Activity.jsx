import { Flex, Button, Typography, List, Avatar } from "antd";
import React from "react";
const data = [
  { name: "Emma Turner", orderTime: 1 },
  { name: "Liam Foster", orderTime: 2 },
  { name: "Olivia Reed", orderTime: 3 },
  { name: "Ethan Hayes", orderTime: 4 },
  { name: "Ava simmons", orderTime: 5 },
];

export default function Activity() {
  return (
    <Flex gap="small" vertical>
      <Flex align="center" justify="space-between" gap="large">
        <Typography.Title level={3} strong className="primary--color">
          Recent Action
        </Typography.Title>
        <Button type="link" className="gray--color">
          view all
        </Button>
      </Flex>
      <List
        pagination
        dataSource={data}
        renderItem={(user, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={`https:/api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
              title={<a href="#">{user.name}</a>}
              description="ordered a new plant"
            ></List.Item.Meta>
            <span className="gray--color">{user.orderTime}{user.orderTime===1?'dary ago':'days ago'}</span>
          </List.Item>
        )}
      />
    </Flex>
  );
}
