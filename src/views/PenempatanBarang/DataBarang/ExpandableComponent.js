import expandableComponentStyle from "datatableStyle/expandableComponentStyle";
import React from "react";
import { Row, Col } from "reactstrap";

const ExpandableComponent = ({ data }) => {
  return (
    <>
      <div style={expandableComponentStyle}>
        <Row className="mb-1">
          <Col md="3">
            <strong>Total Barang</strong>
          </Col>
          <Col>{data.jumlah_barang}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>Jumlah Baik</strong>
          </Col>
          <Col>{data.jumlah_baik}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>Jumlah Rusak</strong>
          </Col>
          <Col>{data.jumlah_rusak}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>Terpakai</strong>
          </Col>
          <Col>{data.jumlah_baik_terpakai}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>Tidak Terpakai</strong>
          </Col>
          <Col>{data.jumlah_baik_tidak_terpakai}</Col>
        </Row>
      </div>
    </>
  );
};

export default ExpandableComponent;
