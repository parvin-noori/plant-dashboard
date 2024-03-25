import { Flex, Typography, Button, Card, Avatar, Tooltip, Divider } from "antd";
import React from "react";

export default function SellerLists() {
  return (
    <Flex align="center" justify="space-between" gap="large">
      <Flex gap="small" className="top-seller" vertical="row">
        <Flex align="center" justify="space-between">
          <Typography.Title level={5} strong className="primary--color">
            Top seller
          </Typography.Title>
          <Button type="link" className="gray--color">
            view all
          </Button>
        </Flex>
        <Card>
          <Flex align="center" justify="space-evenly">
            <Avatar.Group
              maxCount={5}
              maxPopoverTrigger="hover"
              size="large"
              maxStyle={{
                color: "#f56a00",
                backgroundColor: "#fde3cf",
                cursor: "progress",
              }}
            >
              <Tooltip title="user 1" placement="top">
                <Avatar src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1505" />
              </Tooltip>
              <Tooltip title="user 2" placement="top">
                <Avatar src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1505" />
              </Tooltip>
              <Tooltip title="user 3" placement="top">
                <Avatar src="https://media.licdn.com/dms/image/C4D03AQEeEyYzNtDq7g/profile-displayphoto-shrink_400_400/0/1524234561685?e=2147483647&v=beta&t=CJY6IY9Bsqc2kiES7HZmnMo1_uf11zHc9DQ1tyk7R7Y" />
              </Tooltip>
              <Tooltip title="user 4" placement="top">
                <Avatar src="https://media.licdn.com/dms/image/D4E03AQEYGYbPwLZcgw/profile-displayphoto-shrink_400_400/0/1709636815606?e=2147483647&v=beta&t=hzIqjHNZ2053KJxTC-5n9zAZAFJ_pWj2QpFpqR20YxY" />
              </Tooltip>
              <Tooltip title="user 5" placement="top">
                <Avatar src="https://media.licdn.com/dms/image/C4E03AQHwDooA-9Hlyg/profile-displayphoto-shrink_400_400/0/1656254145919?e=2147483647&v=beta&t=mqsdKH4w-wDYZoBA9Q5kwOWQDh0CnKhBy1QIzc9rzFs" />
              </Tooltip>
              <Tooltip title="user 6" placement="top">
                <Avatar src="https://media.licdn.com/dms/image/C5603AQFWGh0Y2vg6qA/profile-displayphoto-shrink_400_400/0/1602115409868?e=2147483647&v=beta&t=BRE5xUyBjgyP6JoQIGN_FpxVOltcWt8fGtu0CGeQ5g0" />
              </Tooltip>
              <Tooltip title="user 7" placement="top">
                <Avatar src="https://media.licdn.com/dms/image/D4E03AQHJz5zNkdb43w/profile-displayphoto-shrink_400_400/0/1687501257471?e=2147483647&v=beta&t=YuPgOhlyLPYIvTraeIqO4Og7k47FicvUdYVUBJxWTvw" />
              </Tooltip>
            </Avatar.Group>
            <Divider type="vertical" className="divider" />
            <Flex vertical="row">
              <Typography.Text type="secondary" strong>
                1200 plant sold
              </Typography.Text>
              <Typography.Text type="secondary" strong>
                10 seller
              </Typography.Text>
            </Flex>
          </Flex>
        </Card>
      </Flex>
      <Flex gap="small" className="featured-seller" vertical="row">
        <Flex align="center" justify="space-between">
          <Typography.Title level={5} strong className="primary--color">
            featured seller
          </Typography.Title>
          <Button type="link" className="gray--color">
            view all
          </Button>
        </Flex>
        <Card>
          <Flex align="center" justify="space-evenly">
            <Avatar.Group
              maxCount={5}
              maxPopoverTrigger="hover"
              size="large"
              maxStyle={{
                color: "#f56a00",
                backgroundColor: "#fde3cf",
                cursor: "progress",
              }}
            >
              <Tooltip title="user 1" placement="top">
                <Avatar src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1505" />
              </Tooltip>
              <Tooltip title="user 2" placement="top">
                <Avatar src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1505" />
              </Tooltip>
              <Tooltip title="user 3" placement="top">
                <Avatar src="https://media.licdn.com/dms/image/C4D03AQEeEyYzNtDq7g/profile-displayphoto-shrink_400_400/0/1524234561685?e=2147483647&v=beta&t=CJY6IY9Bsqc2kiES7HZmnMo1_uf11zHc9DQ1tyk7R7Y" />
              </Tooltip>
              <Tooltip title="user 4" placement="top">
                <Avatar src="https://media.licdn.com/dms/image/D4E03AQEYGYbPwLZcgw/profile-displayphoto-shrink_400_400/0/1709636815606?e=2147483647&v=beta&t=hzIqjHNZ2053KJxTC-5n9zAZAFJ_pWj2QpFpqR20YxY" />
              </Tooltip>
              <Tooltip title="user 5" placement="top">
                <Avatar src="https://media.licdn.com/dms/image/C4E03AQHwDooA-9Hlyg/profile-displayphoto-shrink_400_400/0/1656254145919?e=2147483647&v=beta&t=mqsdKH4w-wDYZoBA9Q5kwOWQDh0CnKhBy1QIzc9rzFs" />
              </Tooltip>
              <Tooltip title="user 6" placement="top">
                <Avatar src="https://media.licdn.com/dms/image/C5603AQFWGh0Y2vg6qA/profile-displayphoto-shrink_400_400/0/1602115409868?e=2147483647&v=beta&t=BRE5xUyBjgyP6JoQIGN_FpxVOltcWt8fGtu0CGeQ5g0" />
              </Tooltip>
              <Tooltip title="user 7" placement="top">
                <Avatar src="https://media.licdn.com/dms/image/D4E03AQHJz5zNkdb43w/profile-displayphoto-shrink_400_400/0/1687501257471?e=2147483647&v=beta&t=YuPgOhlyLPYIvTraeIqO4Og7k47FicvUdYVUBJxWTvw" />
              </Tooltip>
            </Avatar.Group>
            <Divider type="vertical" className="divider" />
            <Flex vertical="row">
              <Typography.Text type="secondary" strong>
                1,530 plant sold
              </Typography.Text>
              <Typography.Text type="secondary" strong>
                13 seller
              </Typography.Text>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
}
