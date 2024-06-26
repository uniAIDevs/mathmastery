/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { LearningPathService } from "../learningPath.service";
import { LearningPathCreateInput } from "./LearningPathCreateInput";
import { LearningPath } from "./LearningPath";
import { LearningPathFindManyArgs } from "./LearningPathFindManyArgs";
import { LearningPathWhereUniqueInput } from "./LearningPathWhereUniqueInput";
import { LearningPathUpdateInput } from "./LearningPathUpdateInput";
import { ProgressReportFindManyArgs } from "../../progressReport/base/ProgressReportFindManyArgs";
import { ProgressReport } from "../../progressReport/base/ProgressReport";
import { ProgressReportWhereUniqueInput } from "../../progressReport/base/ProgressReportWhereUniqueInput";
import { ScenarioFindManyArgs } from "../../scenario/base/ScenarioFindManyArgs";
import { Scenario } from "../../scenario/base/Scenario";
import { ScenarioWhereUniqueInput } from "../../scenario/base/ScenarioWhereUniqueInput";

export class LearningPathControllerBase {
  constructor(protected readonly service: LearningPathService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LearningPath })
  async createLearningPath(
    @common.Body() data: LearningPathCreateInput
  ): Promise<LearningPath> {
    return await this.service.createLearningPath({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        level: true,
        mentor: true,
        students: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [LearningPath] })
  @ApiNestedQuery(LearningPathFindManyArgs)
  async learningPaths(@common.Req() request: Request): Promise<LearningPath[]> {
    const args = plainToClass(LearningPathFindManyArgs, request.query);
    return this.service.learningPaths({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        level: true,
        mentor: true,
        students: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: LearningPath })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async learningPath(
    @common.Param() params: LearningPathWhereUniqueInput
  ): Promise<LearningPath | null> {
    const result = await this.service.learningPath({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        level: true,
        mentor: true,
        students: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: LearningPath })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLearningPath(
    @common.Param() params: LearningPathWhereUniqueInput,
    @common.Body() data: LearningPathUpdateInput
  ): Promise<LearningPath | null> {
    try {
      return await this.service.updateLearningPath({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          level: true,
          mentor: true,
          students: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: LearningPath })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLearningPath(
    @common.Param() params: LearningPathWhereUniqueInput
  ): Promise<LearningPath | null> {
    try {
      return await this.service.deleteLearningPath({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          level: true,
          mentor: true,
          students: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/progressReports")
  @ApiNestedQuery(ProgressReportFindManyArgs)
  async findProgressReports(
    @common.Req() request: Request,
    @common.Param() params: LearningPathWhereUniqueInput
  ): Promise<ProgressReport[]> {
    const query = plainToClass(ProgressReportFindManyArgs, request.query);
    const results = await this.service.findProgressReports(params.id, {
      ...query,
      select: {
        createdAt: true,
        feedback: true,
        id: true,
        lastUpdated: true,

        learningPath: {
          select: {
            id: true,
          },
        },

        progressPercentage: true,
        student: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/progressReports")
  async connectProgressReports(
    @common.Param() params: LearningPathWhereUniqueInput,
    @common.Body() body: ProgressReportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      progressReports: {
        connect: body,
      },
    };
    await this.service.updateLearningPath({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/progressReports")
  async updateProgressReports(
    @common.Param() params: LearningPathWhereUniqueInput,
    @common.Body() body: ProgressReportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      progressReports: {
        set: body,
      },
    };
    await this.service.updateLearningPath({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/progressReports")
  async disconnectProgressReports(
    @common.Param() params: LearningPathWhereUniqueInput,
    @common.Body() body: ProgressReportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      progressReports: {
        disconnect: body,
      },
    };
    await this.service.updateLearningPath({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/scenarios")
  @ApiNestedQuery(ScenarioFindManyArgs)
  async findScenarios(
    @common.Req() request: Request,
    @common.Param() params: LearningPathWhereUniqueInput
  ): Promise<Scenario[]> {
    const query = plainToClass(ScenarioFindManyArgs, request.query);
    const results = await this.service.findScenarios(params.id, {
      ...query,
      select: {
        createdAt: true,
        createdBy: true,
        description: true,
        id: true,

        learningPath: {
          select: {
            id: true,
          },
        },

        problemStatement: true,
        relatedVisualization: true,
        solution: true,
        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/scenarios")
  async connectScenarios(
    @common.Param() params: LearningPathWhereUniqueInput,
    @common.Body() body: ScenarioWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      scenarios: {
        connect: body,
      },
    };
    await this.service.updateLearningPath({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/scenarios")
  async updateScenarios(
    @common.Param() params: LearningPathWhereUniqueInput,
    @common.Body() body: ScenarioWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      scenarios: {
        set: body,
      },
    };
    await this.service.updateLearningPath({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/scenarios")
  async disconnectScenarios(
    @common.Param() params: LearningPathWhereUniqueInput,
    @common.Body() body: ScenarioWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      scenarios: {
        disconnect: body,
      },
    };
    await this.service.updateLearningPath({
      where: params,
      data,
      select: { id: true },
    });
  }
}
