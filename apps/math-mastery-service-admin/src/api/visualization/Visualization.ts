import { JsonValue } from "type-fest";

export type Visualization = {
  content: JsonValue;
  createdAt: Date;
  createdBy: string | null;
  description: string | null;
  id: string;
  title: string | null;
  updatedAt: Date;
};
