import * as graphql from "@nestjs/graphql";
import { ScenarioResolverBase } from "./base/scenario.resolver.base";
import { Scenario } from "./base/Scenario";
import { ScenarioService } from "./scenario.service";

@graphql.Resolver(() => Scenario)
export class ScenarioResolver extends ScenarioResolverBase {
  constructor(protected readonly service: ScenarioService) {
    super(service);
  }
}
