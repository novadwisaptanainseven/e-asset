import React from "react";

const ComponentExcel = ({ idElement, data }) => {
  return (
    <div>
      <table id={idElement}>
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
          {data.map((item, index) => (
            <tr key={index}>
              <td align="top">{item.no_barang}</td>
              <td align="top">{item.nama_barang}</td>
              <td align="top">{item.merk}</td>
              <td align="top">{item.ukuran}</td>
              <td align="top">{item.bahan}</td>
              <td align="top">{item.tahun}</td>
              <td align="top">{item.harga}</td>
              <td align="top">{item.keterangan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComponentExcel;
