import { Module } from "@nestjs/common";
import { ProgressReportModuleBase } from "./base/progressReport.module.base";
import { ProgressReportService } from "./progressReport.service";
import { ProgressReportController } from "./progressReport.controller";
import { ProgressReportResolver } from "./progressReport.resolver";

@Module({
  imports: [ProgressReportModuleBase],
  controllers: [ProgressReportController],
  providers: [ProgressReportService, ProgressReportResolver],
  exports: [ProgressReportService],
})
export class ProgressReportModule {}
