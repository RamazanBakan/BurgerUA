import api from './api';

export const subscriptionService = {
  // Abonelik planlarını listeler
  getSubscriptionPlans: async () => {
    return await api.get('/api/Subscription/plans');
  },
  
  // Kullanıcının aboneliklerini listeler
  getSubscriptions: async () => {
    return await api.get('/api/Subscription');
  },
  
  // Aktif abonelikleri listeler
  getActiveSubscriptions: async () => {
    return await api.get('/api/Subscription/active');
  },
  
  // Tüm abonelikleri listeler (Admin)
  getAllSubscriptions: async () => {
    return await api.get('/api/Subscription/all');
  },
  
  // Yeni abonelik oluşturur
  createSubscription: async (subscriptionData) => {
    return await api.post('/api/Subscription', subscriptionData);
  },
  
  // Abonelik yeniler
  renewSubscription: async (subscriptionId) => {
    return await api.post(`/api/Subscription/renew/${subscriptionId}`);
  },
  
  // Abonelik iptal eder
  cancelSubscription: async (subscriptionId) => {
    return await api.post(`/api/Subscription/cancel/${subscriptionId}`);
  }
};

export default subscriptionService; 