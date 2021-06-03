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
              <th>Nama Pegawai</th>
              <th>Merk</th>
              <th>Tipe</th>
              <th>CC</th>
              <th>Warna</th>
              <th>Mesin</th>
              <th>Pembuatan</th>
              <th>Pembelian</th>
              <th>BPKB</th>
              <th>STNK</th>
              <th>Biaya STNK</th>
              <th>Harga</th>
              <th>Keterangan</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((item, index) => (
              <tr key={index}>
                <td valign="top">{item.nama_pegawai}</td>
                <td valign="top">{item.merk}</td>
                <td valign="top">{item.tipe}</td>
                <td valign="top">{item.cc}</td>
                <td valign="top">{item.warna}</td>
                <td valign="top">{item.mesin}</td>
                <td valign="top">{item.pembuatan}</td>
                <td valign="top">{item.pembelian}</td>
                <td valign="top">{item.bpkb}</td>
                <td valign="top">{item.stnk}</td>
                <td valign="top">
                  {item.biaya_stnk.toLocaleString("id", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </td>
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
