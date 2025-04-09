import axios from "axios";

// rotas para o back end 
const api = axios.create({
  baseURL: "http://localhost:3000",
});

// vereficando o token existe e fazendo a autenticação
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
