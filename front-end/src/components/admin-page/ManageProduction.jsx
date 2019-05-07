import React from "react";
import NavbarAddAndUpdateProduction from "../commons/admin-page/NavbarAddAndUpdateProduction";
import config from "../../config";
import axios from "axios";
import { Table, Row } from "reactstrap";
import TableRow from "./ManageProduction/TableRow";
import Pagination from "../commons/admin-page/Pagination";

class ManageProduction extends React.Component {
  state = {
    allProduction: [],
    currentProduction: [],
    currentPage: null,
    totalPages: null
  };
  componentDidMount() {
    // call ajax
    axios({
      url: `${config.baseUrl}/api/productions`,
      method: "get",
      withCredentials: true
    })
      .then(response => {
        this.setState({
          allProduction: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  onPageChanged = async data => {
    const { currentPage, totalPages, pageLimit } = data;
    await axios({
      url: `${
        config.baseUrl
      }/api/productions?pageNumber=${currentPage}&pageSize=${pageLimit}`,
      method: "get",
      withCredentials: true
    }).then(response => {
      const currentProduction = response.data;
      this.setState({ currentPage, currentProduction, totalPages });
    });
  };

  handleChange = async (isChecked, productionId, indexCurrentProduction) => {
    let updateCurrentProduction = this.state.currentProduction.slice();
    updateCurrentProduction[indexCurrentProduction].isPublic = isChecked;
    await this.setState({
      currentProduction: updateCurrentProduction
    });
    await axios({
      url: `${config.baseUrl}/api/productions/update`,
      method: "put",
      withCredentials: true,
      data: {
        isPublic: this.state.currentProduction[indexCurrentProduction].isPublic,
        productionId: productionId
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
    if (this.state.allProduction.length === 0) return null;
    return (
      <div>
        <NavbarAddAndUpdateProduction />
        <Row
          style={{
            marginTop: "1%",
            marginBottom: "1%",
            marginLeft: "20%",
            marginRight: "20%",
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
                  Tên sản phẩm
                </td>
                <td
                  style={{
                    textAlign: "left",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "#f79646 #ccc"
                  }}
                >
                  Danh mục
                </td>
                <td
                  style={{
                    textAlign: "left",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "#f79646 #ccc"
                  }}
                >
                  Người tạo
                </td>
                <td
                  style={{
                    textAlign: "left",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "#f79646 #ccc"
                  }}
                >
                  Ngày tạo
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
              {this.state.currentProduction.map((item, index) => (
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
        <div>
          <span className="text-secondary">
            Page{" "}
            <span className="font-weight-bold">{this.state.currentPage}</span> /{" "}
            <span className="font-weight-bold">{this.state.totalPages}</span>
          </span>
        </div>
        <div style={{ marginTop: "0.2%" }}>
          <Pagination
            totalRecords={this.state.allProduction.length}
            pageLimit={8}
            pageNeighbours={1}
            onPageChanged={this.onPageChanged}
          />
        </div>
      </div>
    );
  }
}
export default ManageProduction;
