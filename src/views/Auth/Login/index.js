/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

import { Formik } from "formik";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
} from "reactstrap";
import initState from "./Formik/initState";
import validationSchema from "./Formik/validationSchema";

const Login = () => {
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-4">
            <div className="text-muted text-center mt-2">
              <h1>
                <span className="font-weight-normal">Login</span> Administrator
              </h1>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <Formik
              initialValues={initState}
              validationSchema={validationSchema}
              onSubmit={(values) => handleFormSubmit(values)}
            >
              {({
                values,
                errors,
                touched,
                handleSubmit,
                handleChange,
                handleBlur,
              }) => (
                <Form role="form" onSubmit={handleSubmit}>
                  <FormGroup className="mb-3">
                    <InputGroup
                      className={`input-group-alternative ${
                        errors.username && touched.username
                          ? "input-error"
                          : null
                      }`}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i
                            className={`ni ni-single-02 ${
                              errors.username && touched.username
                                ? "text-danger"
                                : null
                            }`}
                          />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        id="username"
                        name="username"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username || ""}
                        placeholder="Username"
                        autoComplete="username"
                      />
                    </InputGroup>
                    {errors.username && touched.username && (
                      <div className="mt-1 text-danger text-error">
                        {errors.username}
                      </div>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <InputGroup
                      className={`input-group-alternative ${
                        errors.password && touched.password
                          ? "input-error"
                          : null
                      }`}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i
                            className={`ni ni-lock-circle-open ${
                              errors.password && touched.password
                                ? "text-danger"
                                : null
                            }`}
                          />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        id="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password || ""}
                        placeholder="Password"
                        autoComplete="new-password"
                      />
                    </InputGroup>
                    {errors.password && touched.password && (
                      <div className="mt-1 text-danger text-error">
                        {errors.password}
                      </div>
                    )}
                  </FormGroup>
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id=" customCheckLogin"
                      type="checkbox"
                    />
                  </div>
                  <div className="text-center">
                    <Button type="submit" className="my-2" color="primary">
                      Login
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Login;
