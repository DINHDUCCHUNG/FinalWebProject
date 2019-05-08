import React from "react";
import "./Header.css";
import {
  Navbar,
  NavDropdown,
  Form,
  Nav,
  FormControl,
  Button,
  Container
} from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

class Header extends React.Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  render() {
    return (
      <div>
        <div>
          <Navbar bg="white" expand="lg">
            <Container className="col-10">
              <style>
                @import url('https://fonts.googleapis.com/css?family=Lobster|Rokkitt');
              </style>
              <Navbar.Brand
                style={{ fontFamily: "'Lobster', cursive" }}
                href="#home"
              >
                <h1>Cosmetic Men</h1>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav
                  className="mr-auto"
                  style={{ paddingLeft: "8rem", marginBottom: "0.5%" }}
                >
                  <Nav.Link
                    className="Subnav"
                    style={{ paddingRight: "2rem" }}
                    href="/"
                  >
                    Home
                  </Nav.Link>
                  <NavDropdown
                    className="Subnav"
                    style={{ paddingRight: "2rem" }}
                    title="Shop"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link
                    className="Subnav"
                    style={{ paddingRight: "2rem" }}
                    href="/Blog"
                  >
                    Blog
                  </Nav.Link>
                  <Nav.Link
                    className="Subnav"
                    style={{ paddingRight: "2rem" }}
                    href="#link"
                  >
                    About Us
                  </Nav.Link>
                </Nav>
                <Form inline>
                  <SocialIcon
                    className="mr-sm-2"
                    network="facebook"
                    url="https://facebook.com"
                    // bgColor="black"
                    // fgColor="white"
                    style={{ height: 40, width: 40 }}
                  />
                  <SocialIcon
                    network="instagram"
                    url="https://instagram.com"
                    className="mr-sm-2"
                    // bgColor="black"
                    // fgColor="white"
                    style={{ height: 40, width: 40 }}
                  />
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default Header;
