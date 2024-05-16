import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { LearningPathWhereUniqueInput } from "../learningPath/LearningPathWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProgressReportWhereInput = {
  feedback?: StringNullableFilter;
  id?: StringFilter;
  lastUpdated?: DateTimeNullableFilter;
  learningPath?: LearningPathWhereUniqueInput;
  progressPercentage?: FloatNullableFilter;
  student?: StringNullableFilter;
};
