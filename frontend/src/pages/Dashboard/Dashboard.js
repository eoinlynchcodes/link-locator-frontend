import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import AddLink from './AddLink';
import LinkList from "./LinkList";

export default function Dashboard() {

  const username = localStorage.getItem('username');

  return (
    <>
      <Box minH="100vh">
        <Box p={5} boxShadow="inner" bg="gray.50">
          <Heading>Good day @{username}</Heading>
        </Box>
        <AddLink/>
        <LinkList username={username}/>
      </Box>
    </>
  );
}
