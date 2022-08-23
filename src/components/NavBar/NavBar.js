import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget/CartWidget'


function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="contenedorItemsNavbar">
          <Navbar.Brand href="#home">Tienda</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Libros</Nav.Link>
            <Nav.Link href="#features">Discos</Nav.Link>
            <Nav.Link href="#pricing">Juegos</Nav.Link>
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