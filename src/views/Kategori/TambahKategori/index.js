import LoadingSubmit from "components/LoadingSubmit";
import insertKategori from "context/actions/Kategori/insertKategori";
import { Formik } from "formik";
import React, { useState } from "react";
import { useHistory } from "react-router";
import {
  Form,
  Row,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Col,
  FormGroup,
  Input,
} from "reactstrap";
import { goBackToPrevPage } from "../functions";
import initState from "./Formik/initState";
import validationSchema from "./Formik/validationSchema";

const TambahKategori = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("nama_kategori", values.nama_kategori);

    for (let item of formData.entries()) {
      console.log(item);
    }

    insertKategori(formData, setLoading, history);
  };

  return (
    <Row>
      <Col>
        <Card>
          <CardHeader>
            <h2>
              <i
                onClick={() => goBackToPrevPage(history)}
                style={{ cursor: "pointer" }}
                className="fas fa-long-arrow-alt-left text-primary mr-3"
              ></i>{" "}
              Tambah Kategori
            </h2>
          </CardHeader>
          <Formik
            initialValues={initState}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit}
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
                <CardBody>
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="nama_kategori"
                    >
                      Nama Kategori
                    </label>
                    <Input
                      type="text"
                      id="nama_kategori"
                      name="nama_kategori"
                      placeholder="Nama kategori"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.nama_kategori || ""}
                      className={
                        errors.nama_kategori && touched.nama_kategori
                          ? "is-invalid"
                          : null
                      }
                    />
                    {errors.nama_kategori && touched.nama_kategori && (
                      <div className="invalid-feedback">
                        {errors.nama_kategori}
                      </div>
                    )}
                  </FormGroup>
                </CardBody>
                <CardFooter className="text-right">
                  <Button
                    type="submit"
                    color="primary"
                    disabled={loading ? true : false}
                  >
                    {loading ? <LoadingSubmit /> : "Simpan"}
                  </Button>
                </CardFooter>
              </Form>
            )}
          </Formik>
        </Card>
      </Col>
    </Row>
  );
};

export default TambahKategori;
