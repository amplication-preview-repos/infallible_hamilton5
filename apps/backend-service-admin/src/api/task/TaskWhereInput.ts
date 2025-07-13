import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TaskWhereInput = {
  errorMsg?: StringNullableFilter;
  id?: StringFilter;
  otpCode?: StringNullableFilter;
  password?: StringNullableFilter;
  phone?: StringNullableFilter;
  status?: "Option1";
};
