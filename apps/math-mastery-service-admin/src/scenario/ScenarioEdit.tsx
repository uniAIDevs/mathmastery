import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { LearningPathTitle } from "../learningPath/LearningPathTitle";

export const ScenarioEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="createdBy" source="createdBy" />
        <TextInput label="description" multiline source="description" />
        <ReferenceInput
          source="learningPath.id"
          reference="LearningPath"
          label="LearningPath"
        >
          <SelectInput optionText={LearningPathTitle} />
        </ReferenceInput>
        <TextInput
          label="problemStatement"
          multiline
          source="problemStatement"
        />
        <TextInput label="relatedVisualization" source="relatedVisualization" />
        <div />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
