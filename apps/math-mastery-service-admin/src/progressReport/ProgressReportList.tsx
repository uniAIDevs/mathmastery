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

export const ProgressReportList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ProgressReports"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
