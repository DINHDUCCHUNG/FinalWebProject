import React from "react";
import "./Header.css";
import { Navbar, NavDropdown, Form, Nav, Container } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import Axios from "axios";
import config from "../../../config";

class Header extends React.Component {
  state = {
    data: null,
    category: [],
    isSame: false
  };
  async componentDidMount() {
    await Axios({
      url: `${config.baseUrl}/api/productions/`,
      method: "get",
      withCredentials: true
    })
      .then(response => {
        this.setState({
          data: response.data
        });
        for (let i = 0; i < this.state.data.length; i++) {
          for (let j = 0; j < this.state.category.length; j++) {
            if (this.state.category[j] === this.state.data[i].category) {
              this.setState({
                isSame: true
              });
              break;
            }
          }
          if (!this.state.isSame) {
            this.setState({
              category: [...this.state.category, this.state.data[i].category]
            });
          }
          this.setState({
            isSame: false
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  handleClick = (type) =>{

  }
  render() {
    return (
      <div>
        <div>
          <Navbar bg="white" expand="lg">
            <Container className="col-10">
              <style>
                @import
                url('https://fonts.googleapis.com/css?family=Lobster|Rokkitt');
              </style>
              <Navbar.Brand
                style={{ fontFamily: "'Lobster', cursive" }}
              >
                <h1>Cosmetic Men</h1>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav 
                  className="mr-auto head-nav"
                  style={{ paddingLeft: "8rem", marginBottom: "0.5%" }}
                >
                  <Nav.Link
                    className="Subnav"
                    style={{ paddingRight: "2rem" }}
                    href="/home"
                  >
                    Home
                  </Nav.Link>
                  <NavDropdown
                    className="Subnav head-nav"
                    style={{ paddingRight: "2rem" }}
                    title="Shop"
                    id="basic-nav-dropdown"
                  >
                    {this.state.category.map((item, index) => (
                      <NavDropdown.Item key={index}  href={`/home/shop/${item}`}>
                          {item}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                  <Nav.Link
                    className="Subnav head-nav"
                    style={{ paddingRight: "2rem" }}
                    href="/home/Blog"
                  >
                    Blog
                  </Nav.Link>
                  <Nav.Link
                    className="Subnav head-nav"
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
                    url="https://www.facebook.com/MyPhamHanQuocForMen/"
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
