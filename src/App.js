import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contenedor from './Contenedor';
import Contacto from './Contacto';
import Header from './Header';
import EstudianteDetalle from './EstudianteDetalle';
import ContenedorPersonajes from './ContenedorPersonajes';
import MainMenu from './MainMenu';
import PersonajeDetalle from './PersonajeDetalle';

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
      <Route component={() => (
        <h1>Pagina no encontrada</h1>
      )} />
    </Switch>
  </Router>
)

export default App;