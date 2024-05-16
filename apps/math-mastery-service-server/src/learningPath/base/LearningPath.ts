/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsString,
  IsOptional,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumLearningPathLevel } from "./EnumLearningPathLevel";
import { ProgressReport } from "../../progressReport/base/ProgressReport";
import { Scenario } from "../../scenario/base/Scenario";

@ObjectType()
class LearningPath {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

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
  mentor!: string | null;

  @ApiProperty({
    required: false,
    type: () => [ProgressReport],
  })
  @ValidateNested()
  @Type(() => ProgressReport)
  @IsOptional()
  progressReports?: Array<ProgressReport>;

  @ApiProperty({
    required: false,
    type: () => [Scenario],
  })
  @ValidateNested()
  @Type(() => Scenario)
  @IsOptional()
  scenarios?: Array<Scenario>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  students!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { LearningPath as LearningPath };
