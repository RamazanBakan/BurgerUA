import api from './api';

export const reservationService = {
  // Kullanıcının rezervasyonlarını getirir
  getMyReservations: async () => {
    return await api.get('/api/Reservation/my-reservations');
  },
  
  // Tüm rezervasyonları getirir (Admin)
  getAllReservations: async () => {
    return await api.get('/api/Reservation');
  },
  
  // Yeni rezervasyon oluşturur
  createReservation: async (reservationData) => {
    return await api.post('/api/Reservation', reservationData);
  },
  
  // Rezervasyon durumunu günceller (Admin)
  updateReservationStatus: async (reservationData) => {
    return await api.put('/api/Reservation/status', reservationData);
  },
  
  // Rezervasyon ödemesi yapar
  payReservation: async (reservationId) => {
    return await api.post(`/api/Reservation/${reservationId}/pay`);
  },
  
  // Rezervasyon iptal eder
  cancelReservation: async (reservationId) => {
    return await api.post(`/api/Reservation/${reservationId}/cancel`);
  }
};

export default reservationService; 