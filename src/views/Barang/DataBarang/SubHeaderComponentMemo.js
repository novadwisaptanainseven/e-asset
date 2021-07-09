import { FilterComponent } from "datatableStyle/filterPencarian";
import React from "react";
import { Button, FormGroup, Input } from "reactstrap";

const SubHeaderComponentMemo = ({
  filterText,
  setFilterText,
  resetPaginationToggle,
  setResetPaginationToggle,
  isPrintingButtonActive,
  handlePrint,
  exportExcel,
}) => {
  const { ExcelFile, ExcelSheet, fileName, dataSet } = exportExcel;

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
      <div className="d-flex">
        <FormGroup className="mb-0">
          <Input type="select" name="filter-jenis-barang">
            <option value="">-- Jenis Barang --</option>
            <option value="tidak-tetap">Tidak Tetap</option>
            <option value="tetap">Tetap</option>
          </Input>
        </FormGroup>
        <FormGroup className="mb-0 ml-2">
          <Input type="select" name="filter-kategori">
            <option value="">-- Kategori --</option>
            <option value="tidak-tetap">TIK</option>
            <option value="tetap">Meubel</option>
          </Input>
        </FormGroup>
      </div>
      <div className="d-flex">
        {isPrintingButtonActive && (
          <>
            <Button
              onClick={handlePrint}
              color="info"
              style={{ height: "35px", paddingTop: "5px" }}
            >
              PDF <i className="fas fa-print"></i>
            </Button>

            <ExcelFile
              filename={fileName}
              element={
                <Button
                  className="mr-2"
                  color="success"
                  style={{ height: "35px", paddingTop: "5px" }}
                >
                  Excel <i className="fas fa-print"></i>
                </Button>
              }
            >
              <ExcelSheet dataSet={dataSet} name={fileName} />
            </ExcelFile>
          </>
        )}
        <FilterComponent
          onFilter={(e) => setFilterText(e.target.value)}
          onClear={handleClear}
          filterText={filterText}
        />
      </div>
    </div>
  );
};

export default React.memo(SubHeaderComponentMemo);
