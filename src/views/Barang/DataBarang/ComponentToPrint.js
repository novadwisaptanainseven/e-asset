import { LogoKotaSamarinda } from "assets";
import { format } from "date-fns";
import React from "react";
import "./styleToPrint.scss";

export class ComponentToPrint extends React.Component {
  render() {
    return (
      <div
        className="bg-white"
        style={{ color: "black", fontFamily: "Arial, sans-serif" }}
      >
        <div className="my-table-header mb-4">
          <div className="text-center d-flex mb-3">
            <img
              style={{ marginRight: "100px", marginLeft: "50px" }}
              width={100}
              src={LogoKotaSamarinda}
              alt="logo-kota-samarinda"
            />
            <div className="my-table-header-text">
              <h1 style={{ color: "black" }}>Laporan Data Barang</h1>
              <h2 style={{ color: "black" }}>
                Dinas Perumahan dan Permukiman Kota Samarinda
              </h2>
            </div>
          </div>
          <div className="line1"></div>
          <div className="line2"></div>
        </div>

        <p className="text-darker">
          <b>Tanggal: </b> {format(new Date(), "dd/MM/yyyy")}
        </p>
        <table className="my-table">
          <thead>
            <tr>
              <th>No. Barang</th>
              <th>Nama Barang</th>
              <th>Merk</th>
              <th>Ukuran</th>
              <th>Bahan</th>
              <th>Tahun</th>
              <th>Harga</th>
              <th>Keterangan</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.data.map((item, index) => (
              <tr key={index}>
                <td valign="top">{item.no_barang}</td>
                <td valign="top">{item.nama_barang}</td>
                <td valign="top">{item.merk}</td>
                <td valign="top">{item.ukuran}</td>
                <td valign="top">{item.bahan}</td>
                <td valign="top">{item.tahun}</td>
                <td valign="top">
                  {item.harga.toLocaleString("id", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </td>
                <td valign="top">{item.keterangan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
