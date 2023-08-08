// deployed api
const devUrl = import.meta.env.DEVELOPMENT_API_BASE_URL;
const prodUrl = import.meta.env.PRODUCTION_API_BASE_URL;
const PRODUCTION_API_BASE_URL = "https://chefcompass-api.onrender.com";
const DEVELOPMENT_API_BASE_URL = "http://localhost:3001";

// const API_BASE_URL = process.env.NODE_ENV === `production` ? prodUrl : devUrl;
const API_BASE_URL = "https://chefcompass-api.onrender.com";
console.log(API_BASE_URL);

export default API_BASE_URL;
