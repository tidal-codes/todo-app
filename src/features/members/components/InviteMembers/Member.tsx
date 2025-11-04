import { Flex, Button, Text } from "@chakra-ui/react";
import Avatar from "@/shared/ui/Avatar";
import type { User } from "@/shared/types";
import { useInviteUser } from "../../hooks/useInviteUser";

const Member = ({ id, first_name, last_name, profile_url, tag }: User) => {
  const mutation = useInviteUser(id);
  const userName = `${first_name} ${last_name}`;
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Flex alignItems="center" gap={2}>
        <Avatar src={profile_url} name={userName} />
        <Flex flexDirection="column">
          <Text>{userName}</Text>
          <Text fontSize="xs" color="gray.500">
            {tag}
          </Text>
        </Flex>
      </Flex>
      <Button
        size="xs"
        onClick={() => mutation.mutate()}
        loading={mutation.isPending}
      >
        دعوت
      </Button>
    </Flex>
  );
};

export default Member;
