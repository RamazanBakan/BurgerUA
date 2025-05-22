import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const ProtectedRoute = ({ requiredRoles = [] }) => {
  const { currentUser, loading } = useAuth();

  // Sayfa yüklenirken
  if (loading) {
    return <div className="loading">Yükleniyor...</div>;
  }

  // Kullanıcı giriş yapmamış ise
  if (!currentUser) {
    return <Navigate to="/giris" />;
  }

  // Rol kontrolü yapılmıyorsa veya kullanıcının rolü uygun ise
  if (requiredRoles.length === 0 || requiredRoles.includes(currentUser.role)) {
    return <Outlet />;
  }

  // Kullanıcının yeterli rolü yoksa
  return <Navigate to="/yetkisiz" />;
};

export default ProtectedRoute; 