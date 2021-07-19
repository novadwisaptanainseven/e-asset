import expandableComponentStyle from "datatableStyle/expandableComponentStyle";
import React from "react";
import { Row, Col } from "reactstrap";

const ExpandableComponent = ({ data }) => {
  return (
    <>
      <div style={expandableComponentStyle}>
        <Row className="mb-1">
          <Col md="3">
            <strong>Ditambahkan Oleh</strong>
          </Col>
          <Col>{data.user_created}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>Diedit Oleh Oleh</strong>
          </Col>
          <Col>{data.user_updated}</Col>
        </Row>
      </div>
    </>
  );
};

export default ExpandableComponent;
