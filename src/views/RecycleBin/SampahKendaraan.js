import customStyles from "datatableStyle/customStyles";
import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Button, ButtonGroup } from "reactstrap";
import { showDeleteAlert, showRestoreAlert } from "./functions";
import SubHeaderComponentMemo from "views/RecycleBin/SubHeaderComponent";
import ExpandableComponent from "views/RecycleBin/ExpandableComponent";
import { GlobalContext } from "context/Provider";
import { getKendaraanSampah } from "context/actions/RecycleBin";
import Loading from "components/Loading";

const SampahKendaraan = () => {
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const { kendaraanSampahState, kendaraanSampahDispatch } =
    useContext(GlobalContext);
  const { data } = kendaraanSampahState;
  const [loading, setLoading] = useState(false);

  // Get all kendaraan sampah
  useEffect(() => {
    getKendaraanSampah(kendaraanSampahDispatch);
  }, [kendaraanSampahDispatch]);

  const filteredData = !data
    ? []
    : data.filter((item) => {
        if (
          item.kode_kendaraan
            .toLowerCase()
            .includes(filterText.toLowerCase()) ||
          item.jenis_kendaraan
            .toLowerCase()
            .includes(filterText.toLowerCase()) ||
          item.merk.toLowerCase().includes(filterText.toLowerCase()) ||
          item.tipe.toLowerCase().includes(filterText.toLowerCase()) ||
          item.cc.toLowerCase().includes(filterText.toLowerCase()) ||
          item.warna.toLowerCase().includes(filterText.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      });

  // Columns DataTable
  const columnsDataTable = [
    {
      name: "Kode",
      selector: "kode_kendaraan",
      sortable: true,
      wrap: true,
      // maxWidth: "200px",
    },
    {
      name: "Jenis",
      selector: "jenis_kendaraan",
      sortable: true,
      wrap: true,
      // maxWidth: "200px",
    },
    {
      name: "Merk",
      selector: "merk",
      sortable: true,
      // maxWidth: "200px",
      wrap: true,
    },
    {
      name: "Tipe",
      selector: "tipe",
      sortable: true,
      wrap: true,
    },
    {
      name: "CC",
      selector: "cc",
      sortable: true,
      wrap: true,
    },
    {
      name: "Warna",
      selector: "warna",
      sortable: true,
      wrap: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div data-tag="allowRowEvents">
          <ButtonGroup>
            <Button
              color="success"
              className="btn btn-sm"
              onClick={() =>
                showRestoreAlert(
                  row.id_kendaraan,
                  kendaraanSampahDispatch,
                  "kendaraan",
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
                  row.id_kendaraan,
                  kendaraanSampahDispatch,
                  "kendaraan",
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
      <h1>Sampah Kendaraan</h1>
      {loading ? (
        <Loading />
      ) : (
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
              dispatch={kendaraanSampahDispatch}
              type="kendaraan"
              dataKendaraan={data}
              setLoading={setLoading}
            />
          }
          expandableRows
          expandOnRowClicked
          highlightOnHover
          expandableRowsComponent={<ExpandableComponent />}
        />
      )}
    </div>
  );
};

export default SampahKendaraan;
