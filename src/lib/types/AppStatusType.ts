export type ReqStatus = "idle" | "success" | "error";
export interface AppStatus {
  status: ReqStatus;
  message: string | string[];
}
