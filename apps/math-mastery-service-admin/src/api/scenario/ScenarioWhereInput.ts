import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LearningPathWhereUniqueInput } from "../learningPath/LearningPathWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";

export type ScenarioWhereInput = {
  createdBy?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  learningPath?: LearningPathWhereUniqueInput;
  problemStatement?: StringNullableFilter;
  relatedVisualization?: StringNullableFilter;
  solution?: JsonFilter;
  title?: StringNullableFilter;
};
