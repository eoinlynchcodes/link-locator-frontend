import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import axios from 'axios';

export default function SearchResultsBox({ searchResults, searchQuery }) {

  const idOfLoggedInUser = localStorage.getItem('userId')
  const follow = (userIdToFollow) => {
    const idToLoggedInUserToNumber = Number(idOfLoggedInUser);
    axios.post('http://localhost:5000/follow', {
      loggedInUserId: idToLoggedInUserToNumber,
      userIdToFollow,
    });
  };


  return (
    <Box p={5}>
      <Text>Search results for "{searchQuery}"</Text>

      <Box>
        {searchResults &&
          searchResults?.map((item) => {
            return (
              <Box key={item.userId} boxShadow="base" bg="gray.50" m={5} p={5}>
                <Text>{item.fullName}</Text>
                <Text>{item.username}</Text>
                <Text>{item?.location}</Text>
                <Button onClick={() => follow(item.userId)}>Follow</Button>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
}
