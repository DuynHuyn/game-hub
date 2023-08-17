import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { usePlatform } from "../hooks";
import { PlatformObject } from "../models";

interface Props {
  onSelect: (data: PlatformObject) => void;
  selectedPlatform: PlatformObject | null;
}

const PlatformSelector = ({ onSelect, selectedPlatform }: Props) => {
  const { data, error } = usePlatform();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data.map((item) => (
          <MenuItem key={item.id} onClick={() => onSelect(item)}>
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
