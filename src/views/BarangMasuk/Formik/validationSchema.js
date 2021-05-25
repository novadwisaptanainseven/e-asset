import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  ke_bidang: Yup.string().required("Bidang harus diisi"),
  jumlah_baik: Yup.number()
    .typeError("Jumlah baik harus berupa bilangan")
    .integer("Jumlah baik harus berupa bilangan"),
  jumlah_rusak: Yup.number()
    .typeError("Jumlah rusak harus berupa bilangan")
    .integer("Jumlah rusak harus berupa bilangan"),
  jumlah_rusak_ringan: Yup.number()
    .typeError("Jumlah rusak ringan harus berupa bilangan")
    .integer("Jumlah rusak ringan harus berupa bilangan"),
  keterangan: Yup.string().required("Keterangan harus diisi"),
});

export default validationSchema;
