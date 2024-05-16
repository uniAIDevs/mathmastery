import { LearningPathWhereUniqueInput } from "../learningPath/LearningPathWhereUniqueInput";

export type ProgressReportCreateInput = {
  feedback?: string | null;
  lastUpdated?: Date | null;
  learningPath?: LearningPathWhereUniqueInput | null;
  progressPercentage?: number | null;
  student?: string | null;
};
