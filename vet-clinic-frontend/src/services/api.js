import axios from 'axios';

const API_URL = 'http://localhost:3001';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data),
};

export const petsService = {
  getAll: () => api.get('/pets'),
  getByUser: (userId) => api.get(`/pets/user/${userId}`),
  create: (data) => api.post('/pets', data),
  update: (id, data) => api.put(`/pets/${id}`, data),
  delete: (id) => api.delete(`/pets/${id}`),
};

export const appointmentsService = {
  getAll: () => api.get('/appointments'),
  getByUser: (userId) => api.get(`/appointments/user/${userId}`),
  create: (data) => api.post('/appointments', data),
  update: (id, data) => api.put(`/appointments/${id}`, data),
  delete: (id) => api.delete(`/appointments/${id}`),
};

export const doctorsService = {
  getAll: () => api.get('/doctors'),
};

export const servicesService = {
  getAll: () => api.get('/services'),
};

export default api;