import expandableComponentStyle from "datatableStyle/expandableComponentStyle";
import React from "react";
import { Row, Col } from "reactstrap";

const ExpandableComponent = ({ data }) => {
  return (
    <>
      <div style={expandableComponentStyle}>
        <Row className="mb-1">
          <Col md="3">
            <strong>Tgl. Penempatan</strong>
          </Col>
          <Col>{data.tgl_penempatan}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>Tgl. Update</strong>
          </Col>
          <Col>{data.tgl_update}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>Keterangan</strong>
          </Col>
          <Col>{data.keterangan}</Col>
        </Row>
      </div>
    </>
  );
};

export default ExpandableComponent;
