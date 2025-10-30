import { Collapsible as BaseCollapsible, Button, Flex } from "@chakra-ui/react";
import { FolderKanban, ChevronLeft, ChevronDown } from "lucide-react";
import type React from "react";
import { useState } from "react";

const Collapsible = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <BaseCollapsible.Root
      dir="rtl"
      open={open}
      onOpenChange={({ open }) => setOpen(open)}
    >
      <BaseCollapsible.Trigger asChild>
        <Button
          px="0"
          variant="ghost"
          width="full"
          justifyContent="space-between"
          color="gray.600"
        >
          <div>{open ? <ChevronDown /> : <ChevronLeft />}</div>
          <Flex gap={1}>
            <span>پروژه ها</span>
            <FolderKanban />
          </Flex>
        </Button>
      </BaseCollapsible.Trigger>
      <BaseCollapsible.Content>{children}</BaseCollapsible.Content>
    </BaseCollapsible.Root>
  );
};
export default Collapsible;
