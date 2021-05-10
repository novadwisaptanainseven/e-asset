import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  nama: Yup.string().required("Nama harus diisi"),
  username: Yup.string().required("Username harus diisi"),
  password: Yup.string().oneOf(
    [Yup.ref("konfirmasi_password"), null],
    "Konfirmasi password tidak sesuai"
  ),
  konfirmasi_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Konfirmasi password tidak sesuai")
    .when("password", {
      is: (val) => (val ? true : false),
      then: () => Yup.string().required("Konfirmasi Password harus diisi"),
      // otherwise: () => console.log("Otherwise"),
    }),
});

export default validationSchema;
