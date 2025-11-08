import { Dialog as BaseDialog, Portal } from "@chakra-ui/react";
import React from "react";

type DialogProps = React.ComponentPropsWithoutRef<typeof BaseDialog.Content> & {
  children: React.ReactNode;
  trigger: React.ReactElement;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Dialog = ({
  children,
  trigger,
  open,
  setOpen,
  ...props
}: DialogProps) => {
  return (
    <BaseDialog.Root
      placement="center"
      lazyMount
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <BaseDialog.Trigger asChild>{trigger}</BaseDialog.Trigger>
      <Portal>
        <BaseDialog.Backdrop />
        <BaseDialog.Positioner>
          <BaseDialog.Content
            border="1px solid"
            borderColor="gray.500"
            borderRadius="sm"
            dir="rtl"
            {...props}
          >
            {children}
          </BaseDialog.Content>
        </BaseDialog.Positioner>
      </Portal>
    </BaseDialog.Root>
  );
};

export default Dialog;
