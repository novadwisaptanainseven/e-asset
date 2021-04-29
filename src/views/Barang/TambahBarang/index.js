import React, { useCallback, useEffect, useState } from "react";
import {
  Card,
  Col,
  Row,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Input,
} from "reactstrap";

const TambahBarang = () => {
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
              <h3>Tambah Barang</h3>
            </CardHeader>
            <CardBody className="bg-secondary">
              <Form>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="no_barang"
                        >
                          No. Barang
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="no_barang"
                          placeholder="No. Barang"
                          type="text"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="nama_barang"
                        >
                          Nama Barang
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="nama_barang"
                          placeholder="Nama Barang"
                          type="text"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label className="form-control-label" htmlFor="tahun">
                          Tahun
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="tahun"
                          placeholder="Tahun"
                          type="number"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label className="form-control-label" htmlFor="merk">
                          Merk
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="merk"
                          placeholder="Merk"
                          type="text"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="no_seri_pabrik"
                        >
                          No. Seri Pabrik
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="no_seri_pabrik"
                          placeholder="No. Seri Pabrik"
                          type="text"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label className="form-control-label" htmlFor="ukuran">
                          Ukuran
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="ukuran"
                          placeholder="Ukuran"
                          type="text"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label className="form-control-label" htmlFor="bahan">
                          Bahan
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="bahan"
                          placeholder="Bahan"
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
                          placeholder="Harga"
                          type="number"
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
                          rows="3"
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
                    <Col>
                      <FormGroup>
                        <label className="form-control-label" htmlFor="bahan">
                          Bidang
                        </label>
                        <Input
                          type="select"
                          name="bidang"
                          id="bidang"
                          className="form-control-alternative"
                        >
                          <option value="">-- Pilih Bidang --</option>
                          <option value="1">Perumahan</option>
                          <option value="2">Permukiman</option>
                          <option value="3">PSU</option>
                          <option value="4">Sekretariat</option>
                        </Input>
                      </FormGroup>
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="jumlah_baik"
                        >
                          Jumlah Baik
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="jumlah_baik"
                          name="jumlah_baik"
                          placeholder="Jumlah Baik"
                          type="number"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="jumlah_rusak"
                        >
                          Jumlah Rusak
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="jumlah_rusak"
                          name="jumlah_rusak"
                          placeholder="Jumlah Rusak"
                          type="number"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="jumlah_rusak_ringan"
                        >
                          Jumlah Rusak Ringan
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="jumlah_rusak_ringan"
                          name="jumlah_rusak_ringan"
                          placeholder="Jumlah Rusak Ringan"
                          type="number"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default TambahBarang;
