import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (keyword: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="40px" borderRadius="full" />
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
