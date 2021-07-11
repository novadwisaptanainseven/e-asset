import axios from "axios";

const baseURL = "http://127.0.0.1:8000/api/";
const baseURLFile = "http://localhost:5500/file/";

// API E-Pekerja
const baseUrlEpekerja = "http://localhost/e-pekerja-api/api/";

localStorage.baseURL = baseURL;
localStorage.baseURLFile = baseURLFile;
localStorage.baseUrlEpekerja = baseUrlEpekerja;

let headers = {};

console.log("Base URL: ", baseURL);

if (localStorage.token) {
  headers.Authorization = `Bearer ${localStorage.token}`;
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
      localStorage.clear();
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
