import axios from "axios";

const baseURL = "http://localhost:5500/api/v1/";
const baseURLFile = "http://localhost:5500/file/";

// API E-Pekerja
const baseUrlEpekerja = "http://127.0.0.1:8000/api/";

sessionStorage.baseURL = baseURL;
sessionStorage.baseURLFile = baseURLFile;
sessionStorage.baseUrlEpekerja = baseUrlEpekerja;

let headers = {};

console.log("Base URL: ", baseURL);

if (sessionStorage.token) {
  headers.Authorization = `Bearer ${sessionStorage.token}`;
}

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return new Promise((resolve, reject) => {
      resolve(response);
    });
  },
  (error) => {
    if (!error.response) {
      return new Promise((resolve, reject) => {});
    }
    if (error.response.status === 403) {
      sessionStorage.removeItem("token");
      console.log("Error Status 403 Executed");
      window.location.href = "/easset/auth/login";
      return new Promise((resolve, reject) => {
        reject(error);
      });
    } else {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }
);

export default axiosInstance;