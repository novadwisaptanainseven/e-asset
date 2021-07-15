import getQrCode from "context/actions/DownloadFile/getQrCode";
import React from "react";
import "./styleToPrint.scss";

export class ComponentToPrint extends React.Component {
  render() {
    return (
      <div className="myStyle">
        <div>
          <h1>QR Code</h1>
          <h2>
            {this.props.data.nama_barang} ({this.props.data.merk})
          </h2>

          <img
            width="250"
            src={getQrCode(this.props.data.qr_code)}
            alt="qr-code"
          />
        </div>
      </div>
    );
  }
}
