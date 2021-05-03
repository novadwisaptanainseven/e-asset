export const goBackToPrevPage = (history) => {
  history.goBack();
};

export const goToEditPassword = (path, history) => {
  history.push(`${path}/password`);
};
