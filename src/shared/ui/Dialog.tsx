import { Dialog as BaseDialog, Portal } from "@chakra-ui/react";
import React from "react";

interface DialogProps {
  children: React.ReactNode;
  trigger: React.ReactElement;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dialog = ({ children, trigger, open, setOpen }: DialogProps) => {
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
          <BaseDialog.Content>
            <BaseDialog.Body dir="rtl">{children}</BaseDialog.Body>
          </BaseDialog.Content>
        </BaseDialog.Positioner>
      </Portal>
    </BaseDialog.Root>
  );
};

export default Dialog;
