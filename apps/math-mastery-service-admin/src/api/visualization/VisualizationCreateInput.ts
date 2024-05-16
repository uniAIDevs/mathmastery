import { InputJsonValue } from "../../types";

export type VisualizationCreateInput = {
  content?: InputJsonValue;
  createdBy?: string | null;
  description?: string | null;
  title?: string | null;
};
