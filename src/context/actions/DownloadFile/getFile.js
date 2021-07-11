export const getFile = (file) => {
  let file2 = file.replace(/\\/g, "%2F");
  // console.log(`${localStorage.baseURLFile}${file2}`);
  return `${localStorage.baseURLFile}${file2}`;
};
