export interface BaseResponse<T> {
  count: number;
  results: T[];
}
