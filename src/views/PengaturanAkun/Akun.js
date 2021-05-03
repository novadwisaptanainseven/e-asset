import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import {
  Card,
  Col,
  Row,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  CardFooter,
} from "reactstrap";
import { goToEditPassword } from "./functions";
// import columnsDataTable from "../columnsDataTable";

const PengaturanAkun = ({ path }) => {
  const history = useHistory();
  const [preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

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
            <CardHeader className="d-flex justify-content-between">
              <h2>Pengaturan Akun</h2>
              <Button
                color="info"
                onClick={() => goToEditPassword(path, history)}
              >
                Ganti Password
              </Button>
            </CardHeader>
            <Form>
              <CardBody className="bg-secondary">
                <FormGroup row>
                  <Col md="2">
                    <Label>Nama</Label>
                  </Col>
                  <Col>
                    <Input
                      type="text"
                      id="nama"
                      name="nama"
                      placeholder="Nama"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="2">
                    <Label>Username</Label>
                  </Col>
                  <Col>
                    <Input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Username"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col md="2">
                    <Label>Foto Profil</Label>
                  </Col>
                  <Col>
                    <Input
                      type="file"
                      id="foto_profil"
                      name="foto_profil"
                      onChange={(e) => onSelectFile(e)}
                      placeholder="Foto Profil"
                    />
                    {preview && (
                      <img
                        src={preview}
                        alt="img-preview"
                        className="mt-2 img-thumbnail"
                        width={180}
                      />
                    )}
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button color="primary">Simpan</Button>
              </CardFooter>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PengaturanAkun;
