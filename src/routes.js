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
// import Register from "views/Auth/Register";
import Barang from "views/Barang";
import RincianBarang from "views/RincianBarang";
import IndexBarangPindah from "views/BarangPindah";
import IndexBarangMasuk from "views/BarangMasuk";
import Kendaraan from "views/Kendaraan";
import IndexKendaraanPindah from "views/KendaraanPindah";
import IndexPengaturanAkun from "views/PengaturanAkun";
import IndexUsers from "views/Users";

const layoutAdmin = "/easset/admin";
// const layoutAuth = "/easset/auth";

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
    path: "/kendaraan",
    name: "Kendaraan",
    icon: "ni ni-delivery-fast text-red",
    component: Kendaraan,
    layout: layoutAdmin,
  },
  {
    path: "/kendaraan-pindah",
    name: "Kendaraan Pindah",
    icon: "ni ni-spaceship text-info",
    component: IndexKendaraanPindah,
    layout: layoutAdmin,
  },
  {
    path: "/users",
    name: "Users",
    icon: "fas fa-users text-danger",
    component: IndexUsers,
    layout: layoutAdmin,
  },
  {
    path: "/pengaturan-akun",
    name: "Pengaturan Akun",
    icon: "ni ni-single-02 text-info",
    component: IndexPengaturanAkun,
    layout: layoutAdmin,
  },
];
export default routes;
