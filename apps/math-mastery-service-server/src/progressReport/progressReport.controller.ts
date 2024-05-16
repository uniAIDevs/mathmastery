import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProgressReportService } from "./progressReport.service";
import { ProgressReportControllerBase } from "./base/progressReport.controller.base";

@swagger.ApiTags("progressReports")
@common.Controller("progressReports")
export class ProgressReportController extends ProgressReportControllerBase {
  constructor(protected readonly service: ProgressReportService) {
    super(service);
  }
}
