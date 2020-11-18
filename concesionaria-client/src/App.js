import { Admin, Resource } from 'react-admin';
import { dataProvider } from "./providers/jsonServerDataProvider";
import { i18nProvider } from "./providers/i18nProvider";
import { Dashboard } from './components/Dashboard';
import { ModeloCreate, ModeloEdit, ModeloList } from './resources/modelos-resource';
import { MarcaCreate, MarcaEdit, MarcaList } from './resources/marcas-resource';
import BallotRoundedIcon from '@material-ui/icons/BallotRounded';

const App = () => 
  <Admin dashboard={Dashboard} dataProvider={dataProvider} i18nProvider={i18nProvider} title='Inicio'>
    <Resource name='modelos'
      list={ModeloList}
      edit={ModeloEdit}
      create={ModeloCreate}
    />
    <Resource name="marcas" 
      list={MarcaList} 
      edit={MarcaEdit}
      create={MarcaCreate}
      icon={BallotRoundedIcon}/>
  </Admin>;

export default App;
