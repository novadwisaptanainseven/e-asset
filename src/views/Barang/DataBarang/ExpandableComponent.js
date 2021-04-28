import { FotoBarangSample } from "assets";
import expandableComponentStyle from "datatableStyle/expandableComponentStyle";
import React from "react";
import { Row, Col } from "reactstrap";

const ExpandableComponent = ({ data }) => (
  <>
    <div style={expandableComponentStyle}>
      <Row className="mb-1">
        <Col md="2">
          <strong>Bahan</strong>
        </Col>
        <Col>{data.bahan}</Col>
      </Row>
      <Row className="mb-1">
        <Col md="2">
          <strong>Tahun</strong>
        </Col>
        <Col>{data.tahun}</Col>
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
            src={FotoBarangSample}
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