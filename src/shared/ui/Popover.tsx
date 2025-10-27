import React from "react";
import { Popover as BasePopover, Portal } from "@chakra-ui/react";
type PopoverProps = {
  children: React.ReactNode;
  ButtonComponent?: React.ReactNode;
};
const Popover = ({ children, ButtonComponent }: PopoverProps) => {
  return (
    <BasePopover.Root>
      {/* If a component is provided, the trigger simply acts as its child */}
      <BasePopover.Trigger asChild={ButtonComponent ? true : false}>
        {ButtonComponent ? ButtonComponent : null}
      </BasePopover.Trigger>
      <Portal>
        <BasePopover.Positioner>
          <BasePopover.Content>
            <BasePopover.Body>{children}</BasePopover.Body>
          </BasePopover.Content>
        </BasePopover.Positioner>
      </Portal>
    </BasePopover.Root>
  );
};

export default Popover;
