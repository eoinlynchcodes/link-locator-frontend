import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

export default function SearchResultsBox({ searchResults, searchQuery }) {
  console.log({ searchResults });

  const follow = (userId) => {
    console.log({ userId });
  }

  return (
    <Box p={5}>
      <Text>Search results for "{searchQuery}"</Text>

      <Box>
        {searchResults &&
          searchResults?.map((item) => {
            return (
              <Box boxShadow="base" bg="gray.50" m={5} p={5}>
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
