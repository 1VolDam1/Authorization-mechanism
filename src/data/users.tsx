import type { User, UserRole } from '@/auth/AuthContext';

export const mockUsersDB: User[] = [
  { id: 1, name: 'Главный Администратор', email: 'admin@college.ru', role: 'admin' },
  { id: 2, name: 'Анна Петровна', email: 'teacher@college.ru', role: 'teacher' },
  { id: 3, name: 'Иван Иванов', email: 'student@college.ru', role: 'student', group: 'ИС-23' },
  { id: 4, name: 'Мария Сидорова', email: 'student2@college.ru', role: 'student', group: 'ПМ-21' },
  { id: 5, name: 'Петр Васильев', email: 'teacher2@college.ru', role: 'teacher' },
];

export const roles: UserRole[] = ['student', 'teacher', 'admin'];