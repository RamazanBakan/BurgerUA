import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { profileService } from '../../services';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await profileService.getDashboard();
        setDashboardData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Dashboard data fetch error:', error);
        setError('Kontrol paneli bilgileri yüklenemedi.');
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return <div className="loading">Yükleniyor...</div>;
  }

  if (error) {
    return <div className="error-container">{error}</div>;
  }

  return (
    <div className="dashboard-container">
      <h1>Hoş Geldiniz, {dashboardData?.profile?.fullName || 'Kullanıcı'}</h1>

      {/* Dashboard Summary */}
      <div className="dashboard-summary">
        <div className="summary-card">
          <div className="summary-icon vehicle-icon">
            <i className="fas fa-car"></i>
          </div>
          <div className="summary-info">
            <h3>Araçlarım</h3>
            <p className="summary-count">{dashboardData?.vehicles?.length || 0}</p>
            <Link to="/araclar" className="summary-link">Araçları Yönet</Link>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon subscription-icon">
            <i className="fas fa-id-card"></i>
          </div>
          <div className="summary-info">
            <h3>Aktif Abonelikler</h3>
            <p className="summary-count">{dashboardData?.activeSubscriptions?.length || 0}</p>
            <Link to="/abonelikler" className="summary-link">Abonelikleri Yönet</Link>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon reservation-icon">
            <i className="fas fa-calendar-alt"></i>
          </div>
          <div className="summary-info">
            <h3>Aktif Rezervasyonlar</h3>
            <p className="summary-count">{dashboardData?.activeReservations?.length || 0}</p>
            <Link to="/rezervasyonlar" className="summary-link">Rezervasyonları Yönet</Link>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="dashboard-actions">
        <h2>Hızlı İşlemler</h2>
        <div className="actions-grid">
          <Link to="/park-et" className="action-card">
            <div className="action-icon">
              <i className="fas fa-parking"></i>
            </div>
            <h3>Park Et</h3>
            <p>Aracınızı park etmek için kullanın</p>
          </Link>

          <Link to="/park-cikis" className="action-card">
            <div className="action-icon">
              <i className="fas fa-sign-out-alt"></i>
            </div>
            <h3>Park Çıkışı</h3>
            <p>Park alanından çıkış yapmak için kullanın</p>
          </Link>

          <Link to="/rezervasyon-olustur" className="action-card">
            <div className="action-icon">
              <i className="fas fa-calendar-plus"></i>
            </div>
            <h3>Rezervasyon Oluştur</h3>
            <p>Yeni park yeri rezervasyonu oluşturun</p>
          </Link>

          <Link to="/abonelik-al" className="action-card">
            <div className="action-icon">
              <i className="fas fa-ticket-alt"></i>
            </div>
            <h3>Abonelik Al</h3>
            <p>Yeni abonelik planı satın alın</p>
          </Link>
        </div>
      </div>

      {/* Recent Parking Sessions */}
      {dashboardData?.recentParkingSessions?.length > 0 && (
        <div className="dashboard-recent">
          <h2>Son Park İşlemleri</h2>
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Plaka</th>
                  <th>Park Yeri</th>
                  <th>Giriş Zamanı</th>
                  <th>Çıkış Zamanı</th>
                  <th>Süre (dk)</th>
                  <th>Ücret</th>
                  <th>Durum</th>
                </tr>
              </thead>
              <tbody>
                {dashboardData.recentParkingSessions.map((session) => (
                  <tr key={session.id}>
                    <td>{session.plateNumber}</td>
                    <td>{session.spotNumber}</td>
                    <td>{new Date(session.entryTime).toLocaleString('tr-TR')}</td>
                    <td>
                      {session.exitTime 
                        ? new Date(session.exitTime).toLocaleString('tr-TR') 
                        : "-"}
                    </td>
                    <td>{session.durationMinutes || "-"}</td>
                    <td>{session.totalFee ? `₺${session.totalFee}` : "-"}</td>
                    <td>
                      <span className={`status-badge ${session.isPaid ? 'success' : 'warning'}`}>
                        {session.isPaid ? 'Ödendi' : 'Ödenmedi'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link to="/park-gecmisi" className="view-all-link">Tüm Park Geçmişini Görüntüle</Link>
        </div>
      )}

      {/* Quick Park Status */}
      {dashboardData?.vehicles?.length > 0 && (
        <div className="quick-park-status">
          <h2>Araçlarımın Durumu</h2>
          <div className="vehicle-status-cards">
            {dashboardData.vehicles.map((vehicle) => {
              const activeParking = dashboardData.recentParkingSessions?.find(
                session => session.plateNumber === vehicle.plateNumber && !session.exitTime
              );
              
              const activeSubscription = dashboardData.activeSubscriptions?.find(
                sub => sub.vehicleId === vehicle.id
              );

              return (
                <div className="vehicle-status-card" key={vehicle.id}>
                  <div className="vehicle-info">
                    <h3>{vehicle.plateNumber}</h3>
                    <p>{vehicle.brand} {vehicle.model} ({vehicle.year})</p>
                  </div>
                  
                  <div className="vehicle-status">
                    <div className="status-item">
                      <span className="status-label">Park Durumu:</span>
                      <span className={`status-value ${activeParking ? 'parked' : 'not-parked'}`}>
                        {activeParking ? 'Park Halinde' : 'Park Halinde Değil'}
                      </span>
                    </div>
                    
                    {activeParking && (
                      <div className="status-item">
                        <span className="status-label">Park Yeri:</span>
                        <span className="status-value">{activeParking.spotNumber}</span>
                      </div>
                    )}
                    
                    <div className="status-item">
                      <span className="status-label">Abonelik:</span>
                      <span className={`status-value ${activeSubscription ? 'active' : 'inactive'}`}>
                        {activeSubscription 
                          ? `${activeSubscription.planName} (${new Date(activeSubscription.endDate).toLocaleDateString('tr-TR')} tarihine kadar)`
                          : 'Abonelik Yok'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="vehicle-actions">
                    {activeParking ? (
                      <Link to={`/park-cikis?plate=${vehicle.plateNumber}`} className="vehicle-action exit">
                        <i className="fas fa-sign-out-alt"></i> Çıkış Yap
                      </Link>
                    ) : (
                      <Link to={`/park-et?plate=${vehicle.plateNumber}`} className="vehicle-action park">
                        <i className="fas fa-parking"></i> Park Et
                      </Link>
                    )}
                    
                    {!activeSubscription && (
                      <Link to={`/abonelik-al?vehicleId=${vehicle.id}`} className="vehicle-action subscribe">
                        <i className="fas fa-ticket-alt"></i> Abonelik Al
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard; 