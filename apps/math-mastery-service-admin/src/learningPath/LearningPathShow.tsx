import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { LEARNINGPATH_TITLE_FIELD } from "./LearningPathTitle";

export const LearningPathShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="level" source="level" />
        <TextField label="mentor" source="mentor" />
        <TextField label="students" source="students" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ProgressReport"
          target="learningPathId"
          label="ProgressReports"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="feedback" source="feedback" />
            <TextField label="ID" source="id" />
            <TextField label="lastUpdated" source="lastUpdated" />
            <ReferenceField
              label="learningPath"
              source="learningpath.id"
              reference="LearningPath"
            >
              <TextField source={LEARNINGPATH_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="progressPercentage" source="progressPercentage" />
            <TextField label="student" source="student" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Scenario"
          target="learningPathId"
          label="Scenarios"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="createdBy" source="createdBy" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="LearningPath"
              source="learningpath.id"
              reference="LearningPath"
            >
              <TextField source={LEARNINGPATH_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="problemStatement" source="problemStatement" />
            <TextField
              label="relatedVisualization"
              source="relatedVisualization"
            />
            <TextField label="solution" source="solution" />
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
