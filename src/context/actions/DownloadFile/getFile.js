export const getFile = (file) => {
  let file2 = file.replace(/\\/g, "%2F");
  // console.log(`${sessionStorage.baseURLFile}${file2}`);
  return `${sessionStorage.baseURLFile}${file2}`;
};
