// rbk 192.168.151.34
// home ; 192.168.151.34
//cap : 192.168.151.34
// get all request : http://192.168.151.34:3000/request/getAll
// get all user : http://192.168.151.34:3000/users/getAllUsers

// import axios from "axios";

// export const getAllDriver = async () => {
//   return axios
//     .get("http://192.168.151.34/drivers/getAll")
//     .then((res) => {
//       return res.data;
//       console.log(res);
//     })
//     .catch((err) => {
//       console.error(err);
//       throw err;
//     });
// };

const localH = `192.168.151.34 `;
module.exports = localH;
