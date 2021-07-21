import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const Swal = withReactContent(swal2);

export const goToDaftar = (path, history, id) => {
  history.push(`${path}/${id}/daftar`);
};

export const goBackToPrevPage = (history) => {
  history.goBack();
};

export const goToRiwayat = (path, history) => {
  history.push(`${path}/riwayat`);
};

// Alert untuk hapus data
export const showDeleteAlert = (id, setData) => {
  Swal.fire({
    title: `Anda yakin ingin hapus data dengan id: ${id} ?`,
    text: "Data ini tidak dapat dipulihkan kembali",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Iya",
  }).then((result) => {
    if (result.isConfirmed) {
      // softDeleteKendaraan(id, dispatch, Swal);`
    }
  });
};

// Fungsi untuk menampilkan alert success tambah data
export const showAlertSuccess = (successMessage = "") => {
  Swal.fire({
    icon: "success",
    title: successMessage,
    showConfirmButton: false,
    timer: 1500,
  }).then((res) => {
    // history.push(`/easset/admin/barang`);
  });
};

// Fungsi untuk menampilkan alert error tambah data
export const showAlertError = (failedMessage = "", message, setLoading) => {
  Swal.fire({
    icon: "error",
    title: failedMessage,
    text: message,
  }).then((result) => {
    setLoading(false);
  });
};
