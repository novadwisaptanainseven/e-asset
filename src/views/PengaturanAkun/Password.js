import React from "react";
import { useHistory } from "react-router";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Form,
  FormText,
  Input,
  FormGroup,
  Label,
} from "reactstrap";
import { goBackToPrevPage } from "./functions";

const Password = () => {
  const history = useHistory();

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
                Setting Password
              </h2>
            </CardHeader>
            <Form>
              <CardBody className="bg-secondary">
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
                    />
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
                    />
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

export default Password;
