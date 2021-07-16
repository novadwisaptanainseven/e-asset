import * as Yup from "yup";

// Setting validasi form menggunakan YUP & FORMIK
// Mime Type Foto
const FOTO_KENDARAAN_SIZE = 2048000; // Bytes => 2 mb x 1000 kb x 1000 bytes
const FOTO_KENDARAAN_SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/png",
];
const FILE_KENDARAAN_SIZE = 2048000; // Bytes => 2 mb x 1000 kb x 1000 bytes
// Mime Type File
const FILE_KENDARAAN_SUPPORTED_FORMATS = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const validationSchema = Yup.object().shape({
  kode_kendaraan: Yup.string().required("Kode kendaraan harus diisi"),
  jenis_kendaraan: Yup.string().required("Jenis kendaraan harus diisi"),
  merk: Yup.string().required("Merk harus diisi"),
  tipe: Yup.string().required("Tipe harus diisi"),
  cc: Yup.string().required("CC harus diisi"),
  bahan: Yup.string().required("Bahan harus diisi"),
  warna: Yup.string().required("Warna harus diisi"),
  no_rangka: Yup.string().required("No. Rangka harus diisi"),
  no_pabrik: Yup.string().required("No. Pabrik harus diisi"),
  no_mesin: Yup.string().required("No. Mesin harus diisi"),
  no_polisi: Yup.string().required("No. Polisi harus diisi"),
  tahun_pembuatan: Yup.string().required("Tahun pembuatan harus diisi"),
  tahun_pembelian: Yup.string().required("Tahun pembelian harus diisi"),
  bpkb: Yup.string().required("BPKB harus diisi"),
  stnk: Yup.string().required("STNK harus diisi"),
  biaya_stnk: Yup.number()
    .typeError("Biaya STNK harus berupa bilangan numerik")
    .integer("Biaya STNK harus berupa bilangan numerik")
    .required("Biaya STNK harus diisi"),
  harga: Yup.number()
    .typeError("Harga harus berupa bilangan numerik")
    .integer("Harga harus berupa bilangan numerik")
    .required("Harga harus diisi"),
  asal_usul: Yup.string().required("Asal usul harus diisi"),
  keterangan: Yup.string().required("Keterangan harus diisi"),
  file: Yup.mixed()
    // .required("File harus diisi")
    .test("size", "Kapasitas file maksimal 2 mb", (value) => {
      if (value) {
        return value && value.size <= FILE_KENDARAAN_SIZE;
      } else {
        return true;
      }
    })
    .test("type", "Ekstensi yang diperbolehkan hanya pdf dan word", (value) => {
      if (value) {
        return value && FILE_KENDARAAN_SUPPORTED_FORMATS.includes(value.type);
      } else {
        return true;
      }
    }),
  foto: Yup.mixed()
    // .required("Foto harus diisi")
    .test("size", "Kapasitas file maksimal 2 mb", (value) => {
      if (value) {
        return value && value.size <= FOTO_KENDARAAN_SIZE;
      } else {
        return true;
      }
    })
    .test(
      "type",
      "Ekstensi yang diperbolehkan hanya jpg, jpeg, dan, png",
      (value) => {
        if (value) {
          return value && FOTO_KENDARAAN_SUPPORTED_FORMATS.includes(value.type);
        } else {
          return true;
        }
      }
    ),
});

export default validationSchema;
