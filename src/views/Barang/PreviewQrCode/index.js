import { getBarangById } from "context/actions/Barang";
import getQrCode from "context/actions/DownloadFile/getQrCode";
import React, { useEffect, useRef, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
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
import { ComponentToPrint } from "./ComponentToPrint";

const PreviewQrCode = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const { params } = match;
  const componentPrintRef = useRef();
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  // Get barang by id
  useEffect(() => {
    getBarangById(params.id, setData, setLoading);
  }, [params]);

  // Handle print data qrcode
  const handlePrintQrCode = useReactToPrint({
    content: () => componentPrintRef.current,
    pageStyle: `
      @media print {
        @page {
          size: 140mm 140mm;
        }
      }
      .myStyle {
        display: flex;
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        justify-content: center;
      }
    `,
    copyStyles: false,
    documentTitle: "QR Code Barang",
  });

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
              Preview QR Code
            </h2>
          </CardHeader>
          <CardBody className="text-center">
            <UncontrolledAlert color="info" fade={true} className="text-left">
              <span className="alert-inner--icon">
                <i className="ni ni-like-2" />
              </span>{" "}
              <span className="alert-inner--text">
                Ini adalah qr code barang yang bertujuan untuk monitoring barang
                dengan cara scan menggunakan aplikasi barcode scanner. Simpan
                atau print qr code di bawah ini.
              </span>
            </UncontrolledAlert>
            <img
              width="250px"
              className="img-thumbnail"
              src={getQrCode(params.qrcode)}
              alt="qr-code"
            />
            <br />
            <Button
              className="mt-3"
              color="primary"
              onClick={handlePrintQrCode}
              disabled={loading ? true : false}
            >
              Print QR Code
            </Button>
          </CardBody>
        </Card>
      </Col>

      {data && (
        <div style={{ display: "none" }}>
          <ComponentToPrint ref={componentPrintRef} data={data} />
        </div>
      )}
    </Row>
  );
};

export default PreviewQrCode;
