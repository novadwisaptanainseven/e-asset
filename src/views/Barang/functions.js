import { generateQrCode2, softDeleteBarang } from "context/actions/Barang";
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

export const generateQrCode = (path, history, id, qrcode) => {
  history.push(`${path}/${id}/qr-code/${qrcode}`);
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
  let file2 = file.split("/");
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
  kode_barang: data ? data.kode_barang : "",
  nama_barang: data ? data.nama_barang : "",
  jenis_barang: data ? data.jenis_barang : "",
  id_kategori: data ? data.id_kategori : "",
  tahun_pembelian: data ? data.tahun_pembelian : "",
  merk: data ? data.merk : "",
  no_pabrik: data ? data.no_pabrik : "",
  ukuran: data ? data.ukuran : "",
  bahan: data ? data.bahan : "",
  harga: data ? data.harga : "",
  jumlah_baik: data ? data.jumlah_baik : "",
  jumlah_rusak: data ? data.jumlah_rusak : "",
  jumlah_barang: data ? data.jumlah_barang : "",
  satuan: data ? data.satuan : "",
  keterangan: data ? data.keterangan : "",
  file: undefined,
  foto: undefined,
});

// Alert untuk hapus data
export const showDeleteAlert = (id, dispatch, setLoadingFilter) => {
  Swal.fire({
    title: `Anda yakin ingin hapus data dengan id: ${id} ?`,
    text: "Data ini sementara akan dipindahkan ke sampah (Recycle Bin)",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Iya",
  }).then((result) => {
    if (result.isConfirmed) {
      softDeleteBarang(id, dispatch, setLoadingFilter, Swal);
    }
  });
};

// Fungsi untuk menampilkan alert success tambah data
export const showAlertSuccess = (successMessage = "", history) => {
  Swal.fire({
    icon: "success",
    title: successMessage,
    showConfirmButton: false,
    timer: 1500,
  }).then((res) => {
    history.push(`/easset/admin/barang`);
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

export const handleGenerateQrCode = (id, dispatch, setLoadingFilter) => {
  Swal.fire({
    title: "Generating QR Code!",
    html: "Loading...",
    timer: 1000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      // Generate QR Code
      generateQrCode2(id, dispatch, setLoadingFilter);
    },
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      Swal.fire({
        icon: "success",
        title: "Generate QR Code Berhasil",
        showConfirmButton: false,
        timer: 1500,
      }).then((res) => {
        // history.push(`/easset/admin/barang`);
      });
    }
  });
};
