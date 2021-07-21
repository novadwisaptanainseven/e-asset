import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  id_ruangan: Yup.string().required("Ruangan harus diisi"),
  jumlah: Yup.mixed()
    .required("Jumlah barang harus diisi")
    .test("check", "Jumlah masih bernilai 0", (value) => {
      if (value === 0) {
        return false;
      } else {
        return true;
      }
    }),
  tgl_penempatan: Yup.string().required(
    "Tanggal penempatan barang harus diisi"
  ),
  keterangan: Yup.string().required("Keterangan harus diisi"),
});

export default validationSchema;
