import { List, Datagrid, TextField, EditButton, Create, SimpleForm, TextInput, Edit } from "react-admin";

const MarcaTitle = ({ record }) => {
  return <span>Marca {record ? `"${record.nombre}"` : ''}</span>;
};

export const MarcaList = props => (
  <List {...props}>
      <Datagrid>
          <TextField source="nombre" />
          <EditButton basePath='/marcas'/>
      </Datagrid>
  </List>
);

export const MarcaEdit = props => (
  <Edit {...props} title={<MarcaTitle/>}>
    <SimpleForm>
      <TextInput source="nombre" />
    </SimpleForm>
  </Edit>
);

export const MarcaCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="nombre" />
    </SimpleForm>
  </Create>
);