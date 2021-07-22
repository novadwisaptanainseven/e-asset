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
            <strong>Tgl. Penempatan</strong>
          </Col>
          <Col>
            {data.tgl_penempatan
              ? format(new Date(data.tgl_penempatan), "dd/MM/y")
              : "-"}
          </Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>Tgl. Update</strong>
          </Col>
          <Col>
            {data.tgl_update
              ? format(new Date(data.tgl_update), "dd/MM/y")
              : "-"}
          </Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>Tgl. Hapus</strong>
          </Col>
          <Col>
            {data.tgl_hapus ? format(new Date(data.tgl_hapus), "dd/MM/y") : "-"}
          </Col>
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
