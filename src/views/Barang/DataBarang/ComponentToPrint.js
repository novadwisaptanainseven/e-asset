import TableHeader from "components/ReactToPrint/TableHeader";
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
        <TableHeader title="Data Barang" />

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
            {this.props.data.map((item, index) => (
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
