import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { CreditCard, CheckCircle2, AlertCircle } from 'lucide-react';

export const StripeCheckoutModal = ({ productTitle, price, onClose }) => {
    const { user, upgradePlan } = useAuth();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleCheckout = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate Stripe Payment Gateway processing
        setTimeout(() => {
            if (!user) {
                setError("You must be logged in to complete this purchase.");
                setLoading(false);
                return;
            }
            upgradePlan();
            setSuccess(true);
            setLoading(false);
            setTimeout(() => {
                onClose();
                window.location.href = '/account';
            }, 2500);
        }, 2000);
    };

    return (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center' }}>
            <div style={{ background: 'white', padding: '3rem', borderRadius: '16px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', maxWidth: '500px', width: '90%', position: 'relative' }}>
                <button onClick={onClose} style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#999' }}>&times;</button>

                {success ? (
                    <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                        <div style={{ width: '80px', height: '80px', background: '#e6ffe6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                            <CheckCircle2 size={40} color="#00B894" />
                        </div>
                        <h2 style={{ fontSize: '1.8rem', color: '#00B894', marginBottom: '0.5rem' }}>Payment Successful!</h2>
                        <p style={{ color: 'var(--text-muted)' }}>Redirecting to your dashboard...</p>
                    </div>
                ) : (
                    <>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid #eee', paddingBottom: '1.5rem' }}>
                            <div style={{ width: '50px', height: '50px', background: '#635BFF', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <CreditCard color="white" size={24} />
                            </div>
                            <div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Stripe Secure Checkout</div>
                                <h3 style={{ fontSize: '1.2rem', margin: '0.2rem 0 0' }}>{productTitle}</h3>
                            </div>
                            <div style={{ marginLeft: 'auto', fontSize: '1.5rem', fontWeight: 800 }}>{price}</div>
                        </div>

                        {error && (
                            <div style={{ background: '#ffebee', color: '#c62828', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                                <AlertCircle size={18} /> {error}
                            </div>
                        )}

                        <form onSubmit={handleCheckout} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input type="email" placeholder="Email address" defaultValue={user?.email || ''} required style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #ccc', background: '#f8f9fa' }} />

                            <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', background: '#f8f9fa', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <CreditCard size={20} color="#999" />
                                <span style={{ color: '#666', fontFamily: 'monospace', fontSize: '1.1rem', letterSpacing: '2px' }}>**** **** **** 4242</span>
                                <span style={{ marginLeft: 'auto', color: '#999', fontSize: '0.9rem' }}>12/26 &nbsp;&nbsp; 123</span>
                            </div>

                            <button disabled={loading} type="submit" style={{ background: '#635BFF', color: 'white', border: 'none', padding: '1.2rem', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', marginTop: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                {loading ? 'Processing Payment securely...' : `Pay ${price}`}
                            </button>

                            <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#aaa', marginTop: '1rem' }}>
                                🔒 Payments are securely processed via Stripe. Your card information is never stored on our servers.
                            </p>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
