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
}) => {
  const handleClear = () => {
    if (filterText) {
      setResetPaginationToggle(!resetPaginationToggle);
      setFilterText("");
    }
  };

  return (
    <>
      {isPrintingButtonActive && (
        <Button
          onClick={handlePrint}
          color="info"
          style={{ height: "35px", paddingTop: "5px" }}
        >
          Cetak <i className="fas fa-print"></i>
        </Button>
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
