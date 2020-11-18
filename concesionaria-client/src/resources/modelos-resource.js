import { 
  List, 
  Datagrid, 
  TextField, 
  DateField,
  EditButton, 
  DeleteButton, 
  ReferenceField, 
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  Create
} from "react-admin";

const ModeloTitle = ({ record }) => {
  return <span>Modelo {record ? `"${record.nombre}"` : ''}</span>;
};

export const ModeloList = props => (
  <List {...props} title='Modelos'>
    <Datagrid>
      <TextField source="nombre" label='Modelo' />
      <ReferenceField source='id_marca' reference='marcas' label='Marca'>
        <TextField  source="nombre" />
      </ReferenceField>
      <TextField source="anio" label='Año'/>
      <TextField source="desc" label='Descripción'/>
      <TextField source="precio" />
      <DateField source="creado" label='Ingresado'/>
      
      <EditButton basePath='/modelos'/>
      <DeleteButton basePath='/modelos'/>
    </Datagrid>
  </List>
);
  
export const ModeloEdit = props => (
  <Edit {...props} title={<ModeloTitle/>}>
    <SimpleForm>
      <TextInput disabled source='_id' />
      <TextInput source="nombre" label='Nombre del modelo'/>
      <NumberInput source="anio" label='Año' />
      <TextInput source="desc" label='Descripción' />
      <TextInput source="precio" />
      <ReferenceInput source='id_marca' reference='marcas' label='Marca'>
        <SelectInput optionText='nombre' />
      </ReferenceInput>
      <DateField source="creado" label='Fecha de ingreso' />
    </SimpleForm>
  </Edit>
);
    
export const ModeloCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="nombre" label='Nombre del modelo' />
      <NumberInput source="anio" label='Año' />
      <TextInput source="desc" label='Descripción' />
      <TextInput source="precio" />
      <ReferenceInput source='id_marca' reference='marcas' label='Marca'>
        <SelectInput optionText='nombre' />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);