import { registerEnumType } from "@nestjs/graphql";

export enum TaskStatus {
    Pending = "pending",
    Processing = "processing",
    Error = "error",
    WaitingOtp = "waiting_otp",
    Verified = "verified"
}

registerEnumType(TaskStatus, {
    name: "TaskStatus",
  });