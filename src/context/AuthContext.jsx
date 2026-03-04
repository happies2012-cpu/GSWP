import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate checking session securely
        const storedUser = localStorage.getItem('gswp_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        // Mock login simulating Clerk / DB
        return new Promise((resolve) => {
            setTimeout(() => {
                const mockUser = { id: 'usr_123', email, name: email.split('@')[0], plan: 'Free', purchases: [] };
                setUser(mockUser);
                localStorage.setItem('gswp_user', JSON.stringify(mockUser));
                resolve({ success: true, user: mockUser });
            }, 1000);
        });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('gswp_user');
    };

    const upgradePlan = () => {
        if (!user) return;
        const updated = { ...user, plan: 'Pro Master', purchases: ['Elementor Pro Secrets', 'Divi Theme Builder'] };
        setUser(updated);
        localStorage.setItem('gswp_user', JSON.stringify(updated));
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout, upgradePlan }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
