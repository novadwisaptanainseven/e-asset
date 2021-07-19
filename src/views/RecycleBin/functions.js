import {
  restoreBarangSampah,
  restoreAllBarangSampah,
  restoreKendaraanSampah,
  restoreAllKendaraanSampah,
  deleteBarangSampah,
  deleteAllBarangSampah,
  deleteKendaraanSampah,
  deleteAllKendaraanSampah,
} from "context/actions/RecycleBin";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Swal = withReactContent(swal2);

// Alert untuk hapus data tertentu
export const showDeleteAlert = (id, dispatch, type = "", setLoading) => {
  Swal.fire({
    title: `Anda yakin ingin hapus data ini secara permanen ?`,
    text: "Data tidak dapat dipulihkan setelah Anda hapus",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Iya",
  }).then((result) => {
    if (result.isConfirmed) {
      if (type === "barang") {
        deleteBarangSampah(id, dispatch, Swal, setLoading);
      } else if (type === "kendaraan") {
        deleteKendaraanSampah(id, dispatch, Swal, setLoading);
      }
    }
  });
};

// Alert untuk restore data tertentu
export const showRestoreAlert = (id, dispatch, type = "", setLoading) => {
  Swal.fire({
    title: `Anda yakin ingin pulihkan data ini ?`,
    text: "Data sampah akan masuk kembali ke data master",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Iya",
  }).then((result) => {
    if (result.isConfirmed) {
      if (type === "barang") {
        restoreBarangSampah(id, dispatch, Swal, setLoading);
      } else if (type === "kendaraan") {
        restoreKendaraanSampah(id, dispatch, Swal, setLoading);
      }
    }
  });
};

// Alert untuk hapus semua data
export const showDeleteAllAlert = (dispatch, type = "", setLoading) => {
  Swal.fire({
    title: `Anda yakin ingin hapus semua data sampah secara permanen ?`,
    text: "Data tidak dapat dipulihkan setelah Anda hapus",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Iya",
  }).then((result) => {
    if (result.isConfirmed) {
      if (type === "barang") {
        deleteAllBarangSampah(dispatch, Swal, setLoading);
      } else if (type === "kendaraan") {
        deleteAllKendaraanSampah(dispatch, Swal, setLoading);
      }
    }
  });
};

// Alert untuk pulihkan semua data
export const showRestoreAllAlert = (dispatch, type = "", setLoading) => {
  Swal.fire({
    title: `Anda yakin ingin pulihkan semua data sampah ?`,
    text: "Semua data sampah akan masuk kembali ke data master",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Iya",
  }).then((result) => {
    if (result.isConfirmed) {
      if (type === "barang") {
        restoreAllBarangSampah(dispatch, Swal, setLoading);
      } else if (type === "kendaraan") {
        restoreAllKendaraanSampah(dispatch, Swal, setLoading);
      }
    }
  });
};
