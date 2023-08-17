import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { Icon, HStack } from "@chakra-ui/react";
import { PlatformObject } from "../models";
import { IconType } from "react-icons";

const PlatFormIconList = ({ platforms }: { platforms: PlatformObject[] }) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((item, index) => (
        <Icon key={index} as={iconMap[item.slug]} color="gray.500"></Icon>
      ))}
    </HStack>
  );
};

export default PlatFormIconList;
