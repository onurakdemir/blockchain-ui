import axios from "axios";

const BASE_URL = 'http://localhost:3001';

export const getTransactions = async () => {
  axios.get('http://localhost:3001/blocks')
  .then(function (response) {
    // handle success
    console.log(response);
    var array = Object.values(response.data);
    console.log(array);
    return array;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
};