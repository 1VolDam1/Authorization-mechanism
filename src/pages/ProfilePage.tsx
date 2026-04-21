import { useAuth } from '../auth/AuthContext';

export function ProfilePage() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div style={{ padding: '0 16px' }}>
      <h1>Профиль</h1>
      <table style={{ borderCollapse: 'collapse', marginTop: '16px' }}>
        <tbody>
          <tr><td>ID</td><td>{user.id}</td></tr>
          <tr><td>Имя</td><td>{user.name}</td></tr>
          <tr><td>Email</td><td>{user.email}</td></tr>
          <tr><td>Роль</td><td>{user.role}</td></tr>
          {user.group && (
            <tr><td>Группа</td><td>{user.group}</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}