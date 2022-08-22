// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorSchemesExample from './components/NavBar/NavBar';
import Welcome from './components/Welcome/Welcome';
import {Alerta} from './components/Alerta/Alerta';
function App() {
  return (
    <div className="App">
      <header className="App-header">
              <Welcome/>
      </header>
      <nav>
              <ColorSchemesExample/>
      </nav>
      <section>
        <Alerta></Alerta>
      </section>

    </div>
  );
}

export default App;
