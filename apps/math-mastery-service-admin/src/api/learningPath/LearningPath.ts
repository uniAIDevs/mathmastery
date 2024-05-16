import { ProgressReport } from "../progressReport/ProgressReport";
import { Scenario } from "../scenario/Scenario";

export type LearningPath = {
  createdAt: Date;
  description: string | null;
  id: string;
  level?: "Option1" | null;
  mentor: string | null;
  progressReports?: Array<ProgressReport>;
  scenarios?: Array<Scenario>;
  students: string | null;
  title: string | null;
  updatedAt: Date;
};
