import React, { useState } from 'react';
import { Box, Heading, Stack, FormControl, FormLabel, InputGroup, InputLeftAddon, Input, Button } from "@chakra-ui/react";

export default function AddLink(){

    const [link, setLink] = useState({
        url: "",
        description: "",
      });

      

    return (
        <Box border="1px solid green" margin={50} padding={50}>
          <Heading>Add a link</Heading>
          <Stack>
            <FormControl>
              <FormLabel>URL</FormLabel>
              <InputGroup>
                <InputLeftAddon children="https://" />
                <Input placeholder="URL here" />
              </InputGroup>
            </FormControl>

            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input type="email" />
            </FormControl>
          </Stack>
          <Button
            mt={4}
            colorScheme='teal'
            type='submit'
          >
            Submit
          </Button>
        </Box>
    )
}