import * as Yup from "yup";

// Setting validasi form menggunakan YUP & FORMIK
// Mime Type Foto
const FOTO_BARANG_SIZE = 2048000; // Bytes => 2 mb x 1000 kb x 1000 bytes
const FOTO_BARANG_SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
const FILE_BARANG_SIZE = 2048000; // Bytes => 2 mb x 1000 kb x 1000 bytes
// Mime Type File
const FILE_BARANG_SUPPORTED_FORMATS = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const validationSchema = Yup.object().shape({
  no_barang: Yup.string().required("No. barang harus diisi"),
  nama_barang: Yup.string().required("Nama barang harus diisi"),
  tahun: Yup.string().required("Tahun harus diisi"),
  merk: Yup.string().required("Merk harus diisi"),
  no_seri_pabrik: Yup.string().required("No. seri pabrik harus diisi"),
  ukuran: Yup.string().required("Ukuran harus diisi"),
  bahan: Yup.string().required("Bahan Barang harus diisi"),
  harga: Yup.number()
    .typeError("Harga harus berupa bilangan")
    .integer("Harga harus berupa bilangan")
    .required("Harga Barang harus diisi"),
  keterangan: Yup.string().required("Keterangan harus diisi"),
  file: Yup.mixed()
    .required("File harus diisi")
    .test(
      "size",
      "Kapasitas file maksimal 2 mb",
      (value) => value && value.size <= FILE_BARANG_SIZE
    )
    .test(
      "type",
      "Ekstensi yang diperbolehkan hanya pdf dan word",
      (value) => value && FILE_BARANG_SUPPORTED_FORMATS.includes(value.type)
    ),
  foto: Yup.mixed()
    .required("Foto harus diisi")
    .test(
      "size",
      "Kapasitas file maksimal 2 mb",
      (value) => value && value.size <= FOTO_BARANG_SIZE
    )
    .test(
      "type",
      "Ekstensi yang diperbolehkan hanya jpg, jpeg, dan, png",
      (value) => value && FOTO_BARANG_SUPPORTED_FORMATS.includes(value.type)
    ),
  id_bidang: Yup.string().required("Bidang harus diisi"),
  jumlah_baik: Yup.string().required("Jumlah baik harus diisi"),
  jumlah_rusak: Yup.string().required("Jumlah rusak harus diisi"),
  jumlah_rusak_ringan: Yup.string().required("Jumlah rusak ringan harus diisi"),
});

export default validationSchema;
