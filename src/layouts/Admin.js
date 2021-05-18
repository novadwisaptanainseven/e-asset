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
import React, { useEffect } from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";
import Header from "components/Headers/Header";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Swal = withReactContent(swal2);

const Admin = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  // Cek Apakah user sudah login
  // Jika belum, maka paksa user untuk login terlebih dahulu
  useEffect(() => {
    if (!sessionStorage.token) {
      Swal.fire({
        icon: "error",
        title: "Akses Diblog",
        text: "Anda harus login terlebih dahulu",
      }).then((result) => {
        window.location.href = "/easset/auth/login";
      });
    }
  }, []);

  React.useEffect(() => {
    if (sessionStorage.token) {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      mainContent.current.scrollTop = 0;
    }
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/easset/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <>
      {sessionStorage.token && (
        <>
          <Sidebar
            {...props}
            routes={routes}
            logo={{
              innerLink: "/admin/index",
              imgSrc: require("../assets/img/brand/argon-react.png").default,
              imgAlt: "...",
            }}
          />
          <div className="main-content" ref={mainContent}>
            <AdminNavbar
              {...props}
              brandText={getBrandText(props.location.pathname)}
            />

            <Header />
            {/* Page Content */}
            <Container className="mt--7" fluid>
              <Switch>
                {getRoutes(routes)}
                <Redirect from="*" to="/easset/admin/index" />
              </Switch>
            </Container>
            <Container fluid>
              <AdminFooter />
            </Container>
          </div>
        </>
      )}
    </>
  );
};

export default Admin;
