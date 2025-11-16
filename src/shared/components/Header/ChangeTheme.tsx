import { useColorMode } from "@/app/theme/color-mode";
import { Button } from "@chakra-ui/react";
import { Tooltip } from "@/shared/ui/Tooltip";
import { Moon, Sun } from "lucide-react";
import type { DynamicMenuItem } from "@/shared/types/menu";
import Menu from "@/shared/ui/Menu";

const MenuItems: DynamicMenuItem[] = [{}];

const ChangeTheme = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Tooltip content="تغییر تم" showArrow>
      <Menu>
        <Button size="square" variant="ghost" onClick={toggleColorMode}>
          {colorMode === "dark" ? <Moon /> : <Sun />}
        </Button>
      </Menu>
    </Tooltip>
  );
};

export default ChangeTheme;
