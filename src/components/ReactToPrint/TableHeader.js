import { LogoKotaSamarinda } from "assets";
import React from "react";

const TableHeader = ({ title }) => {
  return (
    <div className="my-table-header mb-4">
      <div className="text-center d-flex mb-3">
        <img
          style={{ marginLeft: "50px" }}
          width={100}
          src={LogoKotaSamarinda}
          alt="logo-kota-samarinda"
        />
        <div
          className="my-table-header-text"
          style={{ width: "100%", marginLeft: "-80px" }}
        >
          <h1 style={{ color: "black" }}>Laporan {title}</h1>
          <h2 style={{ color: "black" }}>
            Dinas Perumahan dan Permukiman Kota Samarinda
          </h2>
        </div>
      </div>
      <div className="line1"></div>
      <div className="line2"></div>
    </div>
  );
};

export default TableHeader;
