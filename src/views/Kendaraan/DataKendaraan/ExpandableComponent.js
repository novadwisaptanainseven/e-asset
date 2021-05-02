import { FotoKendaraanSample } from "assets";
import expandableComponentStyle from "datatableStyle/expandableComponentStyle";
import React from "react";
import { Row, Col } from "reactstrap";

const ExpandableComponent = ({ data }) => (
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
        <Col>{data.biaya_stnk}</Col>
      </Row>
      <Row className="mb-1">
        <Col md="2">
          <strong>Harga</strong>
        </Col>
        <Col>{data.harga}</Col>
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
        <Col>{data.file}</Col>
      </Row>
      <Row className="mb-1">
        <Col md="2">
          <strong>Foto</strong>
        </Col>
        <Col>
          <img
            src={FotoKendaraanSample}
            alt=""
            width={200}
            className="img-thumbnail"
          />
        </Col>
      </Row>
    </div>
  </>
);

export default ExpandableComponent;
