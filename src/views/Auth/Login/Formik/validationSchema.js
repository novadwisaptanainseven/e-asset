import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username harus diisi"),
  password: Yup.string().required("Password harus diisi"),
});

export default validationSchema;
