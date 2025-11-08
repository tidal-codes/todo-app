import { Flex, Spinner, AvatarGroup, For } from "@chakra-ui/react";
import Avatar from "@/shared/ui/Avatar";
import { useMembers } from "../hooks/useMembers";

const ProjectMembersView = () => {
  const { members, isLoading } = useMembers();
  return (
    <Flex>
      {isLoading ? (
        <Spinner />
      ) : (
        <AvatarGroup>
          <For each={members}>
            {(member) => {
              const displayName = `${member.users.first_name} ${member.users.last_name}`;
              return (
                <Avatar
                  src={member.users.profile_url}
                  name={displayName}
                  size="xs"
                  colorPalette={["red", "blue", "green", "purple", "orange"]}
                />
              );
            }}
          </For>
        </AvatarGroup>
      )}
    </Flex>
  );
};

export default ProjectMembersView;
