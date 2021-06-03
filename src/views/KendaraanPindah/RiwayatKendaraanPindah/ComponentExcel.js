import React from 'react'

const ComponentExcel = ({idElement, data}) => {
  return (
    <div>
      <table id={idElement}>
        <tr>
          <th>No. Barang</th>
          <th>Nama Barang</th>
          <th>Merk</th>
          <th>Ukuran</th>
          <th>Ukuran</th>
        </tr>
      </table>
    </div>
  )
}

export default ComponentExcel
