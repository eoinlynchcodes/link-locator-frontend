import React, { useState } from "react";
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import SearchResultsBox from "../components/SearchResultsBox";
import axios from "axios";
import { SearchIcon } from "@chakra-ui/icons";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ searchQuery });
    axios.post(`http://localhost:5000/search/${searchQuery}`)
      .then((response) => {
        if(response.status === 404){
          setSearchResults('Status is 404');
        }
          setSearchResults(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log({ searchResults });

  return (
    <Box
      minH="100vh"
      maxW="80%"
      mx="auto"
      px={{
        base: "0",
        lg: "12",
      }}
      py={{
        base: "0",
        lg: "12",
      }}
    >
      <FormControl>
        <FormLabel>Search using full name. </FormLabel>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            id="search"
            name="search"
            onChange={handleChange}
            required
            type="search"
          />
        </InputGroup>
        <FormHelperText>Search using full name.</FormHelperText>
        <Button variant="solid" colorScheme="green" onClick={onSubmit}>
          Search
        </Button>
      </FormControl>
      <SearchResultsBox
        searchResults={searchResults}
        searchQuery={searchQuery}
      />
    </Box>
  );
}
