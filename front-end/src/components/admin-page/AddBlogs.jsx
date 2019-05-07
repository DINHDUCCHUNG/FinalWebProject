import React from "react";
import {
  Input,
  Col,
  Row,
  Button,
  Form
} from "reactstrap";
import NavbarAddAndUpdateProduction from "../commons/admin-page/NavbarAddAndUpdateProduction";
import axios, { post } from "axios";
import configg from "../../config";

class AddBlog extends React.Component {
  state = {
    title: "",
    content: "",
    image: null,
    file:  null,
    isPublic: false,
    isActiveModal: false
  };

  handleInput = (type, value) => {
    if (type === "title") {
      this.setState({
        title: value
      });
    } else if (type === "content") {
      this.setState({
        content: value
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
        image: `${configg.baseUrl}/${response.data.path.split('\\')[response.data.path.split('\\').length - 1]}`
      })
    });
    await axios({
      url: `${configg.baseUrl}/api/posts/`,
      method: "post",
      data: {
        title: this.state.title,
        content: this.state.content,
        image: this.state.image,
        isPublic: false
      },
      withCredentials: true,
    })
      .then(response => {
        console.log(response.data);
        this.setState({
          isActiveModal: true
        });
        this.props.history.push("/admin-page/manage-blog");
      })
      .catch(error => {
        console.log(error);
      });
  };

  fileUpload(file) {
    const url = `${configg.baseUrl}/api/upload-file/upload`;
    const formData = new FormData();
    formData.append("image", file);
    const config = {
      withCredentials: true,
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    return post(url, formData, config);
  }

  render() {
    return (
      <div>
        <NavbarAddAndUpdateProduction />
        {this.state.isActiveModal ? alert("Thêm blog thành công!") : null}
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
            <Col xs="12">
              <label style={{ float: "left" }}>Tạo Blog</label>
            </Col>
            <Col xs="12">
              <Input
                type="textarea"
                placeholder="What's on your mind?"
                rows = "5"
                onChange={e => {
                  this.handleInput("content", e.target.value);
                }}
              />
            </Col>
          </Row>
          <Row
            style={{ marginBottom: "4%", marginLeft: "1%", marginRight: "1%" }}
          >
            <Col xs="12">
              <label style={{ float: "left" }}>Tiêu đề</label>
            </Col>
            <Col xs="12">
              <Input
                placeholder="Tiêu đề"
                onChange={e => {
                  this.handleInput("title", e.target.value);
                }}
              />
            </Col>
          </Row>
          <Row
            style={{ marginBottom: "1%", marginLeft: "1%", marginRight: "1%" }}
          >
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
          <Row>
            <Col xs="12" style={{ margin: "1.5% 0" }}>
              <Button color="danger">Thêm bài viết</Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
export default AddBlog;
