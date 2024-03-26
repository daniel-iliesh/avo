import axios from 'axios';

// Create an instance of axios
const instance = axios.create({
  baseURL: 'http://127.0.0.1:9000', // Replace with your API base URL
});

// Function that will be called to refresh authorization
const refreshToken = async () => {
  const refresh_token = localStorage.getItem("refresh"); // Replace with your refresh_token
  // Make a request to the refresh endpoint (this should return a new token)
  if (!refresh_token) {
    // Handle no refresh token case
    // e.g., redirect to login page
    throw new Error('No refresh token, please login again');
  }
  const response = await axios.post('http://127.0.0.1:9000/auth/login/refresh', {
    refresh_token 
  });

  console.log("new_token", response.data);
  
  return response.data.token;
};

// Add a request interceptor
instance.interceptors.request.use(async (config) => {
  // Add authorization header to the request
  const access_token = localStorage.getItem("access"); // Replace with your access token 
  config.headers.Authorization = `Bearer ${access_token}`; // Replace with your access token

  return config;
});

// Add a response interceptor
instance.interceptors.response.use(undefined, async (error) => {
  if (error.config && error.response && error.response.status === 401) {
    // If 401 by expired access token, we do a refresh
    const newToken = await refreshToken();

    // And retry the request
    error.config.headers.Authorization = `Bearer ${newToken}`;
    return instance.request(error.config);
  }

  return Promise.reject(error);
});

export default instance;