import axios from "axios";

const BASE_URL = 'http://localhost:3001';

export const getTransactions = async () => {
  return await axios.get("http://localhost:3001/blocks");
};