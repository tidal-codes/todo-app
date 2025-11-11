import type { User } from "@/shared/types";
import Avatar from "@/shared/ui/Avatar";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Minus, Plus } from "lucide-react";
import React from "react";

interface MemberProps {
  member: User;
  isAssigned: boolean;
  onToggleAssign: (id: string) => void;
}

const Member: React.FC<MemberProps> = ({
  member,
  isAssigned,
  onToggleAssign,
}) => {
  const displayName = `${member.first_name} ${member.last_name}`;

  return (
    <Flex w="full" p={2} align="center" justify="space-between">
      <Flex gap={2} align="center">
        <Avatar src={member.profile_url} name={displayName} size="xs" />
        <Box>
          <Text fontWeight="medium">{displayName}</Text>
          <Text fontSize="xs" color="gray.500">
            {member.email}
          </Text>
        </Box>
      </Flex>
      <AssignToggleButton
        isAssigned={isAssigned}
        onClick={() => onToggleAssign(member.id)}
      />
    </Flex>
  );
};

export default Member;

interface AssignToggleButtonProps {
  isAssigned: boolean;
  onClick: () => void;
}

const AssignToggleButton = ({
  isAssigned,
  onClick,
}: AssignToggleButtonProps) => (
  <Button
    size="xs"
    variant="outline"
    p={1}
    borderColor={isAssigned ? "red.600" : "brand.primary.600"}
    onClick={onClick}
  >
    {isAssigned ? (
      <Text color="red.600">
        <Minus />
      </Text>
    ) : (
      <Text color="brand.primary.600">
        <Plus />
      </Text>
    )}
  </Button>
);
