import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

// Function to handle login API request
export const loginUser = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response.data;
};

// Function to fetch logs from the backend
export const fetchLogs = async () => {
  const response = await axios.get(`${API_URL}/logs`);
  return response.data;
};
