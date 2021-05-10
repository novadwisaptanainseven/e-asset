import React from "react";
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
  FormText,
} from "reactstrap";
// import { goToEditPassword } from "./functions";
import { Formik } from "formik";
import { setInitState } from "./functions";
import validationSchema from "./Formik/validationSchema";
import { handleFormSubmit } from "views/KendaraanPindah/functions";

const PengaturanAkun = ({ path }) => {
  // const history = useHistory();
  // const [preview, setPreview] = useState(null);
  // const [selectedFile, setSelectedFile] = useState(null);

  // Menangani preview input gambar setelah dipilih
  // const handleSelectedFile = useCallback(() => {
  //   if (!selectedFile) {
  //     setPreview(null);
  //     return;
  //   }

  //   const objectUrl = URL.createObjectURL(selectedFile);
  //   setPreview(objectUrl);

  //   return () => URL.revokeObjectURL(objectUrl);
  // }, [selectedFile]);

  // const onSelectFile = (e) => {
  //   if (!e.target.files || e.target.files.length === 0) {
  //     setSelectedFile(undefined);
  //     return;
  //   }
  //   setSelectedFile(e.target.files[0]);
  // };

  // useEffect(() => {
  //   handleSelectedFile();
  // }, [handleSelectedFile]);

  return (
    <>
      <Row>
        <Col>
          <Card className="shadow">
            <CardHeader className="d-flex justify-content-between">
              <h2>Pengaturan Akun</h2>
              {/* <Button
                color="info"
                onClick={() => goToEditPassword(path, history)}
              >
                Ganti Password
              </Button> */}
            </CardHeader>
            <Formik
              initialValues={setInitState("")}
              validationSchema={validationSchema}
              onSubmit={(values) => handleFormSubmit(values)}
              enableReinitialize
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <Form onSubmit={handleSubmit}>
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
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.nama || ""}
                          className={
                            errors.nama && touched.nama ? "is-invalid" : null
                          }
                        />
                        {errors.nama && touched.nama && (
                          <div className="invalid-feedback">{errors.nama}</div>
                        )}
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
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.username || ""}
                          className={
                            errors.username && touched.username
                              ? "is-invalid"
                              : null
                          }
                        />
                        {errors.username && touched.username && (
                          <div className="invalid-feedback">
                            {errors.username}
                          </div>
                        )}
                      </Col>
                    </FormGroup>

                    {/* <FormGroup row>
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
                </FormGroup> */}

                    <FormGroup row>
                      <Col md="2">
                        <Label>Password</Label>
                      </Col>
                      <Col>
                        <Input
                          type="password"
                          id="password"
                          name="password"
                          placeholder="Password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password || ""}
                          className={
                            errors.password && touched.password
                              ? "is-invalid"
                              : null
                          }
                        />
                        {errors.password && touched.password && (
                          <div className="invalid-feedback">
                            {errors.password}
                          </div>
                        )}
                        <FormText>
                          Kosongkan password jika tidak ingin mengubah password
                        </FormText>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="2">
                        <Label>Konfirmasi Password</Label>
                      </Col>
                      <Col>
                        <Input
                          type="password"
                          id="konfirmasi_password"
                          name="konfirmasi_password"
                          placeholder="Konfirmasi Password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.konfirmasi_password || ""}
                          className={
                            errors.konfirmasi_password &&
                            touched.konfirmasi_password
                              ? "is-invalid"
                              : null
                          }
                        />
                        {errors.konfirmasi_password &&
                          touched.konfirmasi_password && (
                            <div className="invalid-feedback">
                              {errors.konfirmasi_password}
                            </div>
                          )}
                      </Col>
                    </FormGroup>
                  </CardBody>
                  <CardFooter>
                    <Button type="submit" color="primary">
                      Simpan
                    </Button>
                  </CardFooter>
                </Form>
              )}
            </Formik>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PengaturanAkun;
