import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  nama_ruangan: Yup.string().required("Nama ruangan harus diisi"),
});

export default validationSchema;
