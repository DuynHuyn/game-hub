import { PlatformObject } from "../models";
import { useData } from "./useData";

export const usePlatform = () =>
  useData<PlatformObject>("/platforms/lists/parents");
