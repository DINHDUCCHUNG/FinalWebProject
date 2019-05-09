import React from "react";
import { Input } from "reactstrap";

//props:
//rowIndex
//data: productions
const TableRow = props => {
  return (
    <tr>
      <td style={{textAlign: "left"}}>{props.rowIndex + 1}</td>
      <td style={{textAlign: "left"}}>{props.data.email}</td>
      <td style={{textAlign: "left"}}>{props.data.fullName}</td>
      <td style={{textAlign: "left"}}>{props.data.address}</td>
      <td style={{textAlign: "left"}}>{props.data.phone}</td>
      <td style={{textAlign: "left"}}>{props.data.order.production}</td>
      <td style={{textAlign: "left"}}>{props.data.order.bill}</td>
      <td>
          <Input
            style={{ zoom: "2", marginLeft: "-0.25rem" }}
            type="checkbox"
            checked = {props.data.isPublic}
            onChange = {(e)=>{props.handleChange(e.target.checked, props.data._id, props.rowIndex)}}
          />
      </td>
    </tr>
  );
};

export default TableRow;
