import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { deleteRincianBarang } from "context/actions/RincianBarang";

const Swal = withReactContent(swal2);

export const handleDelete = (id) => {
  alert("Hapus, id: " + id);
};

// Alert untuk hapus data
export const showDeleteAlert = (
  { value: idBarang },
  idBarangDetail,
  setRincianBarang,
  setLoading
) => {
  Swal.fire({
    title: `Anda Yakin ingin Hapus Data dengan id: ${idBarangDetail} ?`,
    text: "Data tidak dapat dipulihkan setelah Anda hapus",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Iya",
  }).then((result) => {
    if (result.isConfirmed) {
      deleteRincianBarang(
        idBarang,
        idBarangDetail,
        setRincianBarang,
        setLoading,
        Swal
      );
    }
  });
};
