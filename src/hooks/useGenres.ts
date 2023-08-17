import { GenreObject } from "../models";
import { useData } from "./useData";
import genre from "../data/genre";

export const useGenres = () => ({ data: genre, isLoading: false, error: null });
