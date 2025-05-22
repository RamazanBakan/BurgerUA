import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>OtoPark Yönetim Sistemi</h3>
          <p>Modern ve güvenilir otopark yönetim çözümünüz. Araç park takibi, rezervasyon ve abonelik işlemlerinizi kolayca yönetin.</p>
        </div>

        <div className="footer-section">
          <h3>Hızlı Bağlantılar</h3>
          <ul>
            <li><Link to="/">Ana Sayfa</Link></li>
            <li><Link to="/hakkimizda">Hakkımızda</Link></li>
            <li><Link to="/iletisim">İletişim</Link></li>
            <li><Link to="/hizmetler">Hizmetlerimiz</Link></li>
            <li><Link to="/fiyatlar">Fiyatlarımız</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>İletişim</h3>
          <ul className="contact-info">
            <li><i className="fas fa-map-marker-alt"></i> Teknoloji Cd. No:1, Yazılım Mh. İstanbul</li>
            <li><i className="fas fa-phone"></i> +90 (212) 555-5555</li>
            <li><i className="fas fa-envelope"></i> info@otopark.com</li>
          </ul>

          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} OtoPark Yönetim Sistemi. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer; 