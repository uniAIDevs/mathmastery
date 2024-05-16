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
import { ProgressReportWhereInput } from "./ProgressReportWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProgressReportListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ProgressReportWhereInput,
  })
  @ValidateNested()
  @Type(() => ProgressReportWhereInput)
  @IsOptional()
  @Field(() => ProgressReportWhereInput, {
    nullable: true,
  })
  every?: ProgressReportWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProgressReportWhereInput,
  })
  @ValidateNested()
  @Type(() => ProgressReportWhereInput)
  @IsOptional()
  @Field(() => ProgressReportWhereInput, {
    nullable: true,
  })
  some?: ProgressReportWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProgressReportWhereInput,
  })
  @ValidateNested()
  @Type(() => ProgressReportWhereInput)
  @IsOptional()
  @Field(() => ProgressReportWhereInput, {
    nullable: true,
  })
  none?: ProgressReportWhereInput;
}
export { ProgressReportListRelationFilter as ProgressReportListRelationFilter };
