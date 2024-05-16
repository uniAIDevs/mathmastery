import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const VisualizationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="createdBy" source="createdBy" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
