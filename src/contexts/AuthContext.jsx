import { createContext, useState, useEffect, useContext } from 'react';
import { authService } from '../services/authService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Sayfa yüklendiğinde localStorage'dan kullanıcı bilgisini alma
    const loadUser = () => {
      const user = authService.getCurrentUser();
      setCurrentUser(user);
      setLoading(false);
    };

    loadUser();
  }, []);

  // Giriş fonksiyonu
  const login = async (email, password) => {
    setLoading(true);
    try {
      const data = await authService.login(email, password);
      setCurrentUser(data.user);
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  // Kayıt fonksiyonu
  const register = async (userData) => {
    setLoading(true);
    try {
      const data = await authService.register(userData);
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  // Çıkış fonksiyonu
  const logout = () => {
    authService.logout();
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    isAuthenticated: !!currentUser,
    loading,
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext; 