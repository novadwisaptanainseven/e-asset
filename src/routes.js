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
import Index from "views/Dashboard/Index.js";
import Register from "views/Auth/Register";
import Login from "views/Auth/Login";
import Tables from "views/examples/Tables.js";
import Barang from "views/Barang";
import RincianBarang from "views/RincianBarang";
import IndexBarangPindah from "views/BarangPindah";
import IndexBarangMasuk from "views/BarangMasuk";

const layoutAdmin = "/easset/admin";
const layoutAuth = "/easset/auth";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
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
    path: "/rincian-barang",
    name: "Rincian Barang",
    icon: "ni ni-bullet-list-67 text-orange",
    component: RincianBarang,
    layout: layoutAdmin,
  },
  {
    path: "/barang-pindah",
    name: "Barang Pindah",
    icon: "ni ni-cart text-yellow",
    component: IndexBarangPindah,
    layout: layoutAdmin,
  },
  {
    path: "/barang-masuk",
    name: "Barang Masuk",
    icon: "fas fa-business-time",
    component: IndexBarangMasuk,
    layout: layoutAdmin,
  },
  {
    path: "/tables",
    name: "Kendaraan",
    icon: "ni ni-delivery-fast text-red",
    component: Tables,
    layout: layoutAdmin,
  },
  {
    path: "/login",
    name: "Kendaraan Pindah",
    icon: "ni ni-spaceship text-info",
    component: Login,
    layout: layoutAuth,
  },
  {
    path: "/login",
    name: "Pengaturan Akun",
    icon: "ni ni-single-02 text-info",
    component: Login,
    layout: layoutAuth,
  },
  {
    path: "/register",
    name: "Logout",
    icon: "fas fa-sign-out-alt text-pink",
    component: Register,
    layout: layoutAuth,
  },
];
export default routes;
