import { SampleQrCode } from "assets";
import React from "react";
import { useHistory } from "react-router-dom";
import {
  Col,
  Row,
  Card,
  CardHeader,
  CardBody,
  UncontrolledAlert,
  Button,
} from "reactstrap";
import { goBackToPrevPage } from "../functions";

const PreviewQrCode = () => {
  const history = useHistory();

  return (
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
              Detail Barang
            </h2>
          </CardHeader>
          <CardBody className="text-center">
            <UncontrolledAlert color="info" fade={true} className="text-left">
              <span className="alert-inner--icon">
                <i className="ni ni-like-2" />
              </span>{" "}
              <span className="alert-inner--text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam temporibus ex hic. Consequatur sapiente magni commodi
                eum assumenda ipsam, molestiae ab iusto! Vitae explicabo natus
                facere ratione corrupti velit laborum!
              </span>
            </UncontrolledAlert>
            <img
              width="300px"
              className="img-thumbnail"
              src={SampleQrCode}
              alt="qr-code"
            />
            <br />
            <Button color="primary" className="mt-2">
              <i className="fas fa-download"></i> Download
            </Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default PreviewQrCode;
