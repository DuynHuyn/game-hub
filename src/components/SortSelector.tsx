import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { PlatformObject } from "../models";

interface Props {
  onSelect: (value: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelect, sortOrder }: Props) => {
  const SortOption = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by:{" "}
        {SortOption.find((item) => item.value === sortOrder)?.label ||
          "Relevance"}
      </MenuButton>
      <MenuList>
        {SortOption.map((item, index) => (
          <MenuItem
            key={index}
            value={item.value}
            onClick={() => onSelect(item.value)}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
