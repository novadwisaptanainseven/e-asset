import expandableComponentStyle from "datatableStyle/expandableComponentStyle";
import React from "react";
import { Row, Col } from "reactstrap";

const ExpandableComponent = ({ data }) => (
  <>
    <div style={expandableComponentStyle}>
      <Row className="mb-1">
        <Col md="2">
          <strong>Jumlah Baik</strong>
        </Col>
        <Col>{data.jumlah_baik}</Col>
      </Row>
      <Row className="mb-1">
        <Col md="2">
          <strong>Jumlah Rusak</strong>
        </Col>
        <Col>{data.jumlah_rusak}</Col>
      </Row>
      <Row className="mb-1">
        <Col md="2">
          <strong>Jumlah Rusak Ringan</strong>
        </Col>
        <Col>{data.jumlah_rusak_ringan}</Col>
      </Row>
      <Row className="mb-1">
        <Col md="2">
          <strong>Keterangan</strong>
        </Col>
        <Col>{data.keterangan}</Col>
      </Row>
    </div>
  </>
);

export default ExpandableComponent;
