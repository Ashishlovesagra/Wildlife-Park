import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Common base URL
});

// request interceptor
API.interceptors.request.use(
  (config) => {
    // Get the token from localStorage
    const token = localStorage.getItem('token'); // store token in localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config; 
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptor
API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors globally
    const { response } = error;
    if (response) {
      if (response.status === 401) {
        console.error('Unauthorized! Please log in again.');
        // localStorage.removeItem('token');                   // Remove token if needed
      } else if (response.status === 403) {
        console.error('You do not have permission to access this resource.');
      }
    } else {
      console.error('Network error or no response from server.');
    }
    return Promise.reject(error);
  }
);

export default API;
