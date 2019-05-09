import React from "react";
import config from "../../config";
import axios from "axios";
import { Table, Row } from "reactstrap";
import TableRow from "./ManagerOrder/TableRow";
import Pagination from "../commons/admin-page/Pagination";

class Order extends React.Component {
  state = {
    allOrder: [],
    currentOrder: [],
    currentPage: null,
    totalPages: null
  };
  async componentDidMount() {
    // call ajax
    await axios({
      url: `${config.baseUrl}/api/customer`,
      method: "GET",
      withCredentials: true,
    })
      .then(response => {
        this.setState({
          allOrder: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  onPageChanged = data => {
    const { currentPage, totalPages, pageLimit } = data;
    axios({
      url: `${
        config.baseUrl
      }/api/customer?pageNumber=${currentPage}&pageSize=${pageLimit}`,
      method: "GET",
      withCredentials: true,
    }).then(response => {
      const currentOrder = response.data;
      this.setState({ currentPage, currentOrder, totalPages });
    });
  };

  handleChange = async (isChecked, blogId, indexCurrentBlog) => {
    let updateCurrentBlog = this.state.currentBlog.slice();
    updateCurrentBlog[indexCurrentBlog].isPublic = isChecked;
    await this.setState({
      currentBlog: updateCurrentBlog,
    });
    await axios({
      url: `${config.baseUrl}/api/posts/update`,
      method: "PUT",
      withCredentials: true,
      data: {
        isPublic: this.state.currentBlog[indexCurrentBlog].isPublic,
        blogId: blogId
      }
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    if (this.state.allOrder.length === 0) return null;
    return (
      <div>
        <Row
          style={{
            marginTop: "1%",
            marginBottom: "1%",
            marginLeft: "10%",
            marginRight: "10%",
            backgroundColor: "#e8f1f2"
          }}
        >
          <Table
            bordered
            style={{
              margin: "1%",
              borderStyle: "hidden",
              borderCollapse: "collapse",
              backgroundColor: " #f6f6ff"
            }}
          >
            <thead
              style={{
                backgroundColor: "#fde9d9",
                fontSize: "large"
              }}
            >
              <tr
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "#f79646 #ccc"
                }}
              >
                <td
                  style={{
                    textAlign: "left",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "#f79646 #ccc"
                  }}
                >
                  #
                </td>
                <td
                  style={{
                    textAlign: "left",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "#f79646 #ccc"
                  }}
                >
                  Email
                </td>
                <td
                  style={{
                    textAlign: "left",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "#f79646 #ccc"
                  }}
                >
                  Họ Tên
                </td>
                <td
                  style={{
                    textAlign: "left",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "#f79646 #ccc"
                  }}
                >
                  Địa Chỉ
                </td>
                <td
                  style={{
                    textAlign: "left",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "#f79646 #ccc"
                  }}
                >
                  Số điện thoại
                </td>
                <td
                  style={{
                    textAlign: "left",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "#f79646 #ccc"
                  }}
                >
                    Sản Phẩm
                </td>
                <td
                  style={{
                    textAlign: "left",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "#f79646 #ccc"
                  }}
                >
                  Tiền
                </td>
                <td
                  style={{
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "#f79646 #ccc"
                  }}
                >
                  Xuất bản
                </td>
              </tr>
            </thead>
            <tbody>
              {this.state.currentOrder.map((item, index) => (
                <TableRow
                  key={index}
                  rowIndex={index}
                  data={item}
                  handleChange={this.handleChange}
                />
              ))}
            </tbody>
          </Table>
        </Row>
        <div >
          <span className="text-secondary">
            Page{" "}
            <span className="font-weight-bold">{this.state.currentPage}</span> /{" "}
            <span className="font-weight-bold">{this.state.totalPages}</span>
          </span>
        </div>
        <div style = {{marginTop: "0.2%"}}>
          <Pagination
            totalRecords={this.state.allOrder.length}
            pageLimit={8}
            pageNeighbours={1}
            onPageChanged={this.onPageChanged}
          />
        </div>
      </div>
    );
  }
}
export default Order;
