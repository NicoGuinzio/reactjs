import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorSchemesExample from './components/NavBar/NavBar';
import Welcome from './components/Welcome/Welcome';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
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
              <ItemListContainer titulo="Musica" ></ItemListContainer>
              
      </section>

    </div>
  );
}

export default App;
