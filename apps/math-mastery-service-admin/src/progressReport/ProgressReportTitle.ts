import { ProgressReport as TProgressReport } from "../api/progressReport/ProgressReport";

export const PROGRESSREPORT_TITLE_FIELD = "student";

export const ProgressReportTitle = (record: TProgressReport): string => {
  return record.student?.toString() || String(record.id);
};
