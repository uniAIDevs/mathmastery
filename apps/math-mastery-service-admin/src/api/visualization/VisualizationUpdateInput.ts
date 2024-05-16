import { InputJsonValue } from "../../types";

export type VisualizationUpdateInput = {
  content?: InputJsonValue;
  createdBy?: string | null;
  description?: string | null;
  title?: string | null;
};
