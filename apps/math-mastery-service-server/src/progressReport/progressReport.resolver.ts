import * as graphql from "@nestjs/graphql";
import { ProgressReportResolverBase } from "./base/progressReport.resolver.base";
import { ProgressReport } from "./base/ProgressReport";
import { ProgressReportService } from "./progressReport.service";

@graphql.Resolver(() => ProgressReport)
export class ProgressReportResolver extends ProgressReportResolverBase {
  constructor(protected readonly service: ProgressReportService) {
    super(service);
  }
}
