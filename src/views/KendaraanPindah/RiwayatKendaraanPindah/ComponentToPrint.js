import TableHeader from "components/ReactToPrint/TableHeader";
import { format } from "date-fns";
import React from "react";

export class ComponentToPrint extends React.Component {
  render() {
    return (
      <div
        className="bg-white"
        style={{ color: "black", fontFamily: "Arial, sans-serif" }}
      >
        <TableHeader title="Data Riwayat Kendaraan Pindah" />

        <p className="text-darker">
          <b>Tanggal: </b> {format(new Date(), "dd/MM/yyyy")}
        </p>
        <table className="my-table">
          <thead>
            <tr>
              <th>Tanggal</th>
              <th>Merk</th>
              <th>Tipe</th>
              <th>Dari</th>
              <th>Ke</th>
              <th>Keterangan</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((item, index) => (
              <tr key={index}>
                <td valign="top">{item.tanggal}</td>
                <td valign="top">{item.kendaraan.merk}</td>
                <td valign="top">{item.kendaraan.tipe}</td>
                <td valign="top">{item.dari}</td>
                <td valign="top">{item.ke}</td>
                <td valign="top">{item.keterangan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
