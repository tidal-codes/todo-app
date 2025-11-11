import { Tooltip } from "@/shared/ui/Tooltip";
import { Box, Flex, Text } from "@chakra-ui/react";
import { CircleDotDashed } from "lucide-react";
import { PriorityBadge } from "./Badges";
import type { Priority } from "@/shared/types";
import { PRIORITY } from "../../constants/priority";

interface Props {
  relativeDate: string;
  dateString: string;
  priority: Priority;
}

const Header = ({ relativeDate, dateString, priority }: Props) => {
  return (
    <Box>
      <Flex mb={2} alignItems="center" justifyContent="space-between">
        <Text
          fontSize="sm"
          color="gray.600"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={1}
        >
          <CircleDotDashed size="16" />
          <Tooltip
            content={relativeDate}
            showArrow={true}
            positioning={{ placement: "top" }}
          >
            <span>{dateString}</span>
          </Tooltip>
        </Text>
        {priority !== "0" && (
          <Tooltip
            content={PRIORITY.LABLE[priority]}
            showArrow={true}
            positioning={{ placement: "top" }}
          >
            <span>
              <PriorityBadge priority={priority} />
            </span>
          </Tooltip>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
