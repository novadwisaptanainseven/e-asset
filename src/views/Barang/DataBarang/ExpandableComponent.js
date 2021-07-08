import { FotoBarangSample } from "assets";
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
            <strong>No. Pabrik</strong>
          </Col>
          <Col>{data.no_pabrik}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>Ukuran</strong>
          </Col>
          <Col>{data.ukuran}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>Bahan</strong>
          </Col>
          <Col>{data.bahan}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>Tahun Pembelian</strong>
          </Col>
          <Col>{data.tahun_pembelian}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>Harga</strong>
          </Col>
          <Col>
            {data.harga.toLocaleString("id", {
              style: "currency",
              currency: "IDR",
            })}
          </Col>
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
            <strong>Jumlah Barang</strong>
          </Col>
          <Col>{data.jumlah_barang}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>Satuan</strong>
          </Col>
          <Col>{data.satuan}</Col>
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
              src={FotoBarangSample}
              alt=""
              width={200}
              className="img-thumbnail"
              style={{ cursor: "pointer" }}
              onClick={() => setModal(!modal)}
            />
          </Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>Ditambahkan Oleh</strong>
          </Col>
          <Col>{data.user_created}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>Diedit Oleh</strong>
          </Col>
          <Col>{data.user_updated}</Col>
        </Row>
      </div>

      <ModalPreviewImage modal={modal} setModal={setModal} data={data.foto} />
    </>
  );
};

export default ExpandableComponent;
