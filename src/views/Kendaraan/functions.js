// Fungsi - Fungsi untuk halaman Index Kendaraan
export const goBackToPrevPage = (history) => {
  history.goBack();
};

export const goToTambah = (history, path) => {
  history.push(`${path}/tambah`);
};

export const goToEdit = (path, history, id) => {
  history.push(`${path}/${id}/edit`);
};

export const goToDetail = (path, history, id) => {
  history.push(`${path}/${id}/detail`);
};

export const handleDelete = (id, history) => {
  alert("Handle delete, id: " + id);
};

// Fungsi - fungsi untuk halaman Kendaraan
export const setInitState = (data) => ({
  id_pegawai: data ? data.id_pegawai : "",
  nama_pegawai: data ? data.nama_pegawai : "",
  merk: data ? data.merk : "",
  tipe: data ? data.tipe : "",
  cc: data ? data.cc : "",
  warna: data ? data.warna : "",
  rangka: data ? data.rangka : "",
  mesin: data ? data.mesin : "",
  pembuatan: data ? data.pembuatan : "",
  pembelian: data ? data.pembelian : "",
  no_polisi: data ? data.no_polisi : "",
  bpkb: data ? data.bpkb : "",
  stnk: data ? data.stnk : "",
  biaya_stnk: data ? data.biaya_stnk : "",
  harga: data ? data.harga : "",
  keterangan: data ? data.keterangan : "",
  file: undefined,
  foto: undefined,
});

// Mengubah format harga dari number menjadi Currency Rupiah
export const convertToCurrency = (harga, setHargaFormatRp) => {
  let formatRp = parseInt(harga).toLocaleString("id", {
    style: "currency",
    currency: "IDR",
  });
  if (harga) {
    setHargaFormatRp(formatRp);
  } else {
    setHargaFormatRp("");
  }
};

// Handle conversion format harga onKeyUp
export const handleFormatRp = (value, setHargaFormatRp) => {
  convertToCurrency(value, setHargaFormatRp);
};
