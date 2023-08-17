import { BaseResponse } from "./common";

export interface GameObject {
  id: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatformObject }[];
  metacritic: number;
  rating_top: number;
  rating: number;
}
export interface PlatformObject {
  id: string;
  name: string;
  slug: string;
}

export interface GenreObject {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}
export interface GenresResponse extends BaseResponse<GenreObject> {}

export interface GamesResponse extends BaseResponse<GameObject> {}

export interface GameQuery {
  genre: GenreObject | null;
  platform: PlatformObject | null;
  sortOrder: string;
  keyword: string;
}
