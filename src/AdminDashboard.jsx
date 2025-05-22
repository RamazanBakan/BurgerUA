import { useState } from 'react'

function AdminDashboard({ onLogout }) {
  const [parkingSpaces, setParkingSpaces] = useState([
    { id: 1, occupied: false, vehicle: null },
    { id: 2, occupied: true, vehicle: 'ABC123' },
    { id: 3, occupied: false, vehicle: null },
    { id: 4, occupied: true, vehicle: 'XYZ789' },
    { id: 5, occupied: false, vehicle: null }
  ])

  const handleToggleSpace = (id) => {
    setParkingSpaces(parkingSpaces.map(space => 
      space.id === id 
        ? { ...space, occupied: !space.occupied, vehicle: !space.occupied ? prompt('Araç plakasını girin:') : null } 
        : space
    ))
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Otopark Yönetim Sistemi</h1>
        <button onClick={onLogout} className="logout-button">Çıkış Yap</button>
      </header>
      
      <div className="dashboard-stats">
        <div className="stat-box">
          <h3>Toplam Park Yeri</h3>
          <p>{parkingSpaces.length}</p>
        </div>
        <div className="stat-box">
          <h3>Dolu Park Yeri</h3>
          <p>{parkingSpaces.filter(space => space.occupied).length}</p>
        </div>
        <div className="stat-box">
          <h3>Boş Park Yeri</h3>
          <p>{parkingSpaces.filter(space => !space.occupied).length}</p>
        </div>
      </div>
      
      <div className="parking-grid">
        {parkingSpaces.map(space => (
          <div 
            key={space.id}
            className={`parking-space ${space.occupied ? 'occupied' : 'vacant'}`}
            onClick={() => handleToggleSpace(space.id)}
          >
            <div className="space-id">Park Yeri {space.id}</div>
            {space.occupied && <div className="vehicle-info">{space.vehicle}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminDashboard 