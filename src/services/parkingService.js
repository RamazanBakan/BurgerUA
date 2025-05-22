import api from './api';

export const parkingService = {
  // Park oturumu başlatır
  startSession: async (plateNumber, spotNumber) => {
    return await api.post('/api/Parking/start-session', { plateNumber, spotNumber });
  },
  
  // Park oturumunu sonlandırır
  endSession: async (plateNumber) => {
    return await api.post('/api/Parking/end-session', { plateNumber });
  },
  
  // Plaka numarasına göre park oturumunu sorgular ve bitirir
  endSessionByPlate: async (plateNumber) => {
    return await api.get(`/api/Parking/end-session/${plateNumber}`);
  },
  
  // Kullanıcının mevcut park durumunu sorgular
  getCurrentParkingStatus: async (plateNumber) => {
    return await api.get(`/api/Parking/status/${plateNumber}`);
  },
  
  // Müsait park yerlerini listeler
  getAvailableParkingSpots: async () => {
    return await api.get('/api/ParkingSpot/available');
  },
  
  // Park geçmişini getirir
  getParkingHistory: async (pageSize = 10, pageNumber = 1) => {
    return await api.get(`/api/Parking/history?pageSize=${pageSize}&pageNumber=${pageNumber}`);
  }
};

export default parkingService; 