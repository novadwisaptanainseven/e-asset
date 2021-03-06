import { FilterComponent } from "datatableStyle/filterPencarian";
import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Button } from "reactstrap";
import { goToRiwayat } from "../functions";

const SubHeaderComponentMemo = ({
  filterText,
  setFilterText,
  resetPaginationToggle,
  setResetPaginationToggle,
}) => {
  const history = useHistory();
  const match = useRouteMatch();
  const { path } = match;

  console.log(match);

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
      <Button color="primary" onClick={() => goToRiwayat(path, history)}>
        Riwayat Penempatan Barang
      </Button>
    </div>
  );
};

export default React.memo(SubHeaderComponentMemo);
