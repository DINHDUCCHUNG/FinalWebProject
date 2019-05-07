import React from "react";
import { Input } from "reactstrap";

//props:
//rowIndex
//data: productions
const TableRow = props => {
  return (
    <tr>
      <td style={{textAlign: "left"}}>{props.rowIndex + 1}</td>
      <td style={{textAlign: "left"}}>{props.data.title}</td>
      <td style={{textAlign: "left"}}>{props.data.content}</td>
      <td style={{textAlign: "left"}}>{props.data.admin.fullName}</td>
      <td style={{textAlign: "left"}}>{props.data.createAt.split('T')[0]}</td>
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
