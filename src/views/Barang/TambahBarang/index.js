import React from "react";
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
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                          First name
                        </label>
                        <Input
                          className="form-control-alternative"
                          defaultValue="Lucky"
                          id="input-first-name"
                          placeholder="First name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                          Last name
                        </label>
                        <Input
                          className="form-control-alternative"
                          defaultValue="Jesse"
                          id="input-last-name"
                          placeholder="Last name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
                <hr className="my-4" />
                {/* Address */}
                <h6 className="heading-small text-muted mb-4">
                  Contact information
                </h6>
                <div className="pl-lg-4">
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-address"
                        >
                          Address
                        </label>
                        <Input
                          className="form-control-alternative"
                          defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                          id="input-address"
                          placeholder="Home Address"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="4">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-city"
                        >
                          City
                        </label>
                        <Input
                          className="form-control-alternative"
                          defaultValue="New York"
                          id="input-city"
                          placeholder="City"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="4">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-country"
                        >
                          Country
                        </label>
                        <Input
                          className="form-control-alternative"
                          defaultValue="United States"
                          id="input-country"
                          placeholder="Country"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="4">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-country"
                        >
                          Postal code
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="input-postal-code"
                          placeholder="Postal code"
                          type="number"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
                <hr className="my-4" />
                {/* Description */}
                <h6 className="heading-small text-muted mb-4">About me</h6>
                <div className="pl-lg-4">
                  <FormGroup>
                    <label>About Me</label>
                    <Input
                      className="form-control-alternative"
                      placeholder="A few words about you ..."
                      rows="4"
                      defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and
                        Open Source."
                      type="textarea"
                    />
                  </FormGroup>
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
