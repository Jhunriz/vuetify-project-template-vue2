export default {
  // API Configuration
  api: {
    baseUrl: process.env.VUE_APP_API_BASE_URL || 'http://localhost:8000',
    timeout: parseInt(process.env.VUE_APP_API_TIMEOUT) || 10000,
    endpoints: {
      // Auth endpoints
      login: '/',
      logout: '/logout',
      register: '/register',
      me: '/me',
      refresh: '/refresh-token',
      
      // Add more endpoints as needed
    //   users: '/users',
    //   products: '/products',
    //   orders: '/orders'
    }
  },
  
  // Authentication
  auth: {
    tokenKey: 'token',
    userKey: 'user',
    tokenPrefix: 'Bearer'
  },
  
  // App Information
//   app: {
//     name: process.env.VUE_APP_NAME || 'My App',
//     version: process.env.VUE_APP_VERSION || '1.0.0',
//     environment: process.env.NODE_ENV
//   },
  
  // Features & Settings
//   features: {
//     enableLogs: process.env.VUE_APP_ENABLE_LOGS === 'true',
//     enableDebug: process.env.NODE_ENV === 'development'
//   }
}