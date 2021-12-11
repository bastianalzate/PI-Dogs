import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import DescriptionDog from '../DescriptionDog/DescriptionDog';
import Favorites from '../Favorites/Favorites';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';
import Home from '../Home/Home';
import InitialPage from '../InitialPage/InitialPage';
import Navbar from '../Navbar/Navbar';
import NotFound from '../NotFound/NotFound';
import s from './App.module.css';


function App() {
  const { modeNocturne } = useSelector(state => state);

  return (
    <div>
      <Switch>
        {/* Ruta Favoritos */}
        <Route exact path="/favoritos">
          <div className={modeNocturne ? `${s.App__Favorite__Oscuro}` : `${s.App__Favorite__Claro}`}>
            <Navbar />
            <Favorites />
            <Footer />
          </div>
        </Route>

        {/* Ruta Description */}
        <Route exact path={`/dog-description/:id`}>
            {({match}) => <div className={s.App__Description}><DescriptionDog match={match}/></div>}
        </Route>

        {/* Ruta Crear Dog */}
        <Route exact path="/crear-dog">
          <div className={modeNocturne ? `${s.App__Formulario__Oscuro}` : `${s.App__Formulario__Claro}`}>
            <Form />
          </div>
        </Route>

        {/* Ruta Home */}
        <Route exact path="/home">
          <div className={modeNocturne ? `${s.App__Home__Oscuro}` : `${s.App__Home__Claro}`} >
            <Navbar />
            <Home />
            <Footer />
          </div>
        </Route>

        {/* Ruta / */}
        <Route exact path="/">
          <div className={s.App__InitialPage}>
            <InitialPage />
          </div>
        </Route>

        {/* Error 404 */}
        <Route path="/">
          <div className={s.App__404}>
            <NotFound />
          </div>
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
