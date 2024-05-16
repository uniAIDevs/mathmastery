import { SortOrder } from "../../util/SortOrder";

export type ProgressReportOrderByInput = {
  createdAt?: SortOrder;
  feedback?: SortOrder;
  id?: SortOrder;
  lastUpdated?: SortOrder;
  learningPathId?: SortOrder;
  progressPercentage?: SortOrder;
  student?: SortOrder;
  updatedAt?: SortOrder;
};
