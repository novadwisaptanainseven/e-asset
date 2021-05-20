import { getFile } from "context/actions/DownloadFile/getFile";
import expandableComponentStyle from "datatableStyle/expandableComponentStyle";
import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import ModalPreviewImage from "./ModalPreviewImage";

const ExpandableComponent = ({ data }) => {
  const [modal, setModal] = useState(false);

  const getFileName = (file) => {
    let file2 = file.split("\\");
    let file3 = file2[file2.length - 1];

    return file3;
  };

  return (
    <>
      <div style={expandableComponentStyle}>
        <Row className="mb-1">
          <Col md="3">
            <strong>Bahan</strong>
          </Col>
          <Col>{data.bahan}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>Tahun</strong>
          </Col>
          <Col>{data.tahun}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>Harga</strong>
          </Col>
          <Col>{data.harga}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>Keterangan</strong>
          </Col>
          <Col>{data.keterangan}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>File</strong>
          </Col>
          <Col>
            {data.file && (
              <a href={getFile(data.file)} target="_blank" rel="noreferrer">
                {getFileName(data.file)}
              </a>
            )}
          </Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>Foto</strong>
          </Col>
          <Col>
            <img
              src={data.foto ? getFile(data.foto) : ""}
              alt=""
              width={200}
              className="img-thumbnail"
              onClick={() => setModal(!modal)}
            />
          </Col>
        </Row>
      </div>

      <ModalPreviewImage modal={modal} setModal={setModal} data={data.foto} />
    </>
  );
};

export default ExpandableComponent;
