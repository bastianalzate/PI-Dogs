import { Route, Switch } from 'react-router';
import Form from '../Form/Form';
import Home from '../Home/Home';
import InitialPage from '../InitialPage/InitialPage';
import Navbar from '../Navbar/Navbar';

import s from './App.module.css';


function App() {
  return (
    <div>
      <Switch>
        <Route path="/crear-dog">
          <div className={s.App__Formulario}>
            <Navbar />
            <Form />
          </div>
        </Route>
        <Route path="/home">
          <div className={s.App__Home}>
            <Navbar />
            <Home />
          </div>
        </Route>
        <Route path="/">
          <div className={s.App__InitialPage}>
            <Navbar />
            <InitialPage />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
