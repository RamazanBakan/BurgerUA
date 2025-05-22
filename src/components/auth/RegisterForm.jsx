import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    organizationNumber: '',
    isOrganization: false
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Şifre kontrolü
    if (formData.password !== formData.confirmPassword) {
      return setError('Şifreler eşleşmiyor.');
    }
    
    setLoading(true);
    
    try {
      // Kayıt için gönderilecek veriyi hazırla
      const userData = {
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber,
        organizationNumber: formData.isOrganization ? formData.organizationNumber : null
      };
      
      await register(userData);
      navigate('/giris');
    } catch (error) {
      setError('Kayıt oluşturulamadı. Lütfen bilgilerinizi kontrol edin.');
      console.error('Registration error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-form-container">
      <div className="auth-form">
        <h2>Hesap Oluştur</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">Ad</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="lastName">Soyad</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="email">E-posta</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phoneNumber">Telefon Numarası</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              placeholder="05XX XXX XX XX"
            />
          </div>
          
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="isOrganization"
              name="isOrganization"
              checked={formData.isOrganization}
              onChange={handleChange}
            />
            <label htmlFor="isOrganization">Kurumsal Müşteriyim</label>
          </div>
          
          {formData.isOrganization && (
            <div className="form-group">
              <label htmlFor="organizationNumber">Organizasyon Numarası</label>
              <input
                type="text"
                id="organizationNumber"
                name="organizationNumber"
                value={formData.organizationNumber}
                onChange={handleChange}
                required={formData.isOrganization}
              />
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="password">Şifre</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete="new-password"
              minLength="8"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="confirmPassword">Şifre Tekrar</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              autoComplete="new-password"
              minLength="8"
            />
          </div>
          
          <button 
            type="submit" 
            className="submit-button" 
            disabled={loading}
          >
            {loading ? 'Kaydediliyor...' : 'Kayıt Ol'}
          </button>
        </form>
        
        <div className="auth-links">
          <span>Zaten hesabınız var mı?</span>
          <Link to="/giris">Giriş Yap</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm; 