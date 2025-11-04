import Avatar from "@/shared/ui/Avatar";
import { Box, For, Flex, Button, Spinner } from "@chakra-ui/react";
import "./avatar.css";
import AddMembers from "@/features/members/components/InviteMembers/InviteMemberDialog";
import { useQuery } from "@tanstack/react-query";
import type { User } from "@/shared/types";
import { useParams } from "react-router-dom";
import { supabaseGetProjectMembers } from "@/app/api/projectApi";
const members = [
  { src: "https://i.pravatar.cc/150?img=5", name: "tidal" },
  { src: "https://i.pravatar.cc/150?img=6", name: "tidal" },
  { src: "https://i.pravatar.cc/150?img=7", name: "tidal" },
  { src: "https://i.pravatar.cc/150?img=8", name: "tidal" },
  { src: "https://i.pravatar.cc/150?img=9", name: "tidal" },
];
const ProjectMembersView = () => {
  const { projectID } = useParams();
  const { data: members, isLoading } = useQuery<
    { user_id: string; users: User }[]
  >({
    queryKey: ["members", projectID],
    queryFn: async () => supabaseGetProjectMembers(projectID!),
    enabled: !!projectID,
  });
  !isLoading && console.log(members);
  return (
    <Flex gap={2}>
      <AddMembers>
        <Button>+</Button>
      </AddMembers>
      <Box
        className="avatar-container"
        backgroundColor="gray.200"
        px={2}
        py={1}
      >
        {!isLoading ? (
          <For each={members}>
            {(member) => {
              return (
                <Avatar
                  src={member.users.profile_url}
                  name={member.users.first_name}
                  size="xs"
                  border="1px solid"
                />
              );
            }}
          </For>
        ) : (
          <p>
            <Spinner />
          </p>
        )}
        {/* <Flex
                    alignItems="center"
                    justifyContent="center"
                    rounded="full" width="30px"
                    height="30px"
                    backgroundColor="red.200"
                    zIndex={100}
                    border="1px solid">
                    {members.length - 4}+
                </Flex> */}
      </Box>
    </Flex>
  );
};

export default ProjectMembersView;
