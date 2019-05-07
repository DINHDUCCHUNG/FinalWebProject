import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import {
  Container,
  Input,
  Form,
  Label,
  Button,
  FormGroup,
  Badge,
  Alert,
  Navbar,
  NavbarBrand
} from "reactstrap";
import config from "../../config";

class LoginAdmin extends React.Component {
  state = {
    email: "",
    password: "",
    alertVisible: false
  };

  handInputChange = (type, value) => {
    if (type === "email") {
      this.setState({
        email: value
      });
    } else {
      this.setState({
        password: value
      });
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    axios({
      url: `${config.baseUrl}/api/auth/login`,
      method: "post",
      withCredentials: true,
      data: {
        email: this.state.email,
        password: this.state.password
      }
    })
      .then(response => {
        if (response.data.success === false) {
          this.setState({
            alertVisible: true
          });
        } else {
          this.setState({
            alertVisible: false
          });
          this.props.history.push("/admin-page/logo");
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="login-admin">
        <Navbar color="primary">
          <NavbarBrand
            style={{ paddingLeft: "10%", fontWeight: "bold", color: "white" }}
          >
            ADMIN
          </NavbarBrand>
        </Navbar>
        <Container style={{ width: "25%", border: "solid",borderRadius: "5%" ,marginTop: "4%", borderColor: "#ccc",borderStyle: "outset" ,backgroundColor: "#e2cd8e"}}>
          <h2 style={{ margin: "5% auto" }}>
            <Badge color="danger">Login Administrator</Badge>
          </h2>
          <div style={{ marginBottom: "40px", marginTop: "40px"  }} >
          <hr/>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label style={{ float: "left" }} for="exampleEmail">
                Email
              </Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Please enter email"
                onChange={e => {
                  this.handInputChange("email", e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label style={{ float: "left" }} for="examplePassword">
                Password
              </Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Please enter password"
                onChange={e => {
                  this.handInputChange("password", e.target.value);
                }}
              />
            </FormGroup>
            <hr style={{ marginBottom: "6%" }} />
            {this.state.alertVisible ? (
              <Alert color="danger">Email or password is incorrect!</Alert>
            ) : null}
            <Button color="danger">Login</Button>
          </Form>
          </div>
        </Container>
      </div>
    );
  }
}

export default withRouter(LoginAdmin);
