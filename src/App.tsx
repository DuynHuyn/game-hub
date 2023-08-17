import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { GameQuery } from "./models";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px" }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(keyword) => setGameQuery({ ...gameQuery, keyword })}
        ></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenes={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          ></GenreList>
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box padding={4}>
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelect={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              ></PlatformSelector>
            </Box>

            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelect={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            ></SortSelector>
          </Flex>

          <GameGrid gameQuery={gameQuery} />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
