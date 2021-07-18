import { getImage } from "context/actions/EPekerjaAPI/DownloadFile";
import {
  generateQrCode2,
  softDeleteKendaraan,
} from "context/actions/Kendaraan";
import { format } from "date-fns";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const Swal = withReactContent(swal2);

// Fungsi - Fungsi untuk halaman Index Kendaraan
export const goBackToPrevPage = (history) => {
  history.goBack();
};

export const goToTambah = (history, path) => {
  history.push(`${path}/tambah`);
};

export const generateQrCode = (path, history, id, qrcode) => {
  history.push(`${path}/${id}/qr-code/${qrcode}`);
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
  kode_kendaraan: data ? data.kode_kendaraan : "",
  jenis_kendaraan: data ? data.jenis_kendaraan : "",
  merk: data ? data.merk : "",
  tipe: data ? data.tipe : "",
  cc: data ? data.cc : "",
  bahan: data ? data.bahan : "",
  warna: data ? data.warna : "",
  no_rangka: data ? data.no_rangka : "",
  no_mesin: data ? data.no_mesin : "",
  no_pabrik: data ? data.no_pabrik : "",
  no_polisi: data ? data.no_polisi : "",
  tahun_pembuatan: data ? data.tahun_pembuatan : "",
  tahun_pembelian: data ? data.tahun_pembelian : "",
  kondisi: data ? data.kondisi : "baik",
  bpkb: data ? data.bpkb : "",
  stnk: data ? data.stnk : "",
  biaya_stnk: data ? data.biaya_stnk : "",
  harga: data ? data.harga : "",
  asal_usul: data ? data.asal_usul : "",
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
  if (harga && formatRp !== "RpNaN") {
    setHargaFormatRp(formatRp);
  } else {
    setHargaFormatRp("");
  }
};

// Handle conversion format harga onKeyUp
export const handleFormatRp = (value, setHargaFormatRp) => {
  convertToCurrency(value, setHargaFormatRp);
};

// Alert untuk hapus data
export const showDeleteAlert = (id, dispatch) => {
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
      softDeleteKendaraan(id, dispatch, Swal);
    }
  });
};

// Fungsi ini bertujuan untuk membersihkan string tanggal dari API E-Asset agar lebih mudah dibaca
export const getCleanTanggal = (tgl) => {
  let tgl2 = tgl.substring(0, 10);
  let tgl3 = format(new Date(tgl2), "dd/MM/yyyy");

  return tgl3;
};

// Fungsi untuk bertujuan untuk mengubah data berupa id menjadi string nama pegawai
export const getNamaPegawai = (id = 1, pegawai = []) => {
  const search = pegawai.filter((item) => {
    return item.id_pegawai && item.id_pegawai === id;
  });

  // console.log(search[0].nama);
  return search[0].nama;
};

// Fungsi untuk mendapatkan nama file
export const getFileName = (file) => {
  let file2 = file.split("/");
  let file3 = file2[file2.length - 1];

  return file3;
};

// Fungsi untuk download gambar
export const getImagePegawai = (id = 1, pegawai = []) => {
  const search = pegawai.filter((item) => {
    return item.id_pegawai && item.id_pegawai === id;
  });

  return getImage(search[0].foto);
};

// Fungsi untuk menampilkan alert success tambah data
export const showAlertSuccess = (successMessage = "", history) => {
  Swal.fire({
    icon: "success",
    title: successMessage,
    showConfirmButton: false,
    timer: 1500,
  }).then((res) => {
    history.push(`/easset/admin/kendaraan`);
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

export const handleGenerateQrCode = (id, dispatch) => {
  Swal.fire({
    title: "Generating QR Code!",
    html: "Loading...",
    timer: 1000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      // Generate QR Code
      generateQrCode2(id, dispatch);
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
