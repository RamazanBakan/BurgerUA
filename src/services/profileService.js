import api from './api';

export const profileService = {
  // Kullanıcı profil bilgilerini getirir
  getProfile: async () => {
    return await api.get('/api/Profile');
  },
  
  // Kontrol paneli için gerekli verileri getirir
  getDashboard: async () => {
    return await api.get('/api/Profile/dashboard');
  },
  
  // Kullanıcı araçlarını getirir
  getVehicles: async () => {
    return await api.get('/api/Profile/vehicles');
  },
  
  // Kullanıcı aboneliklerini getirir
  getSubscriptions: async () => {
    return await api.get('/api/Profile/subscriptions');
  },
  
  // Kullanıcının park geçmişini getirir
  getParkingHistory: async (pageSize = 10, pageNumber = 1) => {
    return await api.get(`/api/Profile/parking-history?pageSize=${pageSize}&pageNumber=${pageNumber}`);
  },
  
  // Kullanıcı rezervasyonlarını getirir
  getReservations: async (pageSize = 10, pageNumber = 1) => {
    return await api.get(`/api/Profile/reservations?pageSize=${pageSize}&pageNumber=${pageNumber}`);
  },
  
  // Profil bilgilerini günceller
  updateProfile: async (profileData) => {
    return await api.put('/api/Profile', profileData);
  }
};

export default profileService; 