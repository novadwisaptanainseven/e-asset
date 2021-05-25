// import { FotoKendaraanSample } from "assets";
import { getFile } from "context/actions/DownloadFile/getFile";
import expandableComponentStyle from "datatableStyle/expandableComponentStyle";
import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { getFileName } from "../functions";
import ModalPreviewImage from "./ModalPreviewImage";

const ExpandableComponent = ({ data }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div style={expandableComponentStyle}>
        <Row className="mb-1">
          <Col md="2">
            <strong>Mesin</strong>
          </Col>
          <Col>{data.mesin}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="2">
            <strong>Pembuatan</strong>
          </Col>
          <Col>{data.pembuatan}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="2">
            <strong>Pembelian</strong>
          </Col>
          <Col>{data.pembelian}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="2">
            <strong>No. Polisi</strong>
          </Col>
          <Col>{data.no_polisi}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="2">
            <strong>BPKB</strong>
          </Col>
          <Col>{data.bpkb}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="2">
            <strong>STNK</strong>
          </Col>
          <Col>{data.stnk}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="2">
            <strong>Biaya STNK</strong>
          </Col>
          <Col>
            {data &&
              data.biaya_stnk.toLocaleString("id", {
                style: "currency",
                currency: "IDR",
              })}
          </Col>
        </Row>
        <Row className="mb-1">
          <Col md="2">
            <strong>Harga</strong>
          </Col>
          <Col>
            {data &&
              data.harga.toLocaleString("id", {
                style: "currency",
                currency: "IDR",
              })}
          </Col>
        </Row>
        <Row className="mb-1">
          <Col md="2">
            <strong>Keterangan</strong>
          </Col>
          <Col>{data.keterangan}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="2">
            <strong>File</strong>
          </Col>
          <Col>
            {" "}
            {data.file && (
              <a href={getFile(data.file)} target="_blank" rel="noreferrer">
                {getFileName(data.file)}
              </a>
            )}
          </Col>
        </Row>
        <Row className="mb-1">
          <Col md="2">
            <strong>Foto</strong>
          </Col>
          <Col>
            <img
              style={{
                cursor: "pointer",
              }}
              src={data.foto ? getFile(data.foto) : ""}
              alt=""
              width={200}
              className="img-thumbnail"
              onClick={() => setModal(!modal)}
            />
          </Col>
        </Row>
      </div>

      <ModalPreviewImage modal={modal} setModal={setModal} data={data.foto} />
    </>
  );
};

export default ExpandableComponent;
