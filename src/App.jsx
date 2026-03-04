import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { User, Facebook, Youtube, Twitter, Coffee, ChevronRight, ChevronUp, ArrowRight, Zap, BookOpen, Globe, Layout } from 'lucide-react';
import './index.css';

import { PageWrapper, TutorialsPage, ArticlesPage } from './pages/DynamicPages';
import { EcommerceTutorials, ElementorTutorials, DiviTutorials, BestPlugins, BestThemes, PluginReviews, WordPressServices } from './pages/TailoredPages';

// ... (Data Constants from previous iteration)
const LANGUAGES = [
  { flag: '🇪🇸', name: 'Espanol', label: 'Learn In Espanol' },
  { flag: '🇵🇹', name: 'Portuguese', label: 'Learn In Portuguese' },
  { flag: '🇸🇦', name: 'Arabic', label: 'Learn In Arabic' },
  { flag: '🇫🇷', name: 'French', label: 'Learn In French' },
  { flag: '🇩🇪', name: 'German', label: 'Learn In German' },
  { flag: '🇮🇹', name: 'Italian', label: 'Learn In Italian' },
  { flag: '🇯🇵', name: '日本語', label: '日本語で学ぶ' },
];

const TEMPLATE_KITS = [
  { id: 1, title: 'MotorPro Specialist', img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600', price: '$55+' },
  { id: 2, title: 'Home Renovation', img: 'https://images.unsplash.com/photo-1581850518616-bcb8077a2336?w=600', price: '$49+' }
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-left">
          <span>🌐</span>
          <select aria-label="Language"><option>🇺🇸 English</option></select>
        </div>
        <div className="topbar-right">
          <Link to="/account" className="topbar-account"><User size={14} /> Account</Link>
          <div className="topbar-socials">
            <a href="#" className="topbar-social"><Facebook size={16} /></a>
            <a href="#" className="topbar-social"><Youtube size={16} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="logo">
          <div className="logo-icon-wrap"><span className="logo-d">W</span><span className="logo-dot"></span></div>
          <span className="logo-text">WP Mastery</span>
        </Link>
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/tutorials/all" className="nav-link">Video Tutorials</Link></li>
          <li><Link to="/articles/all" className="nav-link">Articles & Reviews</Link></li>
          <li><Link to="/services" className="nav-link">Expert Services</Link></li>
        </ul>
        <div className="nav-ctas">
          <Link to="/tutorials/divi" className="nav-cta-btn divi"><Layout size={15} /> Divi</Link>
          <Link to="/tutorials/elementor" className="nav-cta-btn elementor"><Zap size={15} /> Elementor</Link>
        </div>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container" style={{ width: '100%' }}>
          <div className="hero-inner">
            <div className="hero-left">
              <div className="hero-eyebrow"><span className="hero-eyebrow-flag" /><span>Step By Step WordPress Tutorials</span></div>
              <h1 className="hero-title">Create Your WordPress Website, Join Me Today!</h1>
              <p className="hero-subtitle">I help thousands of people create Businesses online. No BS, Just FREE WordPress Tutorials</p>
              <div className="hero-btns">
                <Link to="/tutorials/elementor" className="btn btn-red">Browse Premium Templates</Link>
                <Link to="/tutorials/all" className="btn btn-outline-red">WordPress Training Videos</Link>
              </div>
            </div>
            <div className="hero-right">
              <div className="hero-bg-shape" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500" alt="WP Mastery" className="hero-person-img" />
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
          <h2>Watch My WordPress Tutorials Now In 7 Different Languages!</h2>
          <div className="languages-grid">
            {LANGUAGES.map((lang) => (
              <div className="lang-card" key={lang.name}>
                <div className="lang-flag">{lang.flag}</div>
                <div className="lang-name">{lang.name}</div>
                <Link to={`/tutorials/all`} className="lang-link">{lang.label}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
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
            <p className="footer-about">WPMastery.com - Learn WordPress easily.</p>
          </div>
          <div className="footer-col">
            <h3>WP Tutorials</h3>
            <ul className="footer-links">
              <li><Link to="/tutorials/ecommerce">e-Commerce Tutorials</Link></li>
              <li><Link to="/tutorials/elementor">Elementor Tutorials</Link></li>
              <li><Link to="/tutorials/divi">Divi Theme Tutorials</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Articles</h3>
            <ul className="footer-links">
              <li><Link to="/articles/plugins">Best WordPress Plugin</Link></li>
              <li><Link to="/articles/themes">Best WordPress Themes</Link></li>
              <li><Link to="/articles/reviews">Plugin Reviews</Link></li>
              <li><Link to="/services">WordPress Services</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <TopBar />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<PageWrapper title="Services"><WordPressServices /></PageWrapper>} />
          <Route path="/tutorials/ecommerce" element={<PageWrapper title="e-Commerce Tutorials"><EcommerceTutorials /></PageWrapper>} />
          <Route path="/tutorials/elementor" element={<PageWrapper title="Elementor Tutorials"><ElementorTutorials /></PageWrapper>} />
          <Route path="/tutorials/divi" element={<PageWrapper title="Divi Theme Tutorials"><DiviTutorials /></PageWrapper>} />
          <Route path="/tutorials/all" element={<TutorialsPage category="all" title="All WP Tutorials" />} />

          <Route path="/articles/plugins" element={<PageWrapper title="Best WordPress Plugins"><BestPlugins /></PageWrapper>} />
          <Route path="/articles/themes" element={<PageWrapper title="Best WordPress Themes"><BestThemes /></PageWrapper>} />
          <Route path="/articles/reviews" element={<PageWrapper title="Plugin Reviews"><PluginReviews /></PageWrapper>} />
          <Route path="/articles/all" element={<ArticlesPage category="all" title="All Articles" />} />

          <Route path="/account" element={<PageWrapper title="My Account"><p>Login coming soon via Clerk.</p></PageWrapper>} />
          <Route path="*" element={<PageWrapper title="404 Not Found"><p>Page doesn't exist.</p></PageWrapper>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
