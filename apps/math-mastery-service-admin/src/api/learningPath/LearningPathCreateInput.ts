import { ProgressReportCreateNestedManyWithoutLearningPathsInput } from "./ProgressReportCreateNestedManyWithoutLearningPathsInput";
import { ScenarioCreateNestedManyWithoutLearningPathsInput } from "./ScenarioCreateNestedManyWithoutLearningPathsInput";

export type LearningPathCreateInput = {
  description?: string | null;
  level?: "Option1" | null;
  mentor?: string | null;
  progressReports?: ProgressReportCreateNestedManyWithoutLearningPathsInput;
  scenarios?: ScenarioCreateNestedManyWithoutLearningPathsInput;
  students?: string | null;
  title?: string | null;
};
