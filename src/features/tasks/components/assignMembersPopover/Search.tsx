import { Box, Input } from "@chakra-ui/react";
import React from "react";

const Search = () => {
  return (
    <Box mb={2} borderBottom="1px solid" borderColor="gray.300" py={2}>
      <Input variant="ghost" placeholder="جستجو" />
    </Box>
  );
};

export default Search;
