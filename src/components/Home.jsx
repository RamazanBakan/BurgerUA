import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>OtoPark Yönetim Sistemi</h1>
          <p>
            Modern ve güvenilir otopark yönetim çözümümüz ile araç park işlemleri, rezervasyonlar, 
            abonelikler ve tüm otopark ihtiyaçlarınızı kolayca yönetin.
          </p>
          <div className="hero-buttons">
            {isAuthenticated ? (
              <Link to="/panel" className="primary-button">Kontrol Paneli</Link>
            ) : (
              <>
                <Link to="/giris" className="primary-button">Giriş Yap</Link>
                <Link to="/kayit" className="secondary-button">Kayıt Ol</Link>
              </>
            )}
          </div>
        </div>
        <div className="hero-image">
          <div className="placeholder-image">
            <i className="fas fa-parking fa-5x"></i>
            <p>OtoPark Yönetim Sistemi</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Özelliklerimiz</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-car"></i>
            </div>
            <h3>Araç Park Takibi</h3>
            <p>Araç giriş-çıkış işlemlerini anlık takip edin, otopark doluluk oranını kontrol edin.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <h3>Rezervasyon Sistemi</h3>
            <p>Park yerinizi önceden ayırtın, zamanınızı ve enerjinizi verimli kullanın.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-id-card"></i>
            </div>
            <h3>Abonelik Planları</h3>
            <p>Aylık ve yıllık aboneliklerle düzenli kullanıcılara özel avantajlar sunuyoruz.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3>Mobil Uyumlu</h3>
            <p>İstediğiniz cihazdan erişim sağlayın, park işlemlerinizi her yerden yönetin.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <h2>Fiyatlandırma</h2>
        <div className="pricing-cards">
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Standart Park</h3>
              <div className="price">₺20<span>/saat</span></div>
            </div>
            <ul className="pricing-features">
              <li>24 saat güvenlik</li>
              <li>Kolay giriş-çıkış</li>
              <li>Online ödeme</li>
              <li>Park geçmişi</li>
            </ul>
            <Link to="/fiyatlar" className="pricing-button">Detaylı Bilgi</Link>
          </div>

          <div className="pricing-card featured">
            <div className="pricing-badge">En Popüler</div>
            <div className="pricing-header">
              <h3>Haftalık Abonelik</h3>
              <div className="price">₺150<span>/hafta</span></div>
            </div>
            <ul className="pricing-features">
              <li>Sınırsız giriş-çıkış</li>
              <li>Rezervasyon önceliği</li>
              <li>%20 indirim</li>
              <li>Özel park alanı</li>
            </ul>
            <Link to="/abonelikler" className="pricing-button">Hemen Başla</Link>
          </div>

          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Aylık Abonelik</h3>
              <div className="price">₺500<span>/ay</span></div>
            </div>
            <ul className="pricing-features">
              <li>Sınırsız giriş-çıkış</li>
              <li>Rezervasyon önceliği</li>
              <li>2 araç kaydı</li>
              <li>VIP hizmetler</li>
            </ul>
            <Link to="/abonelikler" className="pricing-button">Hemen Başla</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>Müşterilerimiz Ne Diyor?</h2>
        <div className="testimonials-slider">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"OtoPark Yönetim Sistemi ile park sorunlarım sona erdi. Artık önceden rezervasyon yapabiliyorum ve zaman kaybı yaşamıyorum."</p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">
                <i className="fas fa-user-circle"></i>
              </div>
              <div className="testimonial-author-info">
                <h4>Ahmet Yılmaz</h4>
                <p>Bireysel Kullanıcı</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"Şirketimizin araç filosunu yönetmek artık çok daha kolay. Kurumsal abonelik planları ile tüm araçlarımız için uygun çözümler bulduk."</p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">
                <i className="fas fa-user-circle"></i>
              </div>
              <div className="testimonial-author-info">
                <h4>Ayşe Kaya</h4>
                <p>Filo Yöneticisi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Hemen Başlayın</h2>
          <p>Otopark yönetiminde yeni bir deneyim için şimdi kayıt olun.</p>
          <Link to="/kayit" className="cta-button">Ücretsiz Kayıt Ol</Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 