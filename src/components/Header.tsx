import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header>
      <nav>
        <Link to="/">Главная</Link>
        {user && (
          <>
            <Link to="/profile">Профиль</Link>
            <Link to="/courses">Курсы</Link>
            {['teacher', 'admin'].includes(user.role) && (
              <Link to="/courses/manage">Управление курсами</Link>
            )}
            {user.role === 'admin' && (
              <Link to="/admin">Админ-панель</Link>
            )}
          </>
        )}
      </nav>
      <div className="user-info">
        {user ? (
          <>
            <span>{user.name} <strong>({user.role})</strong></span>
            <button onClick={handleLogout} className="logout-button">Выйти</button>
          </>
        ) : (
          <Link to="/login">Войти</Link>
        )}
      </div>
    </header>
  );
}