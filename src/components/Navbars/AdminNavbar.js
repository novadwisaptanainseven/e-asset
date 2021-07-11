/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { cekUser } from "context/actions/Auth/cekUser";
import { logout } from "context/actions/Auth/logout";
import { GlobalContext } from "context/Provider";
import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Navbar,
  Nav,
  Container,
  Media,
} from "reactstrap";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Swal = withReactContent(swal2);

const AdminNavbar = (props) => {
  const { currentUserState, currentUserDispatch } = useContext(GlobalContext);
  const { data } = currentUserState;
  const history = useHistory();

  // Cek Masa Kadaluarsa Login
  useEffect(() => {
    let tsNow = new Date().getTime();

    if (tsNow > localStorage.loginTimestamp) {
      // Jika login kadaluarsa
      Swal.fire({
        icon: "error",
        title: "Akses Dilarang",
        text: "Masa Waktu Login Anda Sudah Kadaluarsa. Silahkan Login Ulang!",
        showConfirmButton: true,
      }).then((result) => {
        localStorage.clear();
        history.push("/easset/auth/login");
      });
    }
  }, [Swal]);

  // Get Current User
  useEffect(() => {
    cekUser(currentUserDispatch, Swal, history);
  }, [currentUserDispatch, Swal, history]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleLogout = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "warning",
      title: "Logout",
      text: "Anda yakin ingin logout ?",
      confirmButtonText: "YA",
      showCancelButton: "TIDAK",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Anda Berhasil Logout", "", "success").then((res) =>
          logout()
        );
      }
    });
  };

  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Link
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            to="/"
          >
            {props.brandText}
          </Link>

          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  {/* <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      src={
                        require("../../assets/img/theme/team-4-800x800.jpg")
                          .default
                      }
                    />
                  </span> */}
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">
                      {data.name}
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <DropdownItem to="/easset/admin/pengaturan-akun" tag={Link}>
                  <i className="ni ni-single-02" />
                  <span>Pengaturan Akun</span>
                </DropdownItem>

                <DropdownItem divider />
                <DropdownItem href="#pablo" onClick={(e) => handleLogout(e)}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
