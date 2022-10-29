import React from "react";
import {
  Container,
  Box,
  Heading,
  Stack,
  Input,
  InputGroup,
  InputLeftAddon,
  FormControl,
  FormLabel,
  Button,
  Text
} from "@chakra-ui/react";
import AddLink from './AddLink';

export default function Dashboard() {
  return (
    <>
      <Box display="flex">
        <Box border="1px solid red" margin={50} padding={50}>
          <Heading>Your live links</Heading>
          <Box>
            <Text>Goes here</Text>
          </Box>
        </Box>

        <AddLink/>
        
      </Box>
    </>
  );
}
