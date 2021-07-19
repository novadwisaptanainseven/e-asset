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
            <strong>Terpakai</strong>
          </Col>
          <Col>{9}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>Tidak Terpakai</strong>
          </Col>
          <Col>{11}</Col>
        </Row>
      </div>
    </>
  );
};

export default ExpandableComponent;
