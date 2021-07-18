import LoadingSubmit from "components/LoadingSubmit";
import { getKategoriById } from "context/actions/Kategori";
import { editKategori } from "context/actions/Kategori";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useRouteMatch } from "react-router-dom";
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
import { goBackToPrevPage, setInitStateEdit } from "../functions";
import validationSchema from "./Formik/validationSchema";

const EditKategori = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const { params } = match;
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  // Get kategori by id
  useEffect(() => {
    getKategoriById(params.id, setData, setLoading);
  }, [params]);

  const handleFormSubmit = (values) => {
    editKategori(params.id, values, setLoading, history);
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
              Edit Kategori
            </h2>
          </CardHeader>
          <Formik
            initialValues={setInitStateEdit(data)}
            enableReinitialize={true}
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

export default EditKategori;
