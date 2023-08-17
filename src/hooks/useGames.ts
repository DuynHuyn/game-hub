import { GameObject, GameQuery, GenreObject, PlatformObject } from "../models";
import { useData } from "./useData";
export const useGames = (gameQuery: GameQuery) =>
  useData<GameObject>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.keyword,
      },
    },
    [gameQuery]
  );
