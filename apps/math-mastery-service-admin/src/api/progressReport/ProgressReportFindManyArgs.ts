import { ProgressReportWhereInput } from "./ProgressReportWhereInput";
import { ProgressReportOrderByInput } from "./ProgressReportOrderByInput";

export type ProgressReportFindManyArgs = {
  where?: ProgressReportWhereInput;
  orderBy?: Array<ProgressReportOrderByInput>;
  skip?: number;
  take?: number;
};
