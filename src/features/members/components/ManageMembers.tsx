import { Box, Flex } from "@chakra-ui/react";
import ProjectMembersView from "./ProjectMembersView";
import InviteNewMemebers from "./InviteNewMembers";

const ManageMembers = () => {
  return (
    <Flex alignItems="center" gap={2}>
      <ProjectMembersView />
      <InviteNewMemebers />
    </Flex>
  );
};

export default ManageMembers;
