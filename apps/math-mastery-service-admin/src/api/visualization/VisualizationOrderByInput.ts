import { SortOrder } from "../../util/SortOrder";

export type VisualizationOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
