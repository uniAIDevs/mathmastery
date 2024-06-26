/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ScenarioWhereUniqueInput } from "./ScenarioWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ScenarioUpdateInput } from "./ScenarioUpdateInput";

@ArgsType()
class UpdateScenarioArgs {
  @ApiProperty({
    required: true,
    type: () => ScenarioWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ScenarioWhereUniqueInput)
  @Field(() => ScenarioWhereUniqueInput, { nullable: false })
  where!: ScenarioWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ScenarioUpdateInput,
  })
  @ValidateNested()
  @Type(() => ScenarioUpdateInput)
  @Field(() => ScenarioUpdateInput, { nullable: false })
  data!: ScenarioUpdateInput;
}

export { UpdateScenarioArgs as UpdateScenarioArgs };
