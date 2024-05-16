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
import {
  IsString,
  IsOptional,
  IsDate,
  ValidateNested,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { LearningPathWhereUniqueInput } from "../../learningPath/base/LearningPathWhereUniqueInput";

@InputType()
class ProgressReportUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  feedback?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  lastUpdated?: Date | null;

  @ApiProperty({
    required: false,
    type: () => LearningPathWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LearningPathWhereUniqueInput)
  @IsOptional()
  @Field(() => LearningPathWhereUniqueInput, {
    nullable: true,
  })
  learningPath?: LearningPathWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  progressPercentage?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  student?: string | null;
}

export { ProgressReportUpdateInput as ProgressReportUpdateInput };
