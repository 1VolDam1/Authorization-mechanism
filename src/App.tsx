import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { ProtectedRoute } from './auth/ProtectedRoute';

import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { ProfilePage } from './pages/ProfilePage';
import { CoursesPage } from './pages/CoursesPage';
import { ManageCoursesPage } from './pages/ManageCoursesPage';
import { AdminPage } from './pages/AdminPage';

function NotFoundPage() {
  return <div style={{ padding: '0 16px' }}><h1>404: Страница не найдена</h1></div>;
}

export default function App() {
  return (
    <div>
      <Header />
      <main style={{ paddingTop: '16px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          <Route path="/courses" element={<ProtectedRoute><CoursesPage /></ProtectedRoute>} />
          <Route
            path="/courses/manage"
            element={
              <ProtectedRoute allowedRoles={['teacher', 'admin']}>
                <ManageCoursesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}