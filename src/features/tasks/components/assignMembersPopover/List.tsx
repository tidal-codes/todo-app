import { useMembers } from "@/features/members/hooks/useMembers";
import { For, VStack } from "@chakra-ui/react";
import Member from "./member";
import { UseNewTaskContext } from "../../context/NewTaskProvider";

const List = () => {
  const { members } = useMembers();
  if (!members) return null;
  const { form, dispatch } = UseNewTaskContext();

  const assign = (id: string) => {
    const exists = form.assignedMembers.some((x) => x === id);
    exists
      ? dispatch({ type: "REMOVE_MEMBER", value: id })
      : dispatch({ type: "ADD_MEMBER", value: id });
  };

  return (
    <VStack>
      <For each={members.users}>
        {(member) => {
          const assigned = form.assignedMembers.some((x) => x === member.id);
          return (
            <Member
              member={member}
              isAssigned={assigned}
              onToggleAssign={assign}
            />
          );
        }}
      </For>
    </VStack>
  );
};

export default List;
