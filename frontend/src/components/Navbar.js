import React from "react";
import { Flex, Link, Text } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex bgColor="black" width="100%" align="center">
      <Link href="/">
        <Text p={10} color="white">Link Locator</Text>
      </Link>
    </Flex>
  );
}
