import { LearningPathWhereUniqueInput } from "../learningPath/LearningPathWhereUniqueInput";

export type ProgressReportUpdateInput = {
  feedback?: string | null;
  lastUpdated?: Date | null;
  learningPath?: LearningPathWhereUniqueInput | null;
  progressPercentage?: number | null;
  student?: string | null;
};
