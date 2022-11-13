import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Input,
  Button,
} from "@chakra-ui/react";
import axios from "axios";

export default function AddLink() {
  const creatorId = localStorage.getItem("userId");
  const creatorUsername = localStorage.getItem("username");

  const [link, setLink] = useState({
    creatorId,
    url: "",
    description: "",
    title: "",
    timeCreated: Date.now(),
    creatorUsername,
  });

  const handleChange = (e) =>
    setLink((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));

  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:5000/createLink`, link)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box boxShadow="base" bg="gray.50" margin={50} padding={50}>
      <Box bg="white" p={5}>
        <Heading>Add a link</Heading>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <InputGroup>
            <Input
              id="title"
              type="title"
              name="title"
              value={link.title}
              onChange={handleChange}
              required
              placeholder="Title goes here"
            />
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Description</FormLabel>
          <Input
            id="description"
            type="description"
            name="description"
            value={link.description}
            onChange={handleChange}
            required
            placeholder="Describe why this link is useful:"
          />
        </FormControl>

        <FormControl>
          <FormLabel>URL</FormLabel>
          <InputGroup>
            <InputLeftAddon children="https://" />
            <Input
              id="url"
              type="url"
              name="url"
              value={link.url}
              onChange={handleChange}
              required
              placeholder="Paste URL here:"
            />
          </InputGroup>
        </FormControl>

        <Button mt={4} colorScheme="teal" onClick={onSubmit}>
          Submit
        </Button>
      </Box>
    </Box>
  );
}
