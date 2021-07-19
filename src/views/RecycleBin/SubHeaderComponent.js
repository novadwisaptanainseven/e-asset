import { FilterComponent } from "datatableStyle/filterPencarian";
import React from "react";
import { Button } from "reactstrap";
import { showDeleteAllAlert, showRestoreAllAlert } from "./functions";

const SubHeaderComponentMemo = ({
  filterText,
  setFilterText,
  resetPaginationToggle,
  setResetPaginationToggle,
  dispatch,
  type,
  dataBarang = null,
  dataKendaraan = null,
  setLoading,
}) => {
  const handleClear = () => {
    if (filterText) {
      setResetPaginationToggle(!resetPaginationToggle);
      setFilterText("");
    }
  };

  return (
    <div
      className="d-flex justify-content-between mt-3"
      style={{ width: "100%" }}
    >
      <div>
        {type === "barang" && (
          <>
            <Button
              disabled={dataBarang && dataBarang.length > 0 ? false : true}
              color="success"
              onClick={() => showRestoreAllAlert(dispatch, type, setLoading)}
            >
              Pulihkan Semua
            </Button>
            <Button
              disabled={dataBarang && dataBarang.length > 0 ? false : true}
              color="danger"
              onClick={() => showDeleteAllAlert(dispatch, type, setLoading)}
            >
              Hapus Semua
            </Button>
          </>
        )}
        {type === "kendaraan" && (
          <>
            <Button
              disabled={
                dataKendaraan && dataKendaraan.length > 0 ? false : true
              }
              color="success"
              onClick={() => showRestoreAllAlert(dispatch, type, setLoading)}
            >
              Pulihkan Semua
            </Button>
            <Button
              disabled={
                dataKendaraan && dataKendaraan.length > 0 ? false : true
              }
              color="danger"
              onClick={() => showDeleteAllAlert(dispatch, type, setLoading)}
            >
              Hapus Semua
            </Button>
          </>
        )}
      </div>
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    </div>
  );
};

export default React.memo(SubHeaderComponentMemo);
