import { FilterComponent } from "datatableStyle/filterPencarian";
import React from "react";

const SubHeaderComponentMemo = ({
  filterText,
  setFilterText,
  resetPaginationToggle,
  setResetPaginationToggle,
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
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    </div>
  );
};

export default React.memo(SubHeaderComponentMemo);
