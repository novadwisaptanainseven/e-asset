import expandableComponentStyle from "datatableStyle/expandableComponentStyle";
import { format } from "date-fns";
import React from "react";
import { Row, Col } from "reactstrap";

const ExpandableComponent = ({ data }) => {
  return (
    <>
      <div style={expandableComponentStyle}>
        <Row className="mb-1">
          <Col md="3">
            <strong>Tgl. Update</strong>
          </Col>
          <Col>{data.tgl_update ? format(new Date(data.tgl_update), "dd/MM/y") : "-"}</Col>
        </Row>
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
