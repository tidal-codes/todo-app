import React from "react";
import { Popover as BasePopover, Portal } from "@chakra-ui/react";
type PopoverProps = {
  children: React.ReactNode;
  ButtonComponent?: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Popover = ({
  children,
  ButtonComponent,
  open,
  setOpen,
}: PopoverProps) => {
  return (
    <BasePopover.Root open={open} onOpenChange={({ open }) => setOpen(open)}>
      {/* If a component is provided, the trigger simply acts as its child */}
      <BasePopover.Trigger asChild={ButtonComponent ? true : false}>
        {ButtonComponent ? ButtonComponent : null}
      </BasePopover.Trigger>
      <Portal>
        <BasePopover.Positioner>
          <BasePopover.Content dir="rtl">{children}</BasePopover.Content>
        </BasePopover.Positioner>
      </Portal>
    </BasePopover.Root>
  );
};

export default Popover;
