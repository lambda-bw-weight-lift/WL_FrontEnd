// import axios from "axios";

// const axiosWithAuth = () => {
//   const token = localStorage.getItem("token");
//   return axios.create({
//     baseURL: 'https://lifting-weights-java.herokuapp.com/',
//     headers: {
//       Token: token,
//     }
//   });
// };

// export default axiosWithAuth;

import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;