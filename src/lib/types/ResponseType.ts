export interface ResponseType<T> {
  message: string;
  result: T | null;
  statusCode: number | null;
}
