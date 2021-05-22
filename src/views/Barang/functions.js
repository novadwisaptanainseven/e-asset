import { deleteBarang } from "context/actions/Barang";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Swal = withReactContent(swal2);

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

export const goToRincianBarang = (path, history) => {
  history.push(`${path}`);
};

export const handleDelete = (id, history) => {
  alert("Handle delete, id: " + id);
};

// Fungsi untuk mendapatkan nama file
export const getFileName = (file) => {
  let file2 = file.split("\\");
  let file3 = file2[file2.length - 1];

  return file3;
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

// Alert untuk hapus data
export const showDeleteAlert = (id, dispatch) => {
  Swal.fire({
    title: `Anda Yakin ingin Hapus Data dengan id: ${id} ?`,
    text: "Data tidak dapat dipulihkan setelah Anda hapus",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Iya",
  }).then((result) => {
    if (result.isConfirmed) {
      deleteBarang(id, dispatch, Swal);
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
    // history.push(`/easset/admin/barang/tambah`);
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
