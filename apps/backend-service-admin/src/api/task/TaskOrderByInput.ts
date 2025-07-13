import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  createdAt?: SortOrder;
  errorMsg?: SortOrder;
  id?: SortOrder;
  otpCode?: SortOrder;
  password?: SortOrder;
  phone?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
