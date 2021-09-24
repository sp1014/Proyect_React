import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contenedor from '../Molecules/Contenedor';
import Contacto from '../Molecules/Contacto';
import Header from '../Organisms/Header';
import EstudianteDetalle from '../Pages/EstudianteDetalle';
import ContenedorPersonajes from '../Molecules/ContenedorPersonajes';
import MainMenu from '../Pages/MainMenu';
import DatosApi from '../Molecules/DatosApi';
import PersonajeDetalle from '../Pages/PersonajeDetalle';

const App = () => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component={ Header } />
      <Route path="/estudiantes" exact component={ Contenedor } />
      <Route path="/estudiantes/:id" exact component={ EstudianteDetalle } />
      <Route path="/Personajes" exact component={ ContenedorPersonajes } />
      <Route path="/Personajes/:id" exact component={ PersonajeDetalle } />
      <Route path="/contacto" exact  component={ Contacto } />
      <Route path="/datos_api" exact  component={ DatosApi } />
      <Route component={() => (
        <h1>Pagina no encontrada</h1>
      )} />
    </Switch>
  </Router>
)


export default App;

