import { SortOrder } from "../../util/SortOrder";

export type ScenarioOrderByInput = {
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  learningPathId?: SortOrder;
  problemStatement?: SortOrder;
  relatedVisualization?: SortOrder;
  solution?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
