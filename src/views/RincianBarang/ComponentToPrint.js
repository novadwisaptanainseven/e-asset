import TableHeader from "components/ReactToPrint/TableHeader";
import { format } from "date-fns";
import React from "react";
import { getNamaBidang } from "views/BarangMasuk/functions";

export class ComponentToPrint extends React.Component {
  render() {
    return (
      <div
        className="bg-white"
        style={{ color: "black", fontFamily: "Arial, sans-serif" }}
      >
        <TableHeader title="Data Rincian Barang" />

        <p className="text-darker">
          <b>Tanggal: </b> {format(new Date(), "dd/MM/yyyy")}
        </p>
        <h2 className="text-center mb-3" style={{ color: "black" }}>
          {this.props.label}
        </h2>
        <table className="my-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Bidang</th>
              <th>Jumlah Baik</th>
              <th>Jumlah Rusak</th>
              <th>Jumlah Rusak Ringan</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((item, index) => (
              <tr key={index}>
                <td valign="top">{index + 1}</td>
                <td valign="top">
                  {getNamaBidang(item.id_bidang, this.props.bidang)}
                </td>
                <td valign="top" align="center">
                  {item.jumlah_baik}
                </td>
                <td valign="top" align="center">
                  {item.jumlah_rusak}
                </td>
                <td valign="top" align="center">
                  {item.jumlah_rusak_ringan}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
