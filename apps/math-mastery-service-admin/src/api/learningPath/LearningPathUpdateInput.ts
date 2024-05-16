import { ProgressReportUpdateManyWithoutLearningPathsInput } from "./ProgressReportUpdateManyWithoutLearningPathsInput";
import { ScenarioUpdateManyWithoutLearningPathsInput } from "./ScenarioUpdateManyWithoutLearningPathsInput";

export type LearningPathUpdateInput = {
  description?: string | null;
  level?: "Option1" | null;
  mentor?: string | null;
  progressReports?: ProgressReportUpdateManyWithoutLearningPathsInput;
  scenarios?: ScenarioUpdateManyWithoutLearningPathsInput;
  students?: string | null;
  title?: string | null;
};
