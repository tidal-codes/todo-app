import Dialog from "@/shared/ui/Dialog";
import { Box, Flex, Text, Heading, CloseButton, Image } from "@chakra-ui/react";
import type React from "react";
import { useEffect, useState } from "react";
import inviteMembers from "@/assets/images/invite-members.png";
import { useUserSearch } from "../../hooks/useUserSearch";
import MembersList from "./MembersList";
import SearchInput from "./SearchInput";

const InviteMembersDialog = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [open, setOpen] = useState(false);
  const { search, setSearch, users, isLoading, reset } = useUserSearch();

  useEffect(() => {
    if (open) {
      reset();
    }
  }, [open]);

  return (
    <Dialog trigger={children} open={open} setOpen={setOpen} maxWidth="350px">
      <Box>
        <CloseButton size="sm" onClick={() => setOpen(false)} />
      </Box>
      <Flex justifyContent="center">
        <Image src={inviteMembers} width="150px" />
      </Flex>
      <Flex flexDirection="column" gap={4}>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Heading fontWeight="normal">دعوت به پروژه</Heading>
          <Text color="gray.600">اعضای تیمت رو به این پروژه اضافه کن</Text>
        </Flex>
        <Flex width="100%" alignItems="end" gap={3} mb={3}>
          <SearchInput
            value={search}
            onChange={setSearch}
            isLoading={isLoading}
          />
        </Flex>
        <MembersList users={users} />
      </Flex>
    </Dialog>
  );
};

export default InviteMembersDialog;
