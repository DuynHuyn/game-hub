import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { useGenres } from "../hooks";
import { GenreObject } from "../models";

interface Props {
  onSelectGenre: (genre: GenreObject) => void;
  selectedGenes: GenreObject | null;
}

const GenreList = ({ onSelectGenre, selectedGenes }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading as="h3" fontSize="3xl">
        Genre
      </Heading>
      <List>
        {data.map((item) => (
          <ListItem key={item.id} marginTop="8px">
            <HStack>
              <Image
                src={item.image_background}
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
              />
              <Button
                fontSize="lg"
                variant="link"
                fontWeight={item.id === selectedGenes?.id ? "bold" : "normal"}
                whiteSpace="normal"
                textAlign="left"
                onClick={() => onSelectGenre(item)}
              >
                {item.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
