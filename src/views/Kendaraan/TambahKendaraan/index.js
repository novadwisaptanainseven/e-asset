import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Select from "react-select";
import {
  Card,
  Col,
  Row,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Input,
  Button,
  CardFooter,
} from "reactstrap";
import { goBackToPrevPage } from "../functions";

const TambahKendaraan = () => {
  const history = useHistory();
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  // Menangani preview input gambar setelah dipilih
  const handleSelectedFile = useCallback(() => {
    if (!selectedFile) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  useEffect(() => {
    handleSelectedFile();
  }, [handleSelectedFile]);

  return (
    <>
      <Row>
        <Col>
          <Card className="shadow">
            <CardHeader>
              <h2>
                <i
                  onClick={() => goBackToPrevPage(history)}
                  style={{ cursor: "pointer" }}
                  className="fas fa-long-arrow-alt-left text-primary mr-3"
                ></i>{" "}
                Tambah Kendaraan
              </h2>
            </CardHeader>
            <CardBody className="bg-secondary">
              <Form>
                <div className="pl-lg-4">
                  <Row>
                    <Col>
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="no_barang"
                        >
                          Pilih Pegawai
                        </label>
                        <Select
                          styles={{
                            control: (provided, state) => ({
                              // none of react-select's styles are passed to <Control />
                              ...provided,
                              border: "none",
                              boxShadow: state.isFocused
                                ? "1px 2px 5px rgba(0,0,0,0.3)"
                                : "1px 1px 3px rgba(0,0,0,0.2)",
                            }),
                          }}
                          id="pegawai"
                          name="pegawai"
                          placeholder="-- Pilih Pegawai --"
                          // onChange={(opt) => setBarang(opt ? opt.value : "")}
                          // defaultInputValue={barang}
                          isSearchable
                          isClearable
                          options={[
                            {
                              value: "Nova Dwi Sapta",
                              label: "Nova Dwi Sapta",
                            },
                            { value: "Tony Stark", label: "Tony Stark" },
                            { value: "Chris Evans", label: "Chris Evans" },
                          ]}
                        />
                      </FormGroup>
                      <FormGroup>
                        <label className="form-control-label" htmlFor="merk">
                          Merk Kendaraan
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="merk"
                          placeholder="Merk Kendaraan"
                          type="text"
                          name="merk"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label className="form-control-label" htmlFor="tipe">
                          Tipe
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="tipe"
                          placeholder="tipe"
                          type="number"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label className="form-control-label" htmlFor="cc">
                          CC
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="cc"
                          placeholder="CC"
                          type="text"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label className="form-control-label" htmlFor="warna">
                          Warna
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="warna"
                          name="warna"
                          placeholder="Warna"
                          type="text"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label className="form-control-label" htmlFor="rangka">
                          Rangka
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="rangka"
                          name="rangka"
                          placeholder="Rangka"
                          type="text"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label className="form-control-label" htmlFor="mesin">
                          Mesin
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="mesin"
                          name="mesin"
                          placeholder="Mesin"
                          type="text"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="pembuatan"
                        >
                          Pembuatan
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="pembuatan"
                          name="pembuatan"
                          placeholder="Pembuatan"
                          type="number"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="pembelian"
                        >
                          Pembelian
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="pembelian"
                          name="pembelian"
                          placeholder="Pembelian"
                          type="text"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="no_polisi"
                        >
                          No. Polisi
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="no_polisi"
                          name="no_polisi"
                          placeholder="No. Polisi"
                          type="text"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label className="form-control-label" htmlFor="bpkb">
                          BPKB
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="bpkb"
                          name="bpkb"
                          placeholder="BPKB"
                          type="text"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label className="form-control-label" htmlFor="bpkb">
                          BPKB
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="bpkb"
                          name="bpkb"
                          placeholder="BPKB"
                          type="text"
                        />
                      </FormGroup>
                    </Col>

                    <Col>
                      <FormGroup>
                        <label className="form-control-label" htmlFor="stnk">
                          STNK
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="stnk"
                          name="stnk"
                          placeholder="STNK"
                          type="text"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="biaya_stnk"
                        >
                          Biaya STNK
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="biaya_stnk"
                          name="biaya_stnk"
                          placeholder="Biaya STNK"
                          type="text"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label className="form-control-label" htmlFor="harga">
                          Harga
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="harga"
                          name="harga"
                          placeholder="Harga"
                          type="text"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="keterangan"
                        >
                          Keterangan
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="keterangan"
                          name="keterangan"
                          placeholder="Keterangan"
                          type="text"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="keterangan"
                        >
                          Keterangan
                        </label>

                        <textarea
                          name="keterangan"
                          id="keterangan"
                          placeholder="Keterangan"
                          rows="7"
                          className="form-control border-0"
                          style={{
                            boxShadow: "1px 1px 4px rgba(0,0,0,0.15)",
                          }}
                        />
                      </FormGroup>
                      <FormGroup>
                        <label className="form-control-label" htmlFor="file">
                          File
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="file"
                          placeholder="File"
                          type="file"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label className="form-control-label" htmlFor="foto">
                          Foto
                        </label>
                        <Input
                          className="form-control-alternative mb-3"
                          id="foto"
                          placeholder="Foto"
                          type="file"
                          onChange={(e) => onSelectFile(e)}
                        />
                        {preview && (
                          <img
                            src={preview}
                            alt="img-preview"
                            className="img-thumbnail"
                            width={180}
                          />
                        )}
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              </Form>
            </CardBody>
            <CardFooter className="text-right">
              <Button color="primary">Simpan</Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default TambahKendaraan;
