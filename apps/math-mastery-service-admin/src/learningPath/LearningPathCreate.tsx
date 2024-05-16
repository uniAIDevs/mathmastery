import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProgressReportTitle } from "../progressReport/ProgressReportTitle";
import { ScenarioTitle } from "../scenario/ScenarioTitle";

export const LearningPathCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <SelectInput
          source="level"
          label="level"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="mentor" source="mentor" />
        <ReferenceArrayInput
          source="progressReports"
          reference="ProgressReport"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProgressReportTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="scenarios"
          reference="Scenario"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScenarioTitle} />
        </ReferenceArrayInput>
        <TextInput label="students" source="students" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
