import React from "react";
import InviteMembersDialog from "./InviteMembers/InviteMemberDialog";
import { Button } from "@chakra-ui/react";
import { Users } from "lucide-react";

const InviteNewMember = () => {
  return (
    <InviteMembersDialog>
      <Button>
        افزودن اعضا
        <Users size="10" />
      </Button>
    </InviteMembersDialog>
  );
};

export default InviteNewMember;
