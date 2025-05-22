import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/giris');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <i className="fas fa-parking"></i>
          <span>OtoPark</span>
        </Link>

        <div className={`menu-icon ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </div>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
              Ana Sayfa
            </Link>
          </li>
          
          {currentUser ? (
            <>
              <li className="nav-item">
                <Link to="/panel" className="nav-link" onClick={() => setMenuOpen(false)}>
                  Kontrol Paneli
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/araclar" className="nav-link" onClick={() => setMenuOpen(false)}>
                  Araçlarım
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/rezervasyonlar" className="nav-link" onClick={() => setMenuOpen(false)}>
                  Rezervasyonlarım
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/abonelikler" className="nav-link" onClick={() => setMenuOpen(false)}>
                  Aboneliklerim
                </Link>
              </li>
              <li className="nav-item">
                <button onClick={handleLogout} className="nav-button">
                  Çıkış Yap
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/giris" className="nav-link" onClick={() => setMenuOpen(false)}>
                  Giriş Yap
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/kayit" className="nav-button" onClick={() => setMenuOpen(false)}>
                  Kayıt Ol
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 