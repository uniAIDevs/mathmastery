import { Visualization as TVisualization } from "../api/visualization/Visualization";

export const VISUALIZATION_TITLE_FIELD = "title";

export const VisualizationTitle = (record: TVisualization): string => {
  return record.title?.toString() || String(record.id);
};
