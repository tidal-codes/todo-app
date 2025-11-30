import {
  VStack,
  HStack,
  Box,
  Badge,
  Text,
  Flex,
  Separator,
  Link,
} from "@chakra-ui/react";
import UpcomingDeadlineTask from "./UpcomingDeadlineTask";
const tasks = [
  {
    date: "۱۷ فوریه",
    title: "ساخت ورژن‌های دکمه",
    category: "سیستم طراحی",
    priority: "با اهمیت",
  },
  {
    date: "۱۹ فوریه",
    title: "ایجاد endpointهای احراز هویت",
    category: "توسعه API",
    priority: "با اهمیت",
  },
  {
    date: "۲۱ فوریه",
    title: "ساخت کامپوننت‌های فرم",
    category: "سیستم طراحی",
    priority: "با اهمیت",
  },
];
const UpcomingDeadlines = () => {
  return (
    <Box rounded="sm" border="1px solid">
      <Flex p={2} alignItems="center" justifyContent="space-between">
        <Text fontSize="sm">موعد های پیش رو</Text>
        <Link fontSize="xs" color="primary.700">
          مشاهده همه
        </Link>
      </Flex>
      <Separator />
      <VStack p={2} gap={2}>
        <UpcomingDeadlineTask />
        <UpcomingDeadlineTask />
        <UpcomingDeadlineTask />
      </VStack>
    </Box>
  );
};

export default UpcomingDeadlines;
