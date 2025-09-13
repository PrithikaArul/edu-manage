import logo from './logo.svg';
import './App.css';
import { useRoutes } from 'react-router-dom';
import {routes} from './routes';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {

  // To enable routing between different components
  const element=useRoutes(routes);
  return element;
}

export default App;
