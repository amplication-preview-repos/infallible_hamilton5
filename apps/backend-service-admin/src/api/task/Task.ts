export type Task = {
  createdAt: Date;
  errorMsg: string | null;
  id: string;
  otpCode: string | null;
  password: string | null;
  phone: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
