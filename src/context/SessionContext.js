import React, { createContext, useState, useEffect } from 'react';
import { getUserLocal, removeUserLocal, setUserLocal } from '../utils/userManager';
import { useHistory } from "react-router-dom";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
    const [user, setUser] = useState(getUserLocal());
    const [loadingUser, setLoadingUser] = useState(false);
    const [reloadUser, setReloadUser] = useState(false);

    let history = useHistory();

    useEffect(() => {
        if (reloadUser) {
            setLoadingUser(true);
            const localUser = getUserLocal();
            if (localUser) {
                setUser(localUser);
            } else {
                setUser(undefined);
                history.push('/');
            }
            setLoadingUser(true);
        }
    }, [reloadUser]);

    const login = (user) => {
        setUserLocal(user);
        setUser(user);
        history.push('/welcome');
    }

    const logout = () => {
        removeUserLocal();
        setUser(undefined);
        history.push('/');
    }

    return (
        <SessionContext.Provider value={{
            loadingUser,
            user,
            login,
            logout,
            setReloadUser
        }}>
            {children}
        </SessionContext.Provider>)
}