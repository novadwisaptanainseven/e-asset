export const goToDaftar = (path, history, id) => {
  history.push(`${path}/${id}/daftar`);
};

export const goBackToPrevPage = (history) => {
  history.goBack();
};

export const goToRiwayat = (path, history) => {
  history.push(`${path}/riwayat`);
};
