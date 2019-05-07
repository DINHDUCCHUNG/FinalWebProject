import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const NavbarAdminPage = props => {
  return (
    <div>
      <div>
        <Navbar color="dark" light expand="md" style={{ height: "40px" }}>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ml-auto" navbar style={{ paddingRight: "200px" }}>
              <UncontrolledDropdown nav inNavbar>
                
                <DropdownToggle nav caret style={{ color: "white" }}>
                <img
                  style={{marginRight: "4%", padding: "0% 1% 3%"}}
                  src="http://localhost:3001/admin.png"
                  alt=""
                  width="30"
                  height="30"
                />
                  Hello, Admin
                </DropdownToggle>
                <DropdownMenu style ={{margin: "-0.2rem 1rem 0"}}>
                  <DropdownItem onClick={props.handleLogout}>
                    Logout
                  </DropdownItem>
                  <DropdownItem>Change Password</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

      <div>
        <Navbar color="info" light expand="md" style={{ height: "50px" }}>
          <NavbarBrand
            href="/admin-page/logo"
            style={{
              paddingLeft: "200px",
              fontWeight: "bolder",
              color: "white"
            }}
          >
            ADMIN
          </NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav navbar>
              <NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle
                    nav
                    caret
                    style={{
                      paddingLeft: "50px",
                      color: "white"
                    }}
                  >
                    Sản Phẩm
                  </DropdownToggle>
                  <DropdownMenu style={{ margin: "0.35rem 50px 0" }}>
                    <DropdownItem>Quản lý danh mục sản phẩm</DropdownItem>
                    <DropdownItem>Thêm danh mục sản phẩm</DropdownItem>
                    <DropdownItem href="/admin-page/manage-production">
                      Quản lý sản phẩm
                    </DropdownItem>
                    <DropdownItem href="/admin-page/add-production">
                      Thêm sản phẩm
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
              <NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle
                    nav
                    caret
                    style={{
                      paddingLeft: "50px",
                      color: "white"
                    }}
                  >
                    Bài Viết
                  </DropdownToggle>
                  <DropdownMenu style={{ margin: "0.35rem 50px 0" }}>
                    <DropdownItem href="/admin-page/manage-blog">
                      Quản lý bài viết
                    </DropdownItem>
                    <DropdownItem href="/admin-page/add-blog">
                      Thêm bài viết
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/admin-page/order"
                  style={{
                    paddingLeft: "50px",
                    color: "white"
                  }}
                >
                  Đơn Hàng
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/admin-page/member"
                  style={{
                    paddingLeft: "50px",
                    color: "white"
                  }}
                >
                  Thành Viên
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavbarAdminPage;
