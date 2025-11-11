import { Text } from "@chakra-ui/react";
import { Flag } from "lucide-react";

export const PRIORITY = {
  LABLE: {
    0: "بدون اولویت",
    1: "کم",
    2: "متوسط",
    3: "زیاد",
  },
  COLOR: {
    0: "gray.500",
    1: "blue.500",
    2: "yellow.500",
    3: "red.500",
  },
};

export const priorityMenu = [
  {
    value: "0",
    label: PRIORITY.LABLE[0],
    icon: (
      <Text color={PRIORITY.COLOR[0]}>
        <Flag fill="currentColor" />
      </Text>
    ),
  },
  {
    value: "1",
    label: PRIORITY.LABLE[1],
    icon: (
      <Text color={PRIORITY.COLOR[1]}>
        <Flag fill="currentColor" />
      </Text>
    ),
  },
  {
    value: "2",
    label: PRIORITY.LABLE[2],
    icon: (
      <Text color={PRIORITY.COLOR[2]}>
        <Flag fill="currentColor" />
      </Text>
    ),
  },
  {
    value: "3",
    label: PRIORITY.LABLE[3],
    icon: (
      <Text color={PRIORITY.COLOR[3]}>
        <Flag fill="currentColor" />
      </Text>
    ),
  },
];
