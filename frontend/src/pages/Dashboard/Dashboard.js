import React, { useEffect, useState } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import AddLink from "./AddLink";
import LinkList from "./LinkList";
import axios from "axios";

export default function Dashboard() {
  const username = localStorage.getItem("username");
  const loggedInUserId = localStorage.getItem("userId");
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/following/${loggedInUserId}`)
      .then((response) => {
        console.log("response: ", response);
        if (response.data.status === 404) {
          setFollowers(0);
        }
        setFollowers(response.data);
      })
      .catch(() => {});

    // axios
    //   .get(`http://localhost:5000/followers/${loggedInUserId}`)
    //   .then((response) => {
    //     if (response.data.status === 404) {
    //       setFollowing(0);
    //     }
    //     setFollowing(response.data);
    //   })
    //   .catch(() => {});
  }, [loggedInUserId]);



  return (
    <>
      <Box minH="100vh">
        <Box p={5} boxShadow="inner" bg="gray.50">
          <Heading>Good day @{username}</Heading>
          <Flex>
            <Flex margin={4}>
              <Text as='b' margin={1}>{followers}</Text>
              <Text as='u' margin={1}>Followers</Text>
            </Flex>
            <Flex margin={4}>
              <Text as='b' margin={1}>{following}</Text>
              <Text as='u' margin={1}>Following</Text>
            </Flex>
          </Flex>
        </Box>
        <AddLink />
        <LinkList username={username} />
      </Box>
    </>
  );
}
