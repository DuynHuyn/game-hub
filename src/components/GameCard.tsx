import {
  Card,
  CardBody,
  Image,
  Heading,
  Badge,
  HStack,
} from "@chakra-ui/react";
import { GameObject } from "../models";
import PlatFormIconList from "./PlatFormIconList";
import { getNoImageUrl } from "../utils";
import Emoji from "./Emoji";

const GameCard = ({ game }: { game: GameObject }) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image
        src={getNoImageUrl(game.background_image)}
        objectFit="cover"
        width={600}
        height={300}
      ></Image>

      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatFormIconList
            platforms={game.parent_platforms.map((item) => item.platform)}
          ></PlatFormIconList>
          <Badge
            fontSize="14px"
            paddingX={2}
            borderRadius="4px"
            colorScheme={
              game.metacritic > 75
                ? "green"
                : game.metacritic > 60
                ? "yellow"
                : ""
            }
          >
            {game.metacritic}
          </Badge>
        </HStack>
        <Heading fontSize="2xl">
          {game.name} <Emoji rating={game.rating_top}></Emoji>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
