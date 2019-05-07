import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const NavbarAddAndUpdateProduction = props => {
  return (
    <Navbar
      style={{
        height: "35px",
        backgroundColor: "#9ab1ee",
        marginLeft: "1%",
        marginRight: "1%",
        color: "white"
      }}
      light
      expand="md"
    >
      <NavLink style={{ paddingLeft: "0px", fontWeight: "bold" }}>
        Hệ thống sản phẩm
      </NavLink>
      <NavbarToggler />
      <Collapse navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/admin-page/manage-production" style={{ color: "white" }}>
              Quản lý sản phẩm
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/admin-page/add-production" style={{ color: "white" }}>
              Thêm sản phẩm mới
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavbarAddAndUpdateProduction;
