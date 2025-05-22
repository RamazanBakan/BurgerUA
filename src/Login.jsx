import { useState } from 'react'

function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Basit doğrulama - gerçek uygulamada API'ye istek atılacaktır
    if (username === 'admin' && password === 'password') {
      onLogin()
    } else {
      setError('Kullanıcı adı veya şifre hatalı')
    }
  }

  return (
    <div className="login-container">
      <h2>Giriş Yap</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Kullanıcı Adı</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Şifre</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Giriş Yap</button>
      </form>
    </div>
  )
}

export default Login
