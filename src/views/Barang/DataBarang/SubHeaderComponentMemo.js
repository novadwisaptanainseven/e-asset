import { FilterComponent } from "datatableStyle/filterPencarian";
import React from "react";

const SubHeaderComponentMemo = ({
  filterText,
  setFilterText,
  resetPaginationToggle,
  setResetPaginationToggle,
}) => {
  console.log("render");
  const handleClear = () => {
    if (filterText) {
      setResetPaginationToggle(!resetPaginationToggle);
      setFilterText("");
    }
  };

  return (
    <>
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    </>
  );
};

export default React.memo(SubHeaderComponentMemo);
