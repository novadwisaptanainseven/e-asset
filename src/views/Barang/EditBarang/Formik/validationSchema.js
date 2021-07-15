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
  kode_barang: Yup.string().required("Kode barang harus diisi"),
  nama_barang: Yup.string().required("Nama barang harus diisi"),
  jenis_barang: Yup.string().required("Jenis barang harus diisi"),
  id_kategori: Yup.string().required("Kategori harus diisi"),
  tahun_pembelian: Yup.string().required("Tahun pembelian harus diisi"),
  merk: Yup.string().required("Merk harus diisi"),
  no_pabrik: Yup.string().required("No. pabrik harus diisi"),
  ukuran: Yup.string().required("Ukuran harus diisi"),
  bahan: Yup.string().required("Bahan Barang harus diisi"),
  harga: Yup.number()
    .typeError("Harga harus berupa bilangan")
    .integer("Harga harus berupa bilangan")
    .required("Harga Barang harus diisi"),
  satuan: Yup.string().required("Satuan harus diisi"),
  keterangan: Yup.string().required("Keterangan harus diisi"),
  file: Yup.mixed()
    .test("size", "Kapasitas file maksimal 2 mb", (value) => {
      if (value) {
        return value && value.size <= FILE_BARANG_SIZE;
      }
      return true;
    })
    .test("type", "Ekstensi yang diperbolehkan hanya pdf dan word", (value) => {
      if (value) {
        return value && FILE_BARANG_SUPPORTED_FORMATS.includes(value.type);
      }
      return true;
    }),
  foto: Yup.mixed()
    .test("size", "Kapasitas file maksimal 2 mb", (value) => {
      if (value) {
        return value && value.size <= FOTO_BARANG_SIZE;
      }
      return true;
    })
    .test(
      "type",
      "Ekstensi yang diperbolehkan hanya jpg, jpeg, dan, png",
      (value) => {
        if (value) {
          return value && FOTO_BARANG_SUPPORTED_FORMATS.includes(value.type);
        }
        return true;
      }
    ),
});

export default validationSchema;
