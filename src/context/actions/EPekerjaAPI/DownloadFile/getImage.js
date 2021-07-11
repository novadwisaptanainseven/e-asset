const getImage = (file) => {
  let file2 = file.split("/");
  let file3 = `v1/image/${file2[file2.length - 1]}`;
  // console.log(`${localStorage.baseURLFile}${file2}`);
  return `${localStorage.baseUrlEpekerja}${file3}`;
};

export default getImage;
