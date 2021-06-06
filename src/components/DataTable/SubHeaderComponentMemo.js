import { FilterComponent } from "datatableStyle/filterPencarian";
import React from "react";
import { Button } from "reactstrap";

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
    <>
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
    </>
  );
};

export default React.memo(SubHeaderComponentMemo);
