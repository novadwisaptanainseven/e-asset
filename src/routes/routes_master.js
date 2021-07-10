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
import Kategori from "views/Kategori";
import Barang from "../views/Barang";
import Kendaraan from "../views/Kendaraan";

const layoutAdmin = "/easset/admin";
// const layoutAuth = "/easset/auth";

var routes_master = [
  {
    path: "/kategori",
    name: "Kategori",
    icon: "ni ni-archive-2 text-info",
    component: Kategori,
    layout: layoutAdmin,
  },
  {
    path: "/barang",
    name: "Barang",
    icon: "ni ni-briefcase-24 text-blue",
    component: Barang,
    layout: layoutAdmin,
  },
  {
    path: "/kendaraan",
    name: "Kendaraan",
    icon: "ni ni-delivery-fast text-red",
    component: Kendaraan,
    layout: layoutAdmin,
  },
];
export default routes_master;
