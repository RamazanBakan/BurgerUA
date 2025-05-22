import api from './api';

export const vehicleService = {
  // Kullanıcının araçlarını listeler
  getVehicles: async () => {
    return await api.get('/api/Vehicle');
  },
  
  // Araç detayını getirir
  getVehicle: async (id) => {
    return await api.get(`/api/Vehicle/${id}`);
  },
  
  // Yeni araç ekler
  addVehicle: async (vehicleData) => {
    return await api.post('/api/Vehicle', vehicleData);
  },
  
  // Araç bilgilerini günceller
  updateVehicle: async (id, vehicleData) => {
    return await api.put(`/api/Vehicle/${id}`, vehicleData);
  },
  
  // Araç kaydını siler
  deleteVehicle: async (id) => {
    return await api.delete(`/api/Vehicle/${id}`);
  }
};

export default vehicleService; 