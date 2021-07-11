import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Swal = withReactContent(swal2);

// Fungsi untuk menampilkan alert success tambah data
export const showAlertSuccess = (successMessage = "", url = "", history) => {
  Swal.fire({
    icon: "success",
    title: successMessage,
    showConfirmButton: false,
    timer: 1500,
  }).then((res) => {
    history.push(url);
  });
};

// Fungsi untuk menampilkan alert error tambah data
export const showAlertError = (failedMessage = "", message, setLoading) => {
  Swal.fire({
    icon: "error",
    title: failedMessage,
    text: message,
  }).then((result) => {
    setLoading(false);
  });
};
