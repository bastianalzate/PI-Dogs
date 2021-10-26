import { Route, Switch } from 'react-router';
import DescriptionDog from '../DescriptionDog/DescriptionDog';
import Favorites from '../Favorites/Favorites';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';
import Home from '../Home/Home';
import InitialPage from '../InitialPage/InitialPage';
import Navbar from '../Navbar/Navbar';
import s from './App.module.css';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/favoritos">
          <div className={s.App__Favorite}>
            <Navbar />
            <Favorites />
            <Footer />
          </div>
        </Route>
        <Route exact path={`/dog-description/:id`}>
            {({match}) => <div className={s.App__Description}><DescriptionDog match={match}/></div>}
        </Route>
        <Route exact path="/crear-dog">
          <div className={s.App__Formulario}>
            <Form />
          </div>
        </Route>
        <Route exact path="/home">
          <div className={s.App__Home}>
            <Navbar />
            <Home />
            <Footer />
          </div>
        </Route>
        <Route exact path="/">
          <div className={s.App__InitialPage}>
            <Navbar />
            <InitialPage />
          </div>
        </Route>
        <Route path="/">
          <div className={s.App__404}>
            <Navbar />
            <h1>404 not found</h1>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
