import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  id_bidang: Yup.string().required("Bidang harus diisi!"),
  jumlah_baik: Yup.number()
    .typeError("Jumlah baik harus berupa bilangan")
    .integer("Jumlah baik harus berupa bilangan")
    .required("Jumlah baik harus diisi"),
  jumlah_rusak: Yup.number()
    .typeError("Jumlah rusak harus berupa bilangan")
    .integer("Jumlah rusak harus berupa bilangan")
    .required("Jumlah rusak harus diisi"),
  jumlah_rusak_ringan: Yup.number()
    .typeError("Jumlah rusak ringan harus berupa bilangan")
    .integer("Jumlah rusak ringan harus berupa bilangan")
    .required("Jumlah rusak ringan harus diisi"),
});

export default validationSchema;
