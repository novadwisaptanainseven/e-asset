export const handleDelete = (id) => {
  alert("Hapus, id: " + id);
};

export const goToRiwayat = (path, history) => {
  history.push(`${path}/riwayat`);
};

export const goBackToPrevPage = (history) => {
  history.goBack();
};

export const goToDetailKendaraan = (history, id) => {
  history.push(`/easset/admin/kendaraan/${id}/detail`);
};
