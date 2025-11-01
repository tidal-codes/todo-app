import { Menu as BaseMenu } from "@chakra-ui/react";

const Menu = () => {
  return (
    <BaseMenu.Root>
      <BaseMenu.Trigger />
      <BaseMenu.Positioner>
        <BaseMenu.Content>
          <BaseMenu.Item />

          <BaseMenu.ItemGroup>
            <BaseMenu.Item />
          </BaseMenu.ItemGroup>

          <BaseMenu.Separator />
          <BaseMenu.Arrow />

          <BaseMenu.CheckboxItem>
            <BaseMenu.ItemIndicator />
          </BaseMenu.CheckboxItem>

          <BaseMenu.RadioItemGroup>
            <BaseMenu.RadioItem>
              <BaseMenu.ItemIndicator />
            </BaseMenu.RadioItem>
          </BaseMenu.RadioItemGroup>
        </BaseMenu.Content>
      </BaseMenu.Positioner>
    </BaseMenu.Root>
  );
};

export default Menu;
