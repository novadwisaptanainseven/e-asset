const getQrCode = (qrCode) => {
  let url = `qr-code/${qrCode}`;

  return `${localStorage.baseURL + url}`;
};

export default getQrCode;
