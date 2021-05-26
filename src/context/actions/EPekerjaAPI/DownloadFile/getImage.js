const getImage = (file) => {
  let file2 = file.split("/");
  let file3 = `v1/image/${file2[file2.length - 1]}`;
  // console.log(`${sessionStorage.baseURLFile}${file2}`);
  return `${sessionStorage.baseUrlEpekerja}${file3}`;
};

export default getImage;
