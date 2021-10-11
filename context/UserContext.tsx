import { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from 'pages/api/auth/firebase';

export const UserContext = createContext({});

interface Props {
    children: React.ReactNode;
};


export const UserProvider = ({ children }: Props) => {

    const [state, setState] = useState({ loggedIn: false });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setState({ loggedIn: true });
            } else {
                setState({ loggedIn: false });
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <UserContext.Provider value={{ ...state }}>
            {children}
        </UserContext.Provider>
    )
}