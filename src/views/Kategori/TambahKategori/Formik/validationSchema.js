import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  nama_kategori: Yup.string().required("Nama kategori harus diisi"),
});

export default validationSchema;
