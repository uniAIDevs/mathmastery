import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProgressReportListRelationFilter } from "../progressReport/ProgressReportListRelationFilter";
import { ScenarioListRelationFilter } from "../scenario/ScenarioListRelationFilter";

export type LearningPathWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  level?: "Option1";
  mentor?: StringNullableFilter;
  progressReports?: ProgressReportListRelationFilter;
  scenarios?: ScenarioListRelationFilter;
  students?: StringNullableFilter;
  title?: StringNullableFilter;
};
