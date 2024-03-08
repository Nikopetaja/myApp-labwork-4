// src/components/AuthService.js
const AuthService = {
    isAuthenticated: false,
  
    login: () => {
      // Implement your login logic here
      AuthService.isAuthenticated = true;
    },
  
    logout: () => {
      // Implement your logout logic here
      AuthService.isAuthenticated = false;
    },
  };
  
  export default AuthService;
  