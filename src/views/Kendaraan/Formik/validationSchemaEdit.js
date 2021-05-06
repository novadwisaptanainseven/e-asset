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

const validationSchemaEdit = Yup.object().shape({
  id_pegawai: Yup.string().required("Pegawai harus diisi"),
  merk: Yup.string().required("Merk harus diisi"),
  tipe: Yup.string().required("Tipe harus diisi"),
  cc: Yup.string().required("CC harus diisi"),
  warna: Yup.string().required("Warna harus diisi"),
  rangka: Yup.string().required("Rangka harus diisi"),
  mesin: Yup.string().required("Mesin harus diisi"),
  pembuatan: Yup.string().required("Pembuatan harus diisi"),
  pembelian: Yup.string().required("Pembelian harus diisi"),
  no_polisi: Yup.string().required("No. Polisi harus diisi"),
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
  keterangan: Yup.string().required("Keterangan harus diisi"),
  file: Yup.mixed()
    .test("size", "Kapasitas file maksimal 2 mb", (value) => {
      if (value) {
        return value && value.size <= FILE_KENDARAAN_SIZE;
      }
      return true;
    })
    .test("type", "Ekstensi yang diperbolehkan hanya pdf dan word", (value) => {
      if (value) {
        return value && FILE_KENDARAAN_SUPPORTED_FORMATS.includes(value.type);
      }
      return true;
    }),
  foto: Yup.mixed()
    .test("size", "Kapasitas file maksimal 2 mb", (value) => {
      if (value) {
        return value && value.size <= FOTO_KENDARAAN_SIZE;
      }
      return true;
    })
    .test(
      "type",
      "Ekstensi yang diperbolehkan hanya jpg, jpeg, dan, png",
      (value) => {
        if (value) {
          return value && FOTO_KENDARAAN_SUPPORTED_FORMATS.includes(value.type);
        }
        return true;
      }
    ),
});

export default validationSchemaEdit;
