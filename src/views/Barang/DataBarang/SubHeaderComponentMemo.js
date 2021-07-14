import { LoadAnimationBlue } from "assets";
import getSelectKategori from "context/actions/Barang/getSelectKategori";
import { FilterComponent } from "datatableStyle/filterPencarian";
import React, { useEffect, useState } from "react";
import { Button, FormGroup, Input } from "reactstrap";

const SubHeaderComponentMemo = ({
  filterText,
  setFilterText,
  resetPaginationToggle,
  setResetPaginationToggle,
  isPrintingButtonActive,
  handlePrint,
  exportExcel,
  setJenisBarang,
  jenisBarang,
  setKategori,
  kategori,
  loadingFilter,
}) => {
  const { ExcelFile, ExcelSheet, fileName, dataSet } = exportExcel;
  const [selectKategori, setSelectKategori] = useState([]);

  useEffect(() => {
    getSelectKategori(setSelectKategori);
  }, []);

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
      <div className="d-flex align-items-center">
        <FormGroup className="mb-0">
          <Input
            type="select"
            name="filter-jenis-barang"
            value={jenisBarang}
            onChange={(e) => {
              setJenisBarang(e.target.value);
              setKategori("");
            }}
          >
            <option value="">-- Semua Jenis --</option>
            <option value="tidak-tetap">Tidak Tetap</option>
            <option value="tetap">Tetap</option>
          </Input>
        </FormGroup>
        <FormGroup className="mb-0 ml-2">
          <Input
            type="select"
            name="filter-kategori"
            value={kategori}
            onChange={(e) => {
              setKategori(e.target.value);
              setJenisBarang("");
            }}
          >
            <option value="">-- Semua Kategori --</option>
            {selectKategori.map((item, index) => (
              <option key={index} value={item.id_kategori}>
                {item.nama_kategori}
              </option>
            ))}
          </Input>
        </FormGroup>
        {loadingFilter && (
          <>
            <img className="ml-2" src={LoadAnimationBlue} width={30} height={30} alt="loading..." />
          </>
        )}
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
