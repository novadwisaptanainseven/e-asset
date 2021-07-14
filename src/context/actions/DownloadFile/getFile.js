const getFile = (file) => {
  let file2 = file.split("/");
  let file3 = `document/${file2[file2.length - 1]}`;
  return `${localStorage.baseURL}${file3}`;
};

export default getFile;
