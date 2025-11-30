import { Flex, For, Box } from "@chakra-ui/react";
import { ListTodo, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import StatusCard from "./StatusCard";

const statuses = [
  {
    type: "total",
    title: "کل فعالیت‌ها",
    icon: <ListTodo size={20} />,
    value: "128",
    description: "تعداد همه‌ی فعالیت‌های ثبت شده",
  },
  {
    type: "inProgress",
    title: "در حال انجام",
    icon: <Loader2 size={20} />,
    value: "34",
    description: "فعالیت‌هایی که هنوز تکمیل نشده‌اند",
  },
  {
    type: "weeklyDone",
    title: "انجام‌شده هفته",
    icon: <CheckCircle2 size={20} />,
    value: "18",
    description: "تعداد وظایفی که این هفته کامل شده‌اند",
  },
  {
    type: "overdue",
    title: "عقب‌افتاده",
    icon: <AlertCircle size={20} />,
    value: "6",
    description: "فعالیت‌هایی که از موعدشان گذشته",
  },
];

const StatusOverview = () => {
  return (
    <div>
      <Flex gap={3}>
        <For each={statuses}>
          {(card) => (
            <Box flex={1}>
              <StatusCard {...card} />
            </Box>
          )}
        </For>
      </Flex>
    </div>
  );
};

export default StatusOverview;
