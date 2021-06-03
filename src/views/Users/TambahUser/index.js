import React, { useState } from "react";
import { useHistory } from "react-router";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  CardFooter,
  Button,
} from "reactstrap";
import { goBackToPrevPage } from "../functions";
import { Formik } from "formik";
import initState from "./Formik/initState";
import validationSchema from "./Formik/validationSchema";
import { LoadAnimationWhite } from "assets";
import { insertUser } from "context/actions/Auth/insertUser";

const TambahUser = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (values) => {
    insertUser(values, setLoading, history);
  };

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
                Tambah User
              </h2>
            </CardHeader>
            <Formik
              initialValues={initState}
              validationSchema={validationSchema}
              onSubmit={(values) => handleFormSubmit(values)}
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
                    <div className="pl-lg-4">
                      <FormGroup>
                        <Label>Username</Label>
                        <Input
                          type="text"
                          name="username"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.username}
                          placeholder="Username"
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
                      </FormGroup>
                      <FormGroup>
                        <Label>Password</Label>
                        <Input
                          type="password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          placeholder="Password"
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
                      </FormGroup>
                    </div>
                  </CardBody>
                  <CardFooter className="text-right">
                    <Button
                      type="submit"
                      color="primary"
                      disabled={loading ? true : false}
                    >
                      {loading ? (
                        <img
                          width={30}
                          src={LoadAnimationWhite}
                          alt="load-animation"
                        />
                      ) : (
                        "Simpan"
                      )}
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

export default TambahUser;
