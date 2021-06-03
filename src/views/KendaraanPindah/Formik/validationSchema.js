import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  // id_kendaran: Yup.string().required("Kendaraan harus diisi"),
  tanggal: Yup.string().required("Tanggal harus diisi"),
  // dari_pegawai: Yup.string().required("Dari pegawai sebelumnya harus diisi"),
  // ke_pegawai: Yup.string().required("Ke pegawai selanjutnya harus diisi"),
  keterangan: Yup.string().required("Keterangan harus diisi"),
});

export default validationSchema;
