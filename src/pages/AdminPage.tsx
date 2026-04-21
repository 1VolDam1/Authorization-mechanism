import { useState } from 'react';
import type { User, UserRole } from '@/auth/AuthContext';
import styles from './AdminPage.module.css';

const initialUsers: User[] = [
  { id: 1, name: 'Главный Администратор', email: 'admin@college.ru', role: 'admin' },
  { id: 2, name: 'Анна Петровна', email: 'teacher@college.ru', role: 'teacher' },
  { id: 3, name: 'Иван Иванов', email: 'student@college.ru', role: 'student', group: 'ИС-23' },
  { id: 4, name: 'Мария Сидорова', email: 'student2@college.ru', role: 'student', group: 'ПМ-21' },
  { id: 5, name: 'Петр Васильев', email: 'teacher2@college.ru', role: 'teacher' },
];

const roles: UserRole[] = ['student', 'teacher', 'admin'];

export function AdminPage() {
  const [users, setUsers] = useState(initialUsers);

  const handleRoleChange = (userId: number, newRole: UserRole) => {
    setUsers(currentUsers =>
      currentUsers.map(u => (u.id === userId ? { ...u, role: newRole } : u))
    );
  };

  const handleDelete = (userId: number) => {
    if (userId === 1) {
      alert('Нельзя удалить главного администратора!');
      return;
    }
    if (window.confirm('Вы уверены, что хотите удалить этого пользователя?')) {
      setUsers(currentUsers => currentUsers.filter(u => u.id !== userId));
    }
  };

  return (
    <div>
      <h1>Административная панель</h1>
      <p>Управление пользователями системы.</p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>ID</th>
            <th className={styles.th}>Имя</th>
            <th className={styles.th}>Email</th>
            <th className={styles.th}>Роль</th>
            <th className={styles.th}>Действия</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className={styles.td}>{user.id}</td>
              <td className={styles.td}>{user.name}</td>
              <td className={styles.td}>{user.email}</td>
              <td className={styles.td}>
                <select
                  className={styles.select}
                  value={user.role}
                  onChange={e => handleRoleChange(user.id, e.target.value as UserRole)}
                  disabled={user.id === 1}
                >
                  {roles.map(role => <option key={role} value={role}>{role}</option>)}
                </select>
              </td>
              <td className={styles.td}>
                <div className={styles.actions}>
                  <button
                    className={styles.deleteButton}
                    onClick={() => handleDelete(user.id)}
                    disabled={user.id === 1}
                  >
                    Удалить
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}