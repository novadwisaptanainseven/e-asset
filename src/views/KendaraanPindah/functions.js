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

export const setInitState = (data) => ({
  id_kendaran: data ? data.id_kendaran : "",
  tanggal: data ? data.tanggal : "",
  dari_pegawai: data ? data.dari_pegawai : "",
  ke_pegawai: data ? data.ke_pegawai : "",
  keterangan: data ? data.keterangan : "",
});

export const handleFormSubmit = (values) => {
  console.log(values);
};

export const cekSelectError = (val, setTouchedSelect) => {
  !val ? setTouchedSelect(true) : setTouchedSelect(false);
};
