/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsEnum, ValidateNested } from "class-validator";
import { EnumLearningPathLevel } from "./EnumLearningPathLevel";
import { ProgressReportUpdateManyWithoutLearningPathsInput } from "./ProgressReportUpdateManyWithoutLearningPathsInput";
import { Type } from "class-transformer";
import { ScenarioUpdateManyWithoutLearningPathsInput } from "./ScenarioUpdateManyWithoutLearningPathsInput";

@InputType()
class LearningPathUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumLearningPathLevel,
  })
  @IsEnum(EnumLearningPathLevel)
  @IsOptional()
  @Field(() => EnumLearningPathLevel, {
    nullable: true,
  })
  level?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  mentor?: string | null;

  @ApiProperty({
    required: false,
    type: () => ProgressReportUpdateManyWithoutLearningPathsInput,
  })
  @ValidateNested()
  @Type(() => ProgressReportUpdateManyWithoutLearningPathsInput)
  @IsOptional()
  @Field(() => ProgressReportUpdateManyWithoutLearningPathsInput, {
    nullable: true,
  })
  progressReports?: ProgressReportUpdateManyWithoutLearningPathsInput;

  @ApiProperty({
    required: false,
    type: () => ScenarioUpdateManyWithoutLearningPathsInput,
  })
  @ValidateNested()
  @Type(() => ScenarioUpdateManyWithoutLearningPathsInput)
  @IsOptional()
  @Field(() => ScenarioUpdateManyWithoutLearningPathsInput, {
    nullable: true,
  })
  scenarios?: ScenarioUpdateManyWithoutLearningPathsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  students?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}

export { LearningPathUpdateInput as LearningPathUpdateInput };