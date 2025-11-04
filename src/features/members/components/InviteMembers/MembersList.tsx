import { Flex } from "@chakra-ui/react";
import Member from "./Member";
import type { User } from "@/shared/types";

interface MembersListProps {
  users: User[];
}

const MembersList = ({ users }: MembersListProps) => {
  if (!users.length) return null;

  return (
    <Flex flexDirection="column" gap={2}>
      {users.map((user) => (
        <Member key={user.id} {...user} />
      ))}
    </Flex>
  );
};

export default MembersList;
