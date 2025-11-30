import Select from "@/shared/ui/Select";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

const showProjectList = [
  { label: "تمام پروژه ها", value: "All" },
  { label: "سفر به کوه", value: "werkl239fks" },
  { label: "بریم؟", value: "sdklc34h" },
];
const dateList = [
  { label: "امسال", value: "yearly" },
  { label: "این ماه", value: "mounthly" },
  { label: "این هفته", value: "weekly" },
  { label: "امروز", value: "today" },
];

const DashboardHeader = () => {
  const [showProject, setShowProject] = useState<string[]>([]);
  const [dateDateRange, setDataDateRange] = useState<string[]>([]);
  return (
    <Flex mb={2} alignItems="end" justifyContent="space-between">
      <Box>
        <Text fontSize="xl">داشبورد</Text>
        <Text fontSize="sm">نمایش سریع وضعیت و فعالیت‌های شما</Text>
      </Box>
      <Flex gap={2}>
        <Select
          items={dateList}
          value={dateDateRange}
          onChange={setDataDateRange}
        />
        <Select
          items={showProjectList}
          value={showProject}
          onChange={setShowProject}
        />
      </Flex>
    </Flex>
  );
};

export default DashboardHeader;
