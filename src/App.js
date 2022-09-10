import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorSchemesExample from './components/NavBar/NavBar';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
              
      </header>
      <nav>
              <ColorSchemesExample/>
      </nav>
      <section>
              <ItemListContainer/>
              <ItemDetailContainer/>
      </section>
    </div>
  )
}

export default App;
