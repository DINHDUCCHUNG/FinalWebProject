import React from "react";
import {
  Input,
  Col,
  Row,
  InputGroupText,
  InputGroupAddon,
  InputGroup,
  Button,
  Form
} from "reactstrap";
import NavbarAddAndUpdateProduction from "../commons/admin-page/NavbarAddAndUpdateProduction";
import axios, { post } from "axios";
import Config from "../../config";

class AddProduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      prize: "",
      category: "",
      description: "",
      image: null,
      file: null,
      isPublic: false,
      isActiveModal: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }
  handleInput = (type, value) => {
    if (type === "title") {
      this.setState({
        title: value
      });
    } else if (type === "category") {
      this.setState({
        category: value
      });
    } else if (type === "prize") {
      this.setState({
        prize: value
      });
    } else if (type === "description") {
      this.setState({
        description: value
      });
    } else if (type === "image") {
      this.setState({
        file: value
      });
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
   await this.fileUpload(this.state.file).then(response => {
      this.setState({
        image: `${Config.baseUrl}/${
          response.data.path.split("\\")[
            response.data.path.split("\\").length - 1
          ]
        }`
      });
    });
   await axios({
      url: `${Config.baseUrl}/api/productions/`,
      method: "post",
      withCredentials: true,
      data: {
        title: this.state.title,
        prize: this.state.prize,
        category: this.state.category,
        description: this.state.description,
        image: this.state.image,
        isPublic: false
      }
    })
      .then(response => {
        console.log(response.data);
        this.setState({
          isActiveModal: true
        });
        this.props.history.push("/admin-page/manage-production");
      })
      .catch(error => {
        console.log(error);
      });
  };

  fileUpload(file) {
    const url = `${Config.baseUrl}/api/upload-file/upload`;
    const formData = new FormData();
    formData.append("image", file);
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };
    return post(url, formData, config);
  }

  render() {
    return (
      <div>
        <NavbarAddAndUpdateProduction />
        {this.state.isActiveModal ? alert("Thêm sản phẩm thành công!") : null}
        <Form
          onSubmit={this.handleSubmit}
          style={{
            width: "60%",
            marginLeft: "1%",
            marginRight: "1%",
            border: "solid",
            borderColor: "#fce4b5",
            backgroundColor: "#e2dcd0"
          }}
        >
          <Row
            style={{
              marginTop: "3%",
              marginBottom: "4%",
              marginLeft: "1%",
              marginRight: "1%"
            }}
          >
            <Col xs="2">
              <label style={{ float: "left" }}>Tiêu đề</label>
            </Col>
            <Col xs="10">
              <Input
                placeholder="tiêu đề"
                onChange={e => {
                  this.handleInput("title", e.target.value);
                }}
              />
            </Col>
          </Row>
          <Row
            style={{ marginBottom: "4%", marginLeft: "1%", marginRight: "1%" }}
          >
            <Col xs="2">
              <label style={{ float: "left" }}>Danh mục</label>
            </Col>
            <Col xs="10">
              <Input
                placeholder="danh mục"
                onChange={e => {
                  this.handleInput("category", e.target.value);
                }}
              />
            </Col>
          </Row>
          <Row
            style={{ marginBottom: "4%", marginLeft: "1%", marginRight: "1%" }}
          >
            <Col xs="2">
              <label style={{ float: "left" }}>Giá tiền</label>
            </Col>
            <Col xs="10">
              <InputGroup style={{ width: "50%" }}>
                <Input
                  type="number"
                  placeholder="giá tiền"
                  onChange={e => {
                    this.handleInput("prize", e.target.value);
                  }}
                />
                <InputGroupAddon addonType="append">
                  <InputGroupText>VND</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Row>

          <Row
            style={{ marginBottom: "4%", marginLeft: "1%", marginRight: "1%" }}
          >
            <Col xs="2">
              <label style={{ float: "left" }}>Ảnh</label>
            </Col>
            <Col sm={6}>
              <Input
                type="file"
                name="file"
                id="exampleFile"
                onChange={e => {
                  this.handleInput("image", e.target.files[0]);
                }}
              />
            </Col>
          </Row>

          <Row
            style={{ marginBottom: "2%", marginLeft: "1%", marginRight: "1%" }}
          >
            <Col xs="2">
              <label style={{ float: "left" }}>Mô tả</label>
            </Col>
            <Col xs="10">
              <Input
                type="textarea"
                placeholder="mô tả chi tiết"
                onChange={e => {
                  this.handleInput("description", e.target.value);
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col xs="12" style={{ margin: "1.5% 0" }}>
              <Button color="danger" type="submit">
                Thêm sản phẩm
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
export default AddProduction;
