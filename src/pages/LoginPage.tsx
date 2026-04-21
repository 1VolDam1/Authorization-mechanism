import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export function LoginPage() {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (user) {
    return <Navigate to="/profile" replace />;
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const result = login(email, password);
    if (result.success) {
      setErrorMessage('');
      navigate('/profile', { replace: true });
      return;
    }
    setErrorMessage(result.message ?? 'Ошибка входа');
  }

  return (
    <div className="form-container">
      <h1>Вход</h1>
      <p style={{ color: '#6c757d', marginBottom: '4px' }}>Тестовые аккаунты:</p>
      <ul style={{ color: '#6c757d', margin: '0 0 24px 20px' }}>
        <li>admin@college.ru / admin123</li>
        <li>teacher@college.ru / teach123</li>
        <li>student@college.ru / study123</li>
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите email"
            required
          />
        </label>
        <label>
          Пароль
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
            required
          />
        </label>
        <button type="submit">Войти</button>
        {errorMessage && (
          <p className="error-message">{errorMessage}</p>
        )}
      </form>
    </div>
  );
}