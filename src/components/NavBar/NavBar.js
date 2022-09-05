import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget/CartWidget'
import './NavBar.css';

function ColorSchemesExample() {
  return (
    <>
      <Navbar className="NavBarContainer" bg="dark" variant="dark">
        <Container >
          <Navbar.Brand href="#campeones">Campeones</Navbar.Brand>
          <Nav className="me-auto ">
            <Nav.Link href="#mid">Mid</Nav.Link>
            <Nav.Link href="#top">Top</Nav.Link>
            <Nav.Link href="#bot">Bot</Nav.Link>
            <Nav.Link href="#jungle">Jungle</Nav.Link>
           <button>
           <CartWidget/>      
           </button>
          </Nav> 
        </Container>
      </Navbar>
      
    </>
  );
}

export default ColorSchemesExample;