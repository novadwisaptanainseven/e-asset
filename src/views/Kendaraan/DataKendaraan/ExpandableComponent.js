// import { FotoKendaraanSample } from "assets";
import { FotoKendaraanSample } from "assets";
import getFile from "context/actions/DownloadFile/getFile";
import getImage from "context/actions/DownloadFile/getImage";
import expandableComponentStyle from "datatableStyle/expandableComponentStyle";
import React, { useState } from "react";
import { Row, Col, Badge } from "reactstrap";
import { getFileName } from "../functions";
import ModalPreviewImage from "./ModalPreviewImage";

const ExpandableComponent = ({ data }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div style={expandableComponentStyle}>
        <Row className="mb-1">
          <Col md="3">
            <strong>Pengguna Kendaraan</strong>
          </Col>
          <Col>
            {data.pengguna ? (
              <>
                <div>
                  {data.pengguna.nama}, <a href=".">Atur Pengguna</a>
                </div>
              </>
            ) : (
              <>
                <Badge color="danger" pill>
                  Pengguna belum ada.{" "}
                  <a className="text-dark link-pengguna-hover" href=".">
                    Atur Pengguna
                  </a>
                </Badge>
              </>
            )}
          </Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>Bahan</strong>
          </Col>
          <Col>{data.bahan}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>No. Pabrik</strong>
          </Col>
          <Col>{data.no_pabrik}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>No. Rangka</strong>
          </Col>
          <Col>{data.no_rangka}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>No. Mesin</strong>
          </Col>
          <Col>{data.no_mesin}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>No. Polisi</strong>
          </Col>
          <Col>{data.no_polisi}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>Tahun Pembuatan</strong>
          </Col>
          <Col>{data.tahun_pembuatan}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>Tahun Pembelian</strong>
          </Col>
          <Col>{data.tahun_pembelian}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>BPKB</strong>
          </Col>
          <Col>{data.bpkb}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>STNK</strong>
          </Col>
          <Col>{data.stnk}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>Biaya STNK</strong>
          </Col>
          <Col>
            {data &&
              data.biaya_stnk.toLocaleString("id", {
                style: "currency",
                currency: "IDR",
              })}
          </Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>Harga</strong>
          </Col>
          <Col>
            {data &&
              data.harga.toLocaleString("id", {
                style: "currency",
                currency: "IDR",
              })}
          </Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>Kondisi</strong>
          </Col>
          <Col>{data.kondisi}</Col>
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
            {" "}
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
              style={{
                cursor: "pointer",
              }}
              src={getImage(data.foto)}
              alt=""
              width={200}
              className="img-thumbnail"
              onClick={() => setModal(!modal)}
            />
          </Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>Ditambahkan oleh</strong>
          </Col>
          <Col>{data.user_created}</Col>
        </Row>
        <Row className="mb-1">
          <Col md="3">
            <strong>Diedit oleh</strong>
          </Col>
          <Col>{data.user_updated}</Col>
        </Row>
      </div>

      <ModalPreviewImage modal={modal} setModal={setModal} data={data.foto} />
    </>
  );
};

export default ExpandableComponent;
