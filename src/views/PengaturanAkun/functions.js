export const goBackToPrevPage = (history) => {
  history.goBack();
};

export const goToEditPassword = (path, history) => {
  history.push(`${path}/password`);
};

export const setInitState = (data) => ({
  username: data ? data.username : "",
  password: "",
});

export const handleFormSubmit = (values) => {
  console.log(values);
};
