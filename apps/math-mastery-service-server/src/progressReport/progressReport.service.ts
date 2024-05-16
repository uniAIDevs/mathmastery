import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProgressReportServiceBase } from "./base/progressReport.service.base";

@Injectable()
export class ProgressReportService extends ProgressReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
