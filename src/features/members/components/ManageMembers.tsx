import { Flex } from "@chakra-ui/react";
import InviteNewMemebers from "./InviteNewMembers";
import { useMembers } from "../hooks/useMembers";
import { Members } from "@/shared/components/Members";

const ManageMembers = () => {
  const { members, isLoading } = useMembers();
  const avatars =
    members?.users.map((user) => ({
      name: user.email,
      profile_url: user.profile_url,
    })) || [];
  return (
    <Flex alignItems="center" gap={2}>
      {/* <ProjectMembersView /> */}
      <Members avatars={avatars} size="xs" />
      <InviteNewMemebers />
    </Flex>
  );
};

export default ManageMembers;
