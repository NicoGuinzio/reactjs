import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorSchemesExample from './components/NavBar/NavBar';

// import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';

// import {Cards} from './components/cards/cards'
import { ItemList } from './components/ItemList/ItemList';
function App() {
  return (
    <div className="App">
      <header className="App-header"> 
              
      </header>
      <nav>
              <ColorSchemesExample/>
      </nav>
      <section>
              {/* <ItemListContainer titulo="ItemListContainer" ></ItemListContainer>
              <Alerta mensaje="HUBO UN ERROR" id="2">
                <button> Aceptar </button>
              </Alerta>
              <Alerta mensaje="Perfecto" id="2">
                <button style={{margin:10}}> confirmar </button>
                <button> no confirmar </button>
              </Alerta> */}

              {/* <div className='card'>
              <Cards/>
              </div> */}
      </section>
      <section>
              <div>
                <ItemList/>
              </div>
      </section>

    </div>
  )
}

export default App;
