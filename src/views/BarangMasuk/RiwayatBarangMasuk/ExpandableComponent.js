import expandableComponentStyle from "datatableStyle/expandableComponentStyle";
import React from "react";
import { Row, Col } from "reactstrap";

const ExpandableComponent = ({ data }) => (
  <>
    <div style={expandableComponentStyle}>
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