import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from 'react';
import { mockUsersDB } from '@/data/users';

type AuthContextType = {
  user: User | null;
  authChecked: boolean;
  login: (email: string, password: string) => {
    success: boolean;
    message?: string;
  };
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);
const STORAGE_KEY = 'college_auth_user';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const raw = sessionStorage.getItem(STORAGE_KEY); 
    if (raw) {
      try {
        const parsed: User = JSON.parse(raw);
        setUser(parsed);
      } catch {
        sessionStorage.removeItem(STORAGE_KEY);
      }
    }
    setAuthChecked(true);
  }, []);

  function login(email: string, password: string) {
    if (!email.trim()) {
      return { success: false, message: 'Заполните поле email' };
    }

    const foundUser = mockUsersDB.find(u => u.email === email);

    if (foundUser) {
      setUser(foundUser);
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(foundUser));
      return { success: true };
    }
    
    return { success: false, message: 'Пользователь с таким email не найден' };
  }
  function logout() {
    setUser(null);
    sessionStorage.removeItem(STORAGE_KEY);
  }

  const value = useMemo(() => ({ user, authChecked, login, logout }), [user, authChecked]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth должен использоваться внутри AuthProvider');
  }
  return context;
}