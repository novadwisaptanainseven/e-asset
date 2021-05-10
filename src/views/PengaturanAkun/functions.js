export const goBackToPrevPage = (history) => {
  history.goBack();
};

export const goToEditPassword = (path, history) => {
  history.push(`${path}/password`);
};

export const setInitState = (data) => ({
  nama: data ? data.nama : "",
  username: data ? data.username : "",
  password: data ? data.password : "",
});

export const handleFormSubmit = (values) => {
  console.log(values);
};
