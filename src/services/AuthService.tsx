import ApiService from './ApiService';

export interface RegistrationData {
  username: string,
  password: string,
}

export interface LoginData {
  username: string;
  password: string;
}

export const AuthService = {
  register: async (registrationData: RegistrationData) => {
    try {
      const response = await ApiService.post('/auth/register', undefined, registrationData);
      return response.data; // You might want to adjust this based on your API response
    } catch (error) {
      throw error;
    }
  },

  login: async (loginData: LoginData) => {
    try {
      const response = await ApiService.post('/auth/login', undefined, loginData);
      const {access, refresh } = response.data; // Adjust based on your API response structure

      localStorage.set("access", access);
      localStorage.set("refresh", refresh);
      return access;
    } catch (error) {
      throw error;
    }
  },

  logout: () => {
    try {
      // Remove the token from MMKV
      localStorage.delete('userToken');
    } catch (error) {
      throw error;
    }
  },

  // Function to retrieve the token from MMKV storage 
  getToken: async () => {
    try {
      const token = localStorage.getString('userToken');
      return token;
    } catch (error) {
      throw error;
    }
  },
};

export default AuthService;
