import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGames } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../models";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing={6}>
      {isLoading &&
        skeleton.map((item) => (
          <GameCardContainer key={item}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {!isLoading &&
        data.map((item) => (
          <GameCardContainer key={item.id}>
            <GameCard game={item}></GameCard>
          </GameCardContainer>
        ))}
    </SimpleGrid>
  );
};

export default GameGrid;
