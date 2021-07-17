import LoadingSubmit from "components/LoadingSubmit";
import { getRuanganById } from "context/actions/Ruangan";
import { editRuangan } from "context/actions/Ruangan";
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

const EditRuangan = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const { params } = match;
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  // Get ruangan by id
  useEffect(() => {
    getRuanganById(params.id, setData, setLoading);
  }, [params]);

  const handleFormSubmit = (values) => {
    editRuangan(params.id, values, setLoading, history);
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
              Edit Ruangan
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

export default EditRuangan;
