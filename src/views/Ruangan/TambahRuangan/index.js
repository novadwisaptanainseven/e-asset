import LoadingSubmit from "components/LoadingSubmit";
import { insertRuangan } from "context/actions/Ruangan";
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

const TambahRuangan = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("nama_ruangan", values.nama_ruangan);

    for (let item of formData.entries()) {
      console.log(item);
    }

    insertRuangan(formData, setLoading, history);
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
              Tambah Ruangan
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
                      htmlFor="nama_ruangan"
                    >
                      Nama Ruangan
                    </label>
                    <Input
                      type="text"
                      id="nama_ruangan"
                      name="nama_ruangan"
                      placeholder="Nama ruangan"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.nama_ruangan || ""}
                      className={
                        errors.nama_ruangan && touched.nama_ruangan
                          ? "is-invalid"
                          : null
                      }
                    />
                    {errors.nama_ruangan && touched.nama_ruangan && (
                      <div className="invalid-feedback">
                        {errors.nama_ruangan}
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

export default TambahRuangan;
