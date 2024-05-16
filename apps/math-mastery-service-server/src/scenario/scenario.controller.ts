import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ScenarioService } from "./scenario.service";
import { ScenarioControllerBase } from "./base/scenario.controller.base";

@swagger.ApiTags("scenarios")
@common.Controller("scenarios")
export class ScenarioController extends ScenarioControllerBase {
  constructor(protected readonly service: ScenarioService) {
    super(service);
  }
}
