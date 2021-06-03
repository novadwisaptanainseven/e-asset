import { deleteKendaraanPindah } from "context/actions/KendaraanPindah";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const Swal = withReactContent(swal2);

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

// Alert untuk hapus data
export const showDeleteAlert = (
  idKendaraan,
  idKendaraanPindah,
  setKendaraanPindah,
  setLoading
) => {
  Swal.fire({
    title: `Anda Yakin ingin Hapus Data dengan id: ${idKendaraanPindah} ?`,
    text: "Data tidak dapat dipulihkan setelah Anda hapus",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Iya",
  }).then((result) => {
    if (result.isConfirmed) {
      deleteKendaraanPindah(
        idKendaraan,
        idKendaraanPindah,
        setKendaraanPindah,
        setLoading,
        Swal
      );
    }
  });
};

// Fungsi untuk bertujuan untuk mengubah data berupa id menjadi string nama pegawai
export const getNamaPegawai = (id = 1, pegawai = []) => {
  const search = pegawai.filter((item) => {
    return item.id_pegawai && item.id_pegawai === id;
  });

  // console.log(search[0].nama);
  return search[0].nama;
};
