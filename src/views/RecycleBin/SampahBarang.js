import Loading from "components/Loading";
import { getBarangSampah } from "context/actions/RecycleBin";
import { GlobalContext } from "context/Provider";
import customStyles from "datatableStyle/customStyles";
import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { ButtonGroup, Button } from "reactstrap";
import ExpandableComponent from "views/Barang/DataBarang/ExpandableComponent";
import SubHeaderComponentMemo from "views/RecycleBin/SubHeaderComponent";
import { showDeleteAlert, showRestoreAlert } from "./functions";

const SampahBarang = () => {
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const { barangSampahState, barangSampahDispatch } = useContext(GlobalContext);
  const { data } = barangSampahState;
  const [loading, setLoading] = useState(false);

  // Get all barang sampah
  useEffect(() => {
    getBarangSampah(barangSampahDispatch);
  }, [barangSampahDispatch]);

  const filteredData = !data
    ? []
    : data.filter((item) => {
        if (
          item.nama_barang.toLowerCase().includes(filterText.toLowerCase()) ||
          item.kode_barang.toLowerCase().includes(filterText.toLowerCase()) ||
          item.nama_kategori.toLowerCase().includes(filterText.toLowerCase()) ||
          item.merk.toLowerCase().includes(filterText.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      });

  // Columns DataTable
  const columnsDataTable = [
    {
      name: "No",
      selector: "no",
      sortable: true,
      wrap: true,
      width: "60px",
    },
    {
      name: "Kode Barang",
      selector: "kode_barang",
      sortable: true,
      // maxWidth: "200px",
      wrap: true,
    },
    {
      name: "Nama Barang",
      selector: "nama_barang",
      sortable: true,
      wrap: true,
    },
    {
      name: "Jenis Barang",
      selector: "jenis_barang",
      sortable: true,
      wrap: true,
      cell: (row) => (
        <div>
          {row.jenis_barang === "tidak-tetap" && "Tidak Tetap"}
          {row.jenis_barang === "tetap" && "Tetap"}
        </div>
      ),
    },
    {
      name: "Kategori",
      selector: "nama_kategori",
      sortable: true,
      wrap: true,
    },
    {
      name: "Merk",
      selector: "merk",
      sortable: true,
      wrap: true,
    },
    {
      // maxWidth: "150px",
      name: "Action",
      cell: (row) => (
        <div data-tag="allowRowEvents">
          <ButtonGroup>
            <Button
              color="success"
              className="btn btn-sm"
              onClick={() =>
                showRestoreAlert(
                  row.id_barang,
                  barangSampahDispatch,
                  "barang",
                  setLoading
                )
              }
            >
              <i className="fas fa-edit"></i>
            </Button>
            <Button
              color="danger"
              className="btn btn-sm"
              onClick={() =>
                showDeleteAlert(
                  row.id_barang,
                  barangSampahDispatch,
                  "barang",
                  setLoading
                )
              }
            >
              <i className="fas fa-trash"></i>
            </Button>
          </ButtonGroup>
        </div>
      ),
    },
  ];

  return (
    <div>
      <h1>Sampah Barang</h1>
      {data ? (
        <>
          {!loading ? (
            <DataTable
              columns={columnsDataTable}
              data={filteredData}
              noHeader
              responsive={true}
              customStyles={customStyles}
              pagination
              paginationResetDefaultPage={resetPaginationToggle}
              subHeader
              subHeaderComponent={
                <SubHeaderComponentMemo
                  filterText={filterText}
                  setFilterText={setFilterText}
                  resetPaginationToggle={resetPaginationToggle}
                  setResetPaginationToggle={setResetPaginationToggle}
                  dispatch={barangSampahDispatch}
                  type="barang"
                  dataBarang={data}
                  setLoading={setLoading}
                />
              }
              expandableRows
              expandOnRowClicked
              highlightOnHover
              expandableRowsComponent={<ExpandableComponent />}
            />
          ) : (
            <Loading />
          )}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default SampahBarang;
