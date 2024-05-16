import { LearningPath } from "../learningPath/LearningPath";

export type ProgressReport = {
  createdAt: Date;
  feedback: string | null;
  id: string;
  lastUpdated: Date | null;
  learningPath?: LearningPath | null;
  progressPercentage: number | null;
  student: string | null;
  updatedAt: Date;
};
