import { LearningPathWhereUniqueInput } from "../learningPath/LearningPathWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ScenarioUpdateInput = {
  createdBy?: string | null;
  description?: string | null;
  learningPath?: LearningPathWhereUniqueInput | null;
  problemStatement?: string | null;
  relatedVisualization?: string | null;
  solution?: InputJsonValue;
  title?: string | null;
};
