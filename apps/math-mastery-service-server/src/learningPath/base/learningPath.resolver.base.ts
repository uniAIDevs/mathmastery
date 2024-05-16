/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { LearningPath } from "./LearningPath";
import { LearningPathCountArgs } from "./LearningPathCountArgs";
import { LearningPathFindManyArgs } from "./LearningPathFindManyArgs";
import { LearningPathFindUniqueArgs } from "./LearningPathFindUniqueArgs";
import { CreateLearningPathArgs } from "./CreateLearningPathArgs";
import { UpdateLearningPathArgs } from "./UpdateLearningPathArgs";
import { DeleteLearningPathArgs } from "./DeleteLearningPathArgs";
import { ProgressReportFindManyArgs } from "../../progressReport/base/ProgressReportFindManyArgs";
import { ProgressReport } from "../../progressReport/base/ProgressReport";
import { ScenarioFindManyArgs } from "../../scenario/base/ScenarioFindManyArgs";
import { Scenario } from "../../scenario/base/Scenario";
import { LearningPathService } from "../learningPath.service";
@graphql.Resolver(() => LearningPath)
export class LearningPathResolverBase {
  constructor(protected readonly service: LearningPathService) {}

  async _learningPathsMeta(
    @graphql.Args() args: LearningPathCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [LearningPath])
  async learningPaths(
    @graphql.Args() args: LearningPathFindManyArgs
  ): Promise<LearningPath[]> {
    return this.service.learningPaths(args);
  }

  @graphql.Query(() => LearningPath, { nullable: true })
  async learningPath(
    @graphql.Args() args: LearningPathFindUniqueArgs
  ): Promise<LearningPath | null> {
    const result = await this.service.learningPath(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => LearningPath)
  async createLearningPath(
    @graphql.Args() args: CreateLearningPathArgs
  ): Promise<LearningPath> {
    return await this.service.createLearningPath({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => LearningPath)
  async updateLearningPath(
    @graphql.Args() args: UpdateLearningPathArgs
  ): Promise<LearningPath | null> {
    try {
      return await this.service.updateLearningPath({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => LearningPath)
  async deleteLearningPath(
    @graphql.Args() args: DeleteLearningPathArgs
  ): Promise<LearningPath | null> {
    try {
      return await this.service.deleteLearningPath(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [ProgressReport], { name: "progressReports" })
  async findProgressReports(
    @graphql.Parent() parent: LearningPath,
    @graphql.Args() args: ProgressReportFindManyArgs
  ): Promise<ProgressReport[]> {
    const results = await this.service.findProgressReports(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Scenario], { name: "scenarios" })
  async findScenarios(
    @graphql.Parent() parent: LearningPath,
    @graphql.Args() args: ScenarioFindManyArgs
  ): Promise<Scenario[]> {
    const results = await this.service.findScenarios(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}