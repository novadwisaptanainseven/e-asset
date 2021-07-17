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
        <TableHeader title="Data Kendaraan" />

        <p className="text-darker">
          <b>Tanggal: </b> {format(new Date(), "dd/MM/yyyy")}
        </p>
        <table className="my-table">
          <thead>
            <tr>
              <th>Kode</th>
              <th>Jenis</th>
              <th>Merk</th>
              <th>Tipe</th>
              <th>CC</th>
              <th>Bahan</th>
              <th>Warna</th>
              <th>No. Mesin</th>
              <th>Tahun Pembuatan</th>
              <th>Tahun Pembelian</th>
              <th>Harga</th>
              <th>Keterangan</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((item, index) => (
              <tr key={index}>
                <td valign="top">{item.kode_kendaraan}</td>
                <td valign="top">{item.jenis_kendaraan}</td>
                <td valign="top">{item.merk}</td>
                <td valign="top">{item.tipe}</td>
                <td valign="top">{item.cc}</td>
                <td valign="top">{item.bahan}</td>
                <td valign="top">{item.warna}</td>
                <td valign="top">{item.no_mesin}</td>
                <td valign="top" align="center">{item.tahun_pembuatan}</td>
                <td valign="top" align="center">{item.tahun_pembelian}</td>
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
