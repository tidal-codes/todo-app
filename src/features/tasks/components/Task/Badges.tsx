import type { Priority } from "@/shared/types";
import { Center, Text } from "@chakra-ui/react";
import { PRIORITY } from "../../constants/priority";
import { Flag } from "lucide-react";

interface PriorityBadgeProps {
  priority: Priority;
}

const PriorityBadge = ({ priority }: PriorityBadgeProps) => {
  return (
    <Center p={1} border="1px solid" borderColor="gray.300" borderRadius="sm">
      <Text color={PRIORITY.COLOR[priority]}>
        <Flag size={14} fill="currentColor" />
      </Text>
    </Center>
  );
};

export { PriorityBadge };
