import { LearningPath } from "../learningPath/LearningPath";
import { JsonValue } from "type-fest";

export type Scenario = {
  createdAt: Date;
  createdBy: string | null;
  description: string | null;
  id: string;
  learningPath?: LearningPath | null;
  problemStatement: string | null;
  relatedVisualization: string | null;
  solution: JsonValue;
  title: string | null;
  updatedAt: Date;
};
