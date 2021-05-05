// Fungsi - Fungsi untuk halaman Index Barang
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

// Fungsi - fungsi untuk halaman Tambah Barang
export const handleTambahRincianBarang = (value, setRincianBarang) => {
  setRincianBarang((prevVal) => [...prevVal, value]);
};
export const handleHapusRincianBarang = (rincianBarang, setRincianBarang) => {
  rincianBarang.pop();
  setRincianBarang([...rincianBarang]);
};

// Fungsi - fungsi untuk halaman Edit Barang
export const setInitStateEdit = (data) => ({
  no_barang: data ? data.no_barang : "",
  nama_barang: data ? data.nama_barang : "",
  tahun: data ? data.tahun : "",
  merk: data ? data.merk : "",
  no_seri_pabrik: data ? data.no_seri_pabrik : "",
  ukuran: data ? data.ukuran : "",
  bahan: data ? data.bahan : "",
  harga: data ? data.harga : "",
  keterangan: data ? data.keterangan : "",
  file: undefined,
  foto: undefined,
});
