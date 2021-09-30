import { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from 'pages/api/auth/firebase';

export const AuthContext = createContext([]);

interface Props {
  children: React.ReactNode;
};


export const AuthProvider = ({ children }: Props) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={[user, setUser]}>
      {children}
    </AuthContext.Provider>
  )
}