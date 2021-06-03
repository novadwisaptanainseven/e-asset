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
        <TableHeader title="Data Riwayat Barang Masuk" />

        <p className="text-darker">
          <b>Tanggal: </b> {format(new Date(), "dd/MM/yyyy")}
        </p>
        <table className="my-table">
          <thead>
            <tr>
              <th>Tanggal</th>
              <th>Barang</th>
              <th>Merk</th>
              <th>Ke Bidang</th>
              <th>Jml. Baik</th>
              <th>Jml. Rusak</th>
              <th>Jml. Rusak Ringan</th>
              <th>Keterangan</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((item, index) => (
              <tr key={index}>
                <td valign="top">{item.createdAt}</td>
                <td valign="top">{item.barang.nama_barang}</td>
                <td valign="top">{item.barang.merk}</td>
                <td valign="top">{item.id_barang_detail}</td>
                <td valign="top" align="center">
                  {item.jumlah_baik}
                </td>
                <td valign="top" align="center">
                  {item.jumlah_rusak}
                </td>
                <td valign="top" align="center">
                  {item.jumlah_rusak_ringan}
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
