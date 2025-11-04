import { InputGroup, Spinner, Input } from "@chakra-ui/react";
import { Search } from "lucide-react";
import type React from "react";

interface SearchInputProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
}

const SearchInput = ({ value, onChange, isLoading }: SearchInputProps) => {
  return (
    <InputGroup
      startElement={<Search />}
      endElement={isLoading ? <Spinner /> : null}
    >
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="شناسه یا ایمیل کاربر"
      />
    </InputGroup>
  );
};

export default SearchInput;
