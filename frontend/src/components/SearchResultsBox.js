import React from 'react';
import { Box, Text } from "@chakra-ui/react";

export default function SearchResultsBox({ searchResults, searchQuery }){

    console.log({ searchResults });

    return (
        <Box p={5} >
            <Text>Search results for "{searchQuery}"</Text>

            <Box bgColor="red">

                {
                    searchResults && 
                    searchResults?.map((item) => {
                        return (
                            <Text>{item.fullName}</Text>
                        )
                    })
                }

            </Box>
        </Box>
    );
}