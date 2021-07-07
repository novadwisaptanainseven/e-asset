import { format } from "date-fns";


export const handleDelete = (id) => {
  alert("Hapus, id: " + id);
};

export const goToRiwayat = (path, history) => {
  history.push(`${path}/riwayat`);
};

export const goBackToPrevPage = (history) => {
  history.goBack();
};

export const goToDetailBarang = (history, id) => {
  history.push(`/easset/admin/barang/${id}/detail`);
};

// Fungsi ini bertujuan untuk membersihkan string tanggal dari API E-Asset agar lebih mudah dibaca
export const getCleanTanggal = (tgl) => {
  let tgl2 = tgl.substring(0, 10);
  let tgl3 = format(new Date(tgl2), "dd/MM/yyyy");

  return tgl3;
};

// Fungsi untuk bertujuan untuk mengubah data berupa id menjadi string nama bidang
export const getNamaBidang = (id = 1, bidang = []) => {
  const search = bidang.filter((item) => {
    return item.id_bidang && item.id_bidang === id;
  });

  return search[0].nama_bidang;
};
