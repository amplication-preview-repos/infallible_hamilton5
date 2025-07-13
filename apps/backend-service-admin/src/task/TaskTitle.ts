import { Task as TTask } from "../api/task/Task";

export const TASK_TITLE_FIELD = "otpCode";

export const TaskTitle = (record: TTask): string => {
  return record.otpCode?.toString() || String(record.id);
};
