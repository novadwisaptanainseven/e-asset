import * as Yup from "yup";

const validationSchemaEdit = Yup.object().shape({
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
  tgl_update: Yup.string().required(
    "Tanggal update penempatan barang harus diisi"
  ),
  keterangan: Yup.string().required("Keterangan harus diisi"),
});

export default validationSchemaEdit;
