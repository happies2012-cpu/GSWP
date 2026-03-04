const fs = require('fs');
const path = require('path');

const dirs = [
    'api',
    'src/pages',
    'src/components',
    'src/hooks' // For API hooks
];

// Create directories
dirs.forEach(dir => {
    const fullPath = path.join(__dirname, dir);
    if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
        console.log(`Created directory: ${dir}`);
    }
});

// 1. Python Vercel API
const pythonApiContent = `from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List

app = FastAPI()

# Allow CORS for local dev
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mock Database
TUTORIALS = [
    {"id": 1, "category": "ecommerce", "title": "WooCommerce Setup 2025", "desc": "Step by step guide to starting an online store.", "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600"},
    {"id": 2, "category": "elementor", "title": "Elementor Pro Secrets", "desc": "Design mastery with Elementor.", "image": "https://images.unsplash.com/photo-1581850518616-bcb8077a2336?w=600"},
    {"id": 3, "category": "divi", "title": "Divi 4.0 Layouts", "desc": "Build amazing layouts with Divi.", "image": "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600"}
]

ARTICLES = [
    {"id": 1, "category": "plugins", "title": "Top 10 Plugins for Speed", "desc": "Improve your core web vitals.", "date": "Nov 20, 2024", "image": "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600"},
    {"id": 2, "category": "themes", "title": "Best Free Themes in 2025", "desc": "Don't pay for themes until you read this.", "date": "Nov 15, 2024", "image": "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600"},
    {"id": 3, "category": "reviews", "title": "Hostinger Review: Still the best?", "desc": "Deep dive into Hostinger performance.", "date": "Oct 30, 2024", "image": "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600"}
]

SERVICES = [
    {"id": 1, "title": "Speed Optimization", "price": "$199", "desc": "90+ Google Pagespeed Guaranteed."},
    {"id": 2, "title": "Website Redesign", "price": "$999", "desc": "Full Elementor/Divi redesign."},
]

@app.get("/api/tutorials/{category}")
def get_tutorials(category: str):
    if category == "all":
        return TUTORIALS
    return [t for t in TUTORIALS if t["category"] == category]

@app.get("/api/articles/{category}")
def get_articles(category: str):
    if category == "all":
        return ARTICLES
    return [a for a in ARTICLES if a["category"] == category]

@app.get("/api/services")
def get_services():
    return SERVICES
`;
fs.writeFileSync(path.join(__dirname, 'api/index.py'), pythonApiContent);

// 2. Python Requirements
fs.writeFileSync(path.join(__dirname, 'api/requirements.txt'), `fastapi\nuvicorn\ntyping\n`);

// 3. Vercel JSON to support Python routing
const vercelJsonContent = `{
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/index.py" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}`;
fs.writeFileSync(path.join(__dirname, 'vercel.json'), vercelJsonContent);

// 4. API Service Hook (React)
const apiServiceContent = `import { useState, useEffect } from 'react';

// Use standard relative path for production (Vercel routes /api) or localhost for dev python
const API_BASE = import.meta.env.DEV ? 'http://localhost:8000/api' : '/api';

export function useApi(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(\`\${API_BASE}\${endpoint}\`)
      .then(res => res.json())
      .then(d => {
        setData(d);
        setLoading(false);
      })
      .catch(err => {
        console.error("API error:", err);
        setLoading(false);
      });
  }, [endpoint]);

  return { data, loading };
}
`;
fs.writeFileSync(path.join(__dirname, 'src/hooks/useApi.js'), apiServiceContent);


// 5. Build complex Pages
const pagesContent = `import React from 'react';
import { useApi } from '../hooks/useApi';
import { PlayCircle, ArrowRight, Zap, BookOpen, Star } from 'lucide-react';

export const PageWrapper = ({ title, children }) => (
  <div style={{ paddingTop: '50px', paddingBottom: '100px', minHeight: '60vh', background: 'var(--bg-light)' }}>
    <div className="container" style={{ background: 'var(--white)', padding: '3rem', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--border)', paddingBottom: '1rem', color: 'var(--red)' }}>{title}</h1>
      <div style={{ fontSize: '1.1rem', color: 'var(--text-mid)', lineHeight: '1.8' }}>
        {children}
      </div>
    </div>
  </div>
);

export const TutorialsPage = ({ category, title }) => {
  const { data, loading } = useApi(\`/tutorials/\${category}\`);
  return (
    <PageWrapper title={title}>
      {loading ? <p>Loading tutorials...</p> : (
        <div className="kits-grid">
          {data?.map(t => (
            <div key={t.id} className="kit-card">
              <div className="kit-img-wrap">
                <img src={t.image} alt={t.title} className="kit-img" />
                <PlayCircle size={48} color="white" style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', opacity: 0.8}}/>
              </div>
              <div className="kit-info">
                <div className="kit-title">{t.title}</div>
                <p style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>{t.desc}</p>
                <button className="btn btn-outline-red" style={{padding: '0.4rem 1rem', marginTop:'1rem', width:'100%'}}>Watch Now</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </PageWrapper>
  );
};

export const ArticlesPage = ({ category, title }) => {
  const { data, loading } = useApi(\`/articles/\${category}\`);
  return (
    <PageWrapper title={title}>
      {loading ? <p>Loading articles...</p> : (
        <div className="blog-grid">
          {data?.map(a => (
            <div key={a.id} className="blog-card">
              <img src={a.image} alt={a.title} className="blog-card-img" />
              <div className="blog-card-body">
                <span className="blog-tag">{a.category}</span>
                <div className="blog-card-title">{a.title}</div>
                <div className="blog-card-meta">
                  <BookOpen size={12} /> {a.date}
                </div>
                <p style={{fontSize: '0.85rem', color: 'var(--text-muted)', marginTop:'0.5rem'}}>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </PageWrapper>
  );
};

export const ServicesPage = () => {
  const { data, loading } = useApi(\`/services\`);
  return (
    <PageWrapper title="WordPress Custom Services">
      <p>Need hands-on help? Our experts can build, optimize, or fix your WordPress site.</p>
      {loading ? <p>Loading services...</p> : (
        <div className="kits-grid" style={{marginTop:'2rem'}}>
          {data?.map(s => (
            <div key={s.id} className="kit-card" style={{padding:'2rem', textAlign:'center'}}>
              <h3 style={{fontSize:'1.5rem', marginBottom:'1rem'}}>{s.title}</h3>
              <p style={{color:'var(--text-muted)', marginBottom:'1.5rem'}}>{s.desc}</p>
              <div style={{fontSize:'2rem', fontWeight:'900', color:'var(--red)', marginBottom:'1.5rem'}}>{s.price}</div>
              <button className="btn btn-red" style={{width:'100%'}}>Hire Us</button>
            </div>
          ))}
        </div>
      )}
    </PageWrapper>
  );
};
`;
fs.writeFileSync(path.join(__dirname, 'src/pages/DynamicPages.jsx'), pagesContent);


// 6. Fix App.jsx integration
const appJsxContent = `import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { User, Facebook, Youtube, Twitter, Coffee, ChevronRight, ChevronUp, ArrowRight, Zap, BookOpen, Globe, Layout } from 'lucide-react';
import './index.css';

import { PageWrapper, TutorialsPage, ArticlesPage, ServicesPage } from './pages/DynamicPages';

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
              <Link to={\`/tutorials/all\`} className="lang-link">{lang.label}</Link>
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
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/tutorials/ecommerce" element={<TutorialsPage category="ecommerce" title="e-Commerce Tutorials" />} />
          <Route path="/tutorials/elementor" element={<TutorialsPage category="elementor" title="Elementor Tutorials" />} />
          <Route path="/tutorials/divi" element={<TutorialsPage category="divi" title="Divi Theme Tutorials" />} />
          <Route path="/tutorials/all" element={<TutorialsPage category="all" title="All WP Tutorials" />} />
          
          <Route path="/articles/plugins" element={<ArticlesPage category="plugins" title="Best WordPress Plugins" />} />
          <Route path="/articles/themes" element={<ArticlesPage category="themes" title="Best WordPress Themes" />} />
          <Route path="/articles/reviews" element={<ArticlesPage category="reviews" title="Plugin & Theme Reviews" />} />
          <Route path="/articles/all" element={<ArticlesPage category="all" title="All Articles" />} />
          
          <Route path="/account" element={<PageWrapper title="My Account"><p>Login coming soon via Clerk.</p></PageWrapper>} />
          <Route path="*" element={<PageWrapper title="404 Not Found"><p>Page doesn't exist.</p></PageWrapper>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
`;

fs.writeFileSync(path.join(__dirname, 'src/App.jsx'), appJsxContent);

// 7. Write a dev.sh
const devShContent = `#!/bin/bash
echo "Starting FastAPI Backend on 8000..."
cd api && uvicorn index:app --reload --port 8000 &
PID_BACKEND=$!
echo "Starting Vite Frontend..."
cd .. && npm run dev &
PID_FRONTEND=$!

trap "kill $PID_BACKEND $PID_FRONTEND" EXIT
wait
`;
fs.writeFileSync(path.join(__dirname, 'dev.sh'), devShContent);
fs.chmodSync(path.join(__dirname, 'dev.sh'), '755');

console.log('Orchestration complete! All pages, backend APIs, and React hooks created successfully.');
