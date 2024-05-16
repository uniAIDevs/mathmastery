import { Module } from "@nestjs/common";
import { ScenarioModuleBase } from "./base/scenario.module.base";
import { ScenarioService } from "./scenario.service";
import { ScenarioController } from "./scenario.controller";
import { ScenarioResolver } from "./scenario.resolver";

@Module({
  imports: [ScenarioModuleBase],
  controllers: [ScenarioController],
  providers: [ScenarioService, ScenarioResolver],
  exports: [ScenarioService],
})
export class ScenarioModule {}
