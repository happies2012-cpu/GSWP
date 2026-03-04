import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { User, Facebook, Youtube, Zap, BookOpen, Globe, Layout, LogIn, LogOut, ShoppingBag, Menu, X, Send } from 'lucide-react';
import './index.css';

import { AuthProvider, useAuth } from './context/AuthContext';
import { PageWrapper, TutorialsPage, ArticlesPage } from './pages/DynamicPages';
import { EcommerceTutorials, ElementorTutorials, DiviTutorials, BestPlugins, BestThemes, PluginReviews, WordPressServices } from './pages/TailoredPages';
import { AccountPage } from './pages/AccountPage';
import { StripeCheckoutModal } from './components/StripeCheckout';

const LANGUAGES = [
  { flag: '🇪🇸', name: 'Espanol', label: 'Learn In Espanol' },
  { flag: '🇵🇹', name: 'Portuguese', label: 'Learn In Portuguese' },
  { flag: '🇸🇦', name: 'Arabic', label: 'Learn In Arabic' },
  { flag: '🇫🇷', name: 'French', label: 'Learn In French' },
  { flag: '🇩🇪', name: 'German', label: 'Learn In German' },
  { flag: '🇮🇹', name: 'Italian', label: 'Learn In Italian' },
  { flag: '🇯🇵', name: '日本語', label: '日本語で学ぶ' },
];

const FEATURED_POSTS = [
  { title: 'How To Speed Up WordPress 2025', tag: 'Performance', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600', date: 'Mar 1, 2025' },
  { title: 'Top 5 Plugins Every Site Needs', tag: 'Plugins', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600', date: 'Feb 20, 2025' },
  { title: 'Build a WooCommerce Store in 2 Hours', tag: 'eCommerce', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600', date: 'Feb 10, 2025' },
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function TopBar() {
  const { user } = useAuth();
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-left">
          <span>🌐</span>
          <select aria-label="Language" style={{ background: 'transparent', color: '#aaa', border: 'none', cursor: 'pointer' }}>
            <option>🇺🇸 English</option>
            <option>🇪🇸 Espanol</option>
            <option>🇫🇷 Français</option>
          </select>
        </div>
        <div className="topbar-right">
          <Link to="/account" className="topbar-account">
            <User size={14} />
            {user ? user.name : 'Account'}
          </Link>
          <div className="topbar-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="topbar-social"><Facebook size={16} /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="topbar-social"><Youtube size={16} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  const { user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setMobileOpen(false); }, [location]);

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="logo">
          <div className="logo-icon-wrap"><span className="logo-d">W</span><span className="logo-dot" /></div>
          <span className="logo-text">WP Mastery</span>
        </Link>

        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-dropdown">
            <span className="nav-link">Tutorials ▾</span>
            <div className="nav-dropdown-menu">
              <Link to="/tutorials/all">All Tutorials</Link>
              <Link to="/tutorials/elementor">Elementor</Link>
              <Link to="/tutorials/divi">Divi Theme</Link>
              <Link to="/tutorials/ecommerce">eCommerce</Link>
            </div>
          </li>
          <li className="nav-dropdown">
            <span className="nav-link">Articles ▾</span>
            <div className="nav-dropdown-menu">
              <Link to="/articles/all">All Articles</Link>
              <Link to="/articles/plugins">Best Plugins</Link>
              <Link to="/articles/themes">Best Themes</Link>
              <Link to="/articles/reviews">Plugin Reviews</Link>
            </div>
          </li>
          <li><Link to="/services" className="nav-link">Services</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>

        <div className="nav-ctas">
          <Link to="/tutorials/divi" className="nav-cta-btn divi"><Layout size={15} /> Divi</Link>
          <Link to="/tutorials/elementor" className="nav-cta-btn elementor"><Zap size={15} /> Elementor</Link>
          {user ? (
            <button onClick={logout} className="nav-cta-btn" style={{ background: '#eee', color: '#333', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <LogOut size={15} /> Sign Out
            </button>
          ) : (
            <Link to="/account" className="nav-cta-btn" style={{ background: 'var(--black)', color: 'white' }}>
              <LogIn size={15} /> Sign In
            </Link>
          )}
        </div>

        <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle Menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div style={{ background: 'white', padding: '1.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          {[['/', 'Home'], ['/tutorials/all', 'All Tutorials'], ['/tutorials/elementor', 'Elementor'], ['/tutorials/divi', 'Divi'], ['/tutorials/ecommerce', 'eCommerce'], ['/articles/all', 'Articles'], ['/articles/plugins', 'Best Plugins'], ['/articles/themes', 'Best Themes'], ['/articles/reviews', 'Reviews'], ['/services', 'Services'], ['/contact', 'Contact'], ['/account', user ? 'Dashboard' : 'Sign In']].map(([path, label]) => (
            <Link key={path} to={path} style={{ padding: '0.7rem 1rem', background: '#f8f9fa', borderRadius: '8px', fontWeight: 600, color: 'var(--black)', textDecoration: 'none' }}>{label}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}

function PremiumBanner({ onCheckout }) {
  return (
    <section style={{ background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 100%)', padding: '5rem 0', color: 'white', textAlign: 'center' }}>
      <div className="container">
        <div style={{ display: 'inline-block', background: '#d83121', color: 'white', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '1.5rem' }}>⚡ LIMITED OFFER</div>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.15 }}>Get <span style={{ color: '#f1c40f' }}>Unlimited Access</span> To All Premium Tutorials</h2>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', maxWidth: '550px', margin: '0 auto 2.5rem' }}>Join 12,000+ students and get instant access to every course, template kit, and resource in our library.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => onCheckout('WP Mastery Pro Annual', '$97/year')} className="btn btn-red" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>Get Pro Access — $97/yr</button>
          <Link to="/tutorials/all" className="btn" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', fontSize: '1.1rem', padding: '1rem 2.5rem' }}>Browse Free Tutorials</Link>
        </div>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '2.5rem', flexWrap: 'wrap' }}>
          {['✅ Lifetime updates', '✅ Cancel anytime', '✅ Premium community access'].map(f => (
            <span key={f} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>{f}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Home({ onCheckout }) {
  return (
    <>
      <section className="hero">
        <div className="container" style={{ width: '100%' }}>
          <div className="hero-inner">
            <div className="hero-left">
              <div className="hero-eyebrow"><span className="hero-eyebrow-flag" /><span>Step By Step WordPress Tutorials</span></div>
              <h1 className="hero-title">Create Your WordPress Website,<br />Join Me Today!</h1>
              <p className="hero-subtitle">I help thousands of people create Businesses online. No BS, Just FREE WordPress Tutorials — and premium resources when you're ready.</p>
              <div className="hero-btns">
                <button onClick={() => onCheckout('WP Mastery Pro', '$97')} className="btn btn-red">Get Pro Access</button>
                <Link to="/tutorials/all" className="btn btn-outline-red">Browse Free Tutorials</Link>
              </div>
              <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem', flexWrap: 'wrap' }}>
                <span>⭐ 12,000+ Students</span>
                <span>🎬 200+ Free Videos</span>
                <span>🛒 50+ Starter Templates</span>
              </div>
            </div>
            <div className="hero-right">
              <div className="hero-bg-shape" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500" alt="WP Mastery Instructor" className="hero-person-img" />
              <div className="hero-float-badge woo animate-float-1">Woo</div>
              <div className="hero-float-badge elementor animate-float-2"><span className="badge-icon e-icon">E</span> Elementor</div>
              <div className="hero-float-badge wordpress animate-float-3"><Globe size={26} style={{ color: '#21759b' }} /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-languages" id="tutorials">
        <div className="container">
          <div className="section-eyebrow">
            <span className="hero-eyebrow-flag" />
            <span>Start Learning From Here</span>
          </div>
          <h2>Watch WordPress Tutorials In 7 Different Languages!</h2>
          <div className="languages-grid">
            {LANGUAGES.map((lang) => (
              <div className="lang-card" key={lang.name}>
                <div className="lang-flag">{lang.flag}</div>
                <div className="lang-name">{lang.name}</div>
                <Link to="/tutorials/all" className="lang-link">{lang.label}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 0', background: 'var(--white)' }}>
        <div className="container">
          <div className="section-eyebrow"><span className="hero-eyebrow-flag" /><span>Latest Content</span></div>
          <h2>Popular Tutorials & Articles</h2>
          <div className="blog-grid" style={{ marginTop: '2.5rem' }}>
            {FEATURED_POSTS.map((post, i) => (
              <div key={i} className="blog-card">
                <img src={post.img} alt={post.title} className="blog-card-img" />
                <div className="blog-card-body">
                  <span className="blog-tag">{post.tag}</span>
                  <div className="blog-card-title">{post.title}</div>
                  <div className="blog-card-meta"><BookOpen size={12} /> {post.date}</div>
                  <Link to="/tutorials/all" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: '1rem', color: 'var(--red)', fontWeight: 700, fontSize: '0.9rem' }}>
                    Watch Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PremiumBanner onCheckout={onCheckout} />
    </>
  );
}

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setSent(true);
    setLoading(false);
  };

  return (
    <PageWrapper title="Contact Us">
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        {sent ? (
          <div style={{ textAlign: 'center', padding: '3rem' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
            <h2 style={{ color: 'var(--red)', marginBottom: '1rem' }}>Message Sent!</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Thanks for reaching out! We'll get back to you within 24 hours.</p>
          </div>
        ) : (
          <>
            <p style={{ color: 'var(--text-mid)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.8 }}>Have a question, want to hire us, or interested in sponsoring a video? Fill out the form below and we'll respond promptly.</p>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
                <div>
                  <label style={{ fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '0.9rem' }}>Full Name *</label>
                  <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="John Smith" style={{ padding: '0.9rem 1rem', border: '1px solid var(--border)', borderRadius: '8px', width: '100%', fontSize: '1rem' }} />
                </div>
                <div>
                  <label style={{ fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '0.9rem' }}>Email Address *</label>
                  <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" style={{ padding: '0.9rem 1rem', border: '1px solid var(--border)', borderRadius: '8px', width: '100%', fontSize: '1rem' }} />
                </div>
              </div>
              <div>
                <label style={{ fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '0.9rem' }}>Subject</label>
                <select value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} style={{ padding: '0.9rem 1rem', border: '1px solid var(--border)', borderRadius: '8px', width: '100%', fontSize: '1rem', background: 'white' }}>
                  <option>General Question</option>
                  <option>WordPress Services</option>
                  <option>Sponsorship / Partnership</option>
                  <option>Bug Report</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label style={{ fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '0.9rem' }}>Message *</label>
                <textarea required rows={6} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your project or question..." style={{ padding: '0.9rem 1rem', border: '1px solid var(--border)', borderRadius: '8px', width: '100%', fontSize: '1rem', resize: 'vertical' }} />
              </div>
              <button disabled={loading} type="submit" className="btn btn-red" style={{ padding: '1.1rem 2rem', alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Send size={18} /> {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </>
        )}
      </div>
    </PageWrapper>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-col">
            <svg className="footer-logo-svg" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="30,0 55,15 55,45 30,60 5,45 5,15" fill="#111" />
              <text x="14" y="42" fontSize="28" fontWeight="900" fill="white" fontFamily="Poppins, sans-serif">W</text>
              <circle cx="48" cy="46" r="7" fill="#d83121" />
            </svg>
            <p className="footer-about">WP Mastery — Learn WordPress the right way. Free tutorials, plugin reviews & premium templates.</p>
            <div style={{ display: 'flex', gap: '0.8rem', marginTop: '1rem' }}>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" style={{ background: '#ff0000', color: 'white', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Youtube size={18} /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ background: '#1877f2', color: 'white', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Facebook size={18} /></a>
            </div>
          </div>
          <div className="footer-col">
            <h3>WP Tutorials</h3>
            <ul className="footer-links">
              <li><Link to="/tutorials/ecommerce">e-Commerce Tutorials</Link></li>
              <li><Link to="/tutorials/elementor">Elementor Tutorials</Link></li>
              <li><Link to="/tutorials/divi">Divi Theme Tutorials</Link></li>
              <li><Link to="/tutorials/all">All Video Tutorials</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Articles</h3>
            <ul className="footer-links">
              <li><Link to="/articles/plugins">Best WordPress Plugin</Link></li>
              <li><Link to="/articles/themes">Best WordPress Themes</Link></li>
              <li><Link to="/articles/reviews">Plugin Reviews</Link></li>
              <li><Link to="/articles/all">All Articles</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Company</h3>
            <ul className="footer-links">
              <li><Link to="/services">WordPress Services</Link></li>
              <li><Link to="/account">My Account</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: '3rem', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
          <span>© {new Date().getFullYear()} WP Mastery. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: 'inherit' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'inherit' }}>Terms of Service</a>
            <a href="#" style={{ color: 'inherit' }}>Affiliate Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function AppInner() {
  const [checkout, setCheckout] = useState(null);

  const openCheckout = (title, price) => setCheckout({ title, price });
  const closeCheckout = () => setCheckout(null);

  return (
    <>
      {checkout && <StripeCheckoutModal productTitle={checkout.title} price={checkout.price} onClose={closeCheckout} />}
      <ScrollToTop />
      <TopBar />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home onCheckout={openCheckout} />} />
          <Route path="/services" element={<PageWrapper title="WordPress Services"><WordPressServices onCheckout={openCheckout} /></PageWrapper>} />
          <Route path="/tutorials/ecommerce" element={<PageWrapper title="e-Commerce Tutorials"><EcommerceTutorials onCheckout={openCheckout} /></PageWrapper>} />
          <Route path="/tutorials/elementor" element={<PageWrapper title="Elementor Tutorials"><ElementorTutorials onCheckout={openCheckout} /></PageWrapper>} />
          <Route path="/tutorials/divi" element={<PageWrapper title="Divi Theme Tutorials"><DiviTutorials onCheckout={openCheckout} /></PageWrapper>} />
          <Route path="/tutorials/all" element={<TutorialsPage category="all" title="All WP Tutorials" />} />
          <Route path="/articles/plugins" element={<PageWrapper title="Best WordPress Plugins"><BestPlugins /></PageWrapper>} />
          <Route path="/articles/themes" element={<PageWrapper title="Best WordPress Themes"><BestThemes /></PageWrapper>} />
          <Route path="/articles/reviews" element={<PageWrapper title="Plugin Reviews"><PluginReviews /></PageWrapper>} />
          <Route path="/articles/all" element={<ArticlesPage category="all" title="All Articles" />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<PageWrapper title="404 — Page Not Found"><div style={{ textAlign: 'center', padding: '3rem 0' }}><div style={{ fontSize: '5rem', marginBottom: '1rem' }}>😞</div><p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>This page doesn't exist.</p><Link to="/" className="btn btn-red">Back to Home</Link></div></PageWrapper>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppInner />
      </Router>
    </AuthProvider>
  );
}
