import { Box, Button, Flex, Input, InputGroup, Text } from "@chakra-ui/react";
import {
  ArrowDownWideNarrow,
  BriefcaseBusiness,
  ListFilter,
  Search,
} from "lucide-react";
import NewProject from "./newProjectDialog";
import { useProjectFilter } from "../contexts/ProjectsFilterProvider";

const ProjectsBoardHeader = () => {
  const { searchKeyword, setSearchKeyword } = useProjectFilter();
  return (
    <Box px={3} py={2}>
      <Flex alignItems="center" justifyContent="space-between" gap={4}>
        <Flex alignItems="center" gap={2}>
          <BriefcaseBusiness size={20} />
          <Text fontSize="sm">پروژه ها</Text>
        </Flex>
        <Flex gap={2}>
          <NewProject>
            <Button>پروژه جدید</Button>
          </NewProject>
          <Button variant="outline">
            <ListFilter />
            فیلتر
          </Button>
          <Button variant="outline">
            <ArrowDownWideNarrow />
            تاریخ ساخت
          </Button>
          <InputGroup startElement={<Search size="14" />}>
            <Input
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              fontSize="xs"
              placeholder="جستجو"
            />
          </InputGroup>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProjectsBoardHeader;
