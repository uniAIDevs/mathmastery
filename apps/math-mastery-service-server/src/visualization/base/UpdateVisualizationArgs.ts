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
import { VisualizationWhereUniqueInput } from "./VisualizationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { VisualizationUpdateInput } from "./VisualizationUpdateInput";

@ArgsType()
class UpdateVisualizationArgs {
  @ApiProperty({
    required: true,
    type: () => VisualizationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VisualizationWhereUniqueInput)
  @Field(() => VisualizationWhereUniqueInput, { nullable: false })
  where!: VisualizationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => VisualizationUpdateInput,
  })
  @ValidateNested()
  @Type(() => VisualizationUpdateInput)
  @Field(() => VisualizationUpdateInput, { nullable: false })
  data!: VisualizationUpdateInput;
}

export { UpdateVisualizationArgs as UpdateVisualizationArgs };