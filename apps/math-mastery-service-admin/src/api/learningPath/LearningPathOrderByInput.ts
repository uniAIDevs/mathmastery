import { SortOrder } from "../../util/SortOrder";

export type LearningPathOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  level?: SortOrder;
  mentor?: SortOrder;
  students?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
