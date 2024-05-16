import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { LearningPathTitle } from "../learningPath/LearningPathTitle";

export const ProgressReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="feedback" multiline source="feedback" />
        <DateTimeInput label="lastUpdated" source="lastUpdated" />
        <ReferenceInput
          source="learningPath.id"
          reference="LearningPath"
          label="learningPath"
        >
          <SelectInput optionText={LearningPathTitle} />
        </ReferenceInput>
        <NumberInput label="progressPercentage" source="progressPercentage" />
        <TextInput label="student" source="student" />
      </SimpleForm>
    </Edit>
  );
};
