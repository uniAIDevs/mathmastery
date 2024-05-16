/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Scenario as PrismaScenario,
  LearningPath as PrismaLearningPath,
} from "@prisma/client";

export class ScenarioServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ScenarioCountArgs, "select">): Promise<number> {
    return this.prisma.scenario.count(args);
  }

  async scenarios<T extends Prisma.ScenarioFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScenarioFindManyArgs>
  ): Promise<PrismaScenario[]> {
    return this.prisma.scenario.findMany<Prisma.ScenarioFindManyArgs>(args);
  }
  async scenario<T extends Prisma.ScenarioFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScenarioFindUniqueArgs>
  ): Promise<PrismaScenario | null> {
    return this.prisma.scenario.findUnique(args);
  }
  async createScenario<T extends Prisma.ScenarioCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScenarioCreateArgs>
  ): Promise<PrismaScenario> {
    return this.prisma.scenario.create<T>(args);
  }
  async updateScenario<T extends Prisma.ScenarioUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScenarioUpdateArgs>
  ): Promise<PrismaScenario> {
    return this.prisma.scenario.update<T>(args);
  }
  async deleteScenario<T extends Prisma.ScenarioDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScenarioDeleteArgs>
  ): Promise<PrismaScenario> {
    return this.prisma.scenario.delete(args);
  }

  async getLearningPath(parentId: string): Promise<PrismaLearningPath | null> {
    return this.prisma.scenario
      .findUnique({
        where: { id: parentId },
      })
      .learningPath();
  }
}