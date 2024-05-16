import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { LEARNINGPATH_TITLE_FIELD } from "../learningPath/LearningPathTitle";

export const ScenarioList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Scenarios"}
      perPage={50}
      pagination={<Pagination />}
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
        <TextField label="relatedVisualization" source="relatedVisualization" />
        <TextField label="solution" source="solution" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
