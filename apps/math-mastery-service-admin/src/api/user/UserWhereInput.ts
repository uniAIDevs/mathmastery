import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  password?: StringNullableFilter;
  role?: "Option1";
  username?: StringNullableFilter;
};
