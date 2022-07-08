import {Container, Navbar, Nav } from "react-bootstrap";

const  NavigationBar = () => {
    return(
        <Navbar style={{backgroundColor: "#071740",}}  collapseOnSelect expand="md" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand href="/"><h5>TheMovie</h5></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="me-auto"/>
             <Nav>
              <Nav.Link href="#action">Action</Nav.Link>
              <Nav.Link href="#horror">Horror</Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )

}
export default NavigationBar;