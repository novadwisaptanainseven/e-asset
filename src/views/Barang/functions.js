// Fungsi - Fungsi untuk halaman Index Barang
export const goBackToPrevPage = (history) => {
	history.goBack();
};

export const goToTambah = (history, path) => {
	history.push(`${path}/tambah`);
};

export const goToEdit = (path, history, id) => {
	history.push(`${path}/${id}/edit`);
};

export const goToDetail = (path, history, id) => {
	history.push(`${path}/${id}/detail`);
};

export const handleDelete = (id, history) => {
	alert("Handle delete, id: " + id);
};

// Fungsi - fungsi untuk halaman Tambah Barang
export const handleTambahRincianBarang = (value, setRincianBarang) => {
	setRincianBarang((prevVal) => [...prevVal, value]);
};
export const handleHapusRincianBarang = (rincianBarang, setRincianBarang) => {
	rincianBarang.pop();
	setRincianBarang([...rincianBarang]);
};
