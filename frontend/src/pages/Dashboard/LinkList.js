import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import axios from "axios";
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function LinkList({ username }) {
  const [linkList, setLinkList] = useState();
    const creatorId = localStorage.getItem("userId");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/linksById/${creatorId}`)
      .then((response) => {
        setLinkList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <>
      <Box bg="gray.50" rounded="lg" boxShadow="base" margin={50} padding={50}>
        <Heading>Your live links for {username}</Heading>
          {linkList?.map((item, key) => {
            return (
              <>
                <Box key={item.linkId} boxShadow="base" bg="white" my={5} p={5}>
                  <Text>Title to go here</Text>
                  <Text>{item.description}</Text>
                  <Link href={item.url} target="_blank">
                    {item.url} <ExternalLinkIcon mx='2px' />
                  </Link>
                </Box>
              </>
            );
          })}
      </Box>
    </>
  );
}
