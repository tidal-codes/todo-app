import { Input } from "@chakra-ui/react";
import { useFilter } from "../../context/filter";
import { useDebounce } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";

const TaskSearch = () => {
  const [value, setValue] = useState<string>("");
  const { setSearchKeyword } = useFilter();
  const debouncedValue = useDebounce(value, 250);
  useEffect(() => {
    setSearchKeyword(debouncedValue);
  }, [debouncedValue, setSearchKeyword]);
  return (
    <Input
      placeholder="جستجوی کلمه کلیدی"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
export default TaskSearch;
