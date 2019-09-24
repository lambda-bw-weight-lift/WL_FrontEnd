import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: 'https://weight-lifting-journal-bw.herokuapp.com',
    headers: {
      Token: token,
    }
  });
};

export default axiosWithAuth;
