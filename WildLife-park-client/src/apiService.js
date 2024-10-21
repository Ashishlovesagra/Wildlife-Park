import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/users'; // Base URL 

export const registerUser = (userData) => {
  return axios.post(`${API_BASE_URL}/register`, userData);
};

export const loginUser = (loginData) => {
  return axios.post(`${API_BASE_URL}/login`, loginData);
};

export const forgotPassword = (email) => {
  return axios.post(`${API_BASE_URL}/forgot-password`, { email });
};

export const resetPassword = (token, password) => {
  return axios.post(`${API_BASE_URL}/reset-password`, { token, password });
};

export const logoutUser = () => {
  return axios.post(`${API_BASE_URL}/logout`);
};

export const fetchAllUsers = () => {
  return axios.get(`${API_BASE_URL}/all-users`);
};
