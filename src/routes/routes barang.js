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

import PenempatanBarang from "views/PenempatanBarang";

const layoutAdmin = "/easset/admin";
// const layoutAuth = "/easset/auth";

var routesBarang = [
  {
    path: "/penempatan-barang",
    name: "Penempatan Barang",
    icon: "ni ni-bullet-list-67 text-orange",
    component: PenempatanBarang,
    layout: layoutAdmin,
  },
];
export default routesBarang;
