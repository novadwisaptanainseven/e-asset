// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

// const MySwal = withReactContent(Swal);

export const checkToken = (history) => {
  if (localStorage.token) {
    // MySwal.fire({
    //   icon: "error",
    //   title: "Akses Dilarang",
    //   text: "Anda harus logout terlebih dahulu!",
    //   showConfirmButton: true,
    // }).then((result) => {
    //   history.goBack();
    // });
    history.goBack();
  }
};
