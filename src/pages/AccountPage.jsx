import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { LogIn, User, Settings, Lock } from 'lucide-react';
import { PageWrapper } from './DynamicPages';

export const AccountPage = () => {
    const { user, login, logout } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email) return;
        setIsLoading(true);
        await login(email, password || 'password');
        setIsLoading(false);
    };

    if (!user) {
        return (
            <PageWrapper title="My Account">
                <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
                    <div style={{ background: '#f8f9fa', padding: '3rem', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
                        <div style={{ width: '60px', height: '60px', background: 'var(--red)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                            <Lock size={28} />
                        </div>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Welcome Back</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Sign in to access your premium tutorials and themes.</p>

                        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input
                                type="email"
                                placeholder="Email address"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                                style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', width: '100%' }}
                            />
                            <input
                                type="password"
                                placeholder="Password (any for demo)"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', width: '100%' }}
                            />
                            <button disabled={isLoading} type="submit" className="btn btn-red" style={{ padding: '1rem', marginTop: '1rem' }}>
                                {isLoading ? 'Signing In...' : <><LogIn size={18} style={{ marginRight: '8px' }} /> Sign In securely via Clerk Demo</>}
                            </button>
                        </form>
                    </div>
                </div>
            </PageWrapper>
        );
    }

    return (
        <PageWrapper title="My Dashboard">
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) 3fr', gap: '2rem' }}>
                <div style={{ background: 'var(--white)', p: '2rem', borderRadius: '12px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)', textAlign: 'center', padding: '2rem' }}>
                    <div style={{ width: '80px', height: '80px', background: 'var(--bg-light)', color: 'var(--red)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '2rem', fontWeight: 800 }}>
                        {user.name.charAt(0).toUpperCase()}
                    </div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>{user.name}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{user.email}</p>

                    <div style={{ background: user.plan === 'Free' ? '#f8f9fa' : '#D61876', color: user.plan === 'Free' ? 'var(--text-mid)' : 'white', padding: '0.5rem', borderRadius: '8px', marginBottom: '1.5rem', fontWeight: 700 }}>
                        {user.plan} Plan
                    </div>

                    <button onClick={logout} className="btn btn-outline-red" style={{ width: '100%' }}>Sign Out</button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{ background: 'var(--white)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Settings size={22} color="var(--red)" /> Purchased Tutorials
                        </h3>
                        {user.purchases.length === 0 ? (
                            <p style={{ color: 'var(--text-muted)' }}>You haven't purchased any premium tutorials yet. Visit the catalog to upgrade.</p>
                        ) : (
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {user.purchases.map((p, i) => (
                                    <li key={i} style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '8px', marginBottom: '0.5rem', fontWeight: 600 }}>✅ {p}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};
