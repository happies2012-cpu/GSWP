import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  Search, ShoppingCart, User, Facebook, Youtube, Twitter,
  Coffee, Globe, Layout, Smartphone, ChevronRight, ChevronUp,
  Star, PlayCircle, ArrowRight, BookOpen, Zap, AlertCircle
} from 'lucide-react';
import './index.css';

// ===== DATA =====
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
  {
    id: 1,
    title: 'MotorPro Specialist Motorcycle Shop Elementor Template Kits',
    img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    price: '$55+',
    isNew: true,
  },
  {
    id: 2,
    title: 'Home Renovation Services Elementor Template Kits',
    img: 'https://images.unsplash.com/photo-1581850518616-bcb8077a2336?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    price: '$49+',
    isNew: true,
  },
  {
    id: 3,
    title: 'PetHaven Pet Store WooCommerce Elementor Template Kits',
    img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    price: '$55+',
    isNew: true,
  },
  {
    id: 4,
    title: 'TaxPro Small Business Tax Consultant Elementor Template Kits',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    price: '$49+',
    isNew: true,
  },
];

const BLOG_POSTS = [
  {
    id: 1,
    tag: 'WordPress',
    title: 'Top 10 AI Website Builders (And How to Choose One)',
    date: 'Nov 15, 2024',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    tag: 'Divi',
    title: 'Mastering Divi Theme Settings in 2024',
    date: 'Nov 8, 2024',
    img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    tag: 'WooCommerce',
    title: 'Essential WordPress Plugins for eCommerce Success',
    date: 'Oct 29, 2024',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    tag: 'Design',
    title: 'Web Design Trends Setting the Pace in 2025',
    date: 'Oct 12, 2024',
    img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
];

// ===== OVERLAY FIX FOR SCROLLING =====
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// ===== TOP BAR =====
function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-left">
          <span>🌐</span>
          <select aria-label="Language">
            <option>🇺🇸 English</option>
            <option>🇪🇸 Español</option>
            <option>🇫🇷 Français</option>
          </select>
        </div>
        <div className="topbar-right">
          <Link to="/account" className="topbar-account" aria-label="Account">
            <User size={14} />
            Account
          </Link>
          <div className="topbar-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="topbar-social" aria-label="Facebook"><Facebook size={16} /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="topbar-social" aria-label="YouTube"><Youtube size={16} /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="topbar-social" aria-label="Twitter"><Twitter size={16} /></a>
            <a href="https://buymeacoffee.com" target="_blank" rel="noreferrer" className="topbar-social" aria-label="Buy me a coffee"><Coffee size={16} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== NAVBAR =====
function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        {/* Logo */}
        <Link to="/" className="logo">
          <div className="logo-icon-wrap">
            <span className="logo-d">W</span>
            <span className="logo-dot"></span>
          </div>
          <span className="logo-text">WP Mastery</span>
        </Link>

        {/* Nav links */}
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/coupons" className="nav-link">Coupons</Link></li>
          <li><Link to="/web-hosting" className="nav-link">Web Hosting</Link></li>
          <li><Link to="/reviews" className="nav-link">Reviews</Link></li>
          <li>
            <Link to="/resources" className="nav-link">
              WP Resources <ChevronRight size={14} style={{ rotate: '90deg' }} />
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact <ChevronRight size={14} style={{ rotate: '90deg' }} />
            </Link>
          </li>
        </ul>

        {/* CTAs */}
        <div className="nav-ctas">
          <Link to="/divi-layouts" className="nav-cta-btn divi" id="nav-divi-btn">
            <Layout size={15} />
            Divi Layouts
          </Link>
          <Link to="/elementor-templates" className="nav-cta-btn elementor" id="nav-elementor-btn">
            <Zap size={15} />
            Elementor Templates
          </Link>
        </div>

        {/* Hamburger */}
        <button className="nav-hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}

// ===== LAYOUT SECTIONS (FOR HOME) =====
function Hero() {
  return (
    <section className="hero">
      <div className="container" style={{ width: '100%' }}>
        <div className="hero-inner">
          {/* Left */}
          <div className="hero-left">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-flag" />
              <span>Step By Step WordPress Tutorials</span>
            </div>
            <h1 className="hero-title">
              Create Your WordPress Website, Join Me Today!
            </h1>
            <p className="hero-subtitle">
              I help thousands of people create Businesses online. No BS, No Paid Courses, Just FREE WordPress Tutorials
            </p>
            <div className="hero-btns">
              <Link to="/elementor-templates" className="btn btn-red">
                Browse Premium Templates
              </Link>
              <Link to="/tutorials" className="btn btn-outline-red">
                WordPress Training Videos
              </Link>
            </div>
          </div>

          {/* Right — person image with geometric shape + floating badges */}
          <div className="hero-right">
            <div className="hero-bg-shape" />

            {/* Person placeholder using an illustrated stock photo */}
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600&q=80"
              alt="WP Mastery Instructor"
              className="hero-person-img"
            />

            {/* Floating badges */}
            <div className="hero-float-badge woo animate-float-1">Woo</div>

            <div className="hero-float-badge elementor animate-float-2">
              <span className="badge-icon e-icon">E</span>
              <span>Elementor<br /><small style={{ fontWeight: 400, fontSize: '0.7rem' }}>WEB BUILDER</small></span>
            </div>

            <div className="hero-float-badge wordpress animate-float-3">
              <Globe size={26} style={{ color: '#21759b' }} />
            </div>

            <div className="hero-float-badge divi animate-float-4">
              <span className="badge-icon d-icon">D</span>
              <span>Divi Bu...<br /><small style={{ fontWeight: 400, fontSize: '0.7rem' }}>WEB BU...</small></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LanguagesSection() {
  return (
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
              <Link to={`/tutorials/${lang.name.toLowerCase()}`} className="lang-link">{lang.label}</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TemplateKitsSection() {
  return (
    <section className="section-kits" id="templates">
      <div className="container">
        <div className="section-eyebrow">
          <Zap size={16} className="section-eyebrow-flag" />
          <span>Launch Your Site In Minutes</span>
        </div>
        <div className="section-kits-header">
          <h2>Our Latest Elementor Template Kits</h2>
          <Link to="/elementor-templates" className="btn btn-red">
            View All Templates <ArrowRight size={18} />
          </Link>
        </div>

        <div className="kits-grid">
          {TEMPLATE_KITS.map((kit) => (
            <Link to={`/templates/${kit.id}`} className="kit-card" key={kit.id} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="kit-img-wrap">
                <img src={kit.img} alt={kit.title} className="kit-img" />
                {kit.isNew && <span className="kit-badge-new">NEW</span>}
              </div>
              <div className="kit-info">
                <div className="kit-builder-tag">
                  <Zap size={12} /> Built with elementor
                </div>
                <div className="kit-title">{kit.title}</div>
                <div className="kit-price">{kit.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section className="section-blog" id="blog">
      <div className="container">
        <div className="section-eyebrow">
          <span className="hero-eyebrow-flag" />
          <span>Latest Articles</span>
        </div>
        <h2>Recently Published Articles</h2>
        <div className="blog-grid">
          {BLOG_POSTS.map((post) => (
            <Link to={`/blog/${post.id}`} className="blog-card" key={post.id} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={post.img} alt={post.title} className="blog-card-img" />
              <div className="blog-card-body">
                <span className="blog-tag">{post.tag}</span>
                <div className="blog-card-title">{post.title}</div>
                <div className="blog-card-meta">
                  <BookOpen size={12} /> {post.date}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function HostingSection() {
  return (
    <section className="section-hosting">
      <div className="container">
        <div className="hosting-badge">#1 Best Web Host</div>
        <div className="hosting-title">We Recommend Hostinger</div>
        <div className="hosting-subtitle">Use "Code Mastery10" at Checkout</div>
        <p className="hosting-desc">
          Hostinger was among the top 3 best web hosting and this website is hosted with Hostinger.
          They have great load times, great uptime and are the best price for anyone getting started with WordPress.
        </p>
        <Link to="/hosting/hostinger" className="btn btn-red" style={{ fontSize: '1.05rem', padding: '1rem 2.5rem' }}>
          Get 74% Off Hostinger
        </Link>
      </div>
    </section>
  );
}

// ===== FOOTER =====
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
            <p className="footer-about">
              WPMastery.com started back in 2019 posting simple WordPress tutorials on YouTube.
              We help people learn how to use WordPress and even create their own web design businesses.
            </p>
          </div>

          <div className="footer-col">
            <h3>Pages</h3>
            <ul className="footer-links">
              <li><Link to="/affiliate">Affiliate Program</Link></li>
              <li><Link to="/web-hosting">Best Web Hosting</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/forums">Forums</Link></li>
            </ul>
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
              <li><Link to="/articles/services">WordPress Services</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">Copyright © {new Date().getFullYear()}. WP Mastery</span>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Term of Service</Link>
            <Link to="/refunds">Refund Policy</Link>
            <Link to="/delivery">Delivery Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ===== PAGES =====
const PageWrapper = ({ title, children }) => (
  <div style={{ paddingTop: '50px', paddingBottom: '100px', minHeight: '60vh' }}>
    <div className="container">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--border)', paddingBottom: '1rem' }}>{title}</h1>
      <div style={{ fontSize: '1.1rem', color: 'var(--text-mid)', lineHeight: '1.8' }}>
        {children}
      </div>
    </div>
  </div>
);

const Home = () => (
  <>
    <Hero />
    <LanguagesSection />
    <TemplateKitsSection />
    <BlogSection />
    <HostingSection />
  </>
);

const Coupons = () => (
  <PageWrapper title="WordPress & Hosting Coupons">
    <p>Get the best deals on premium WordPress themes, plugins, and high-performance hosting plans. We regularly update our discount codes to save you money on your website buildup.</p>
    <div className="kits-grid" style={{ marginTop: '2rem' }}>
      {[1, 2, 3].map(i => (
        <div key={i} className="template-card" style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px' }}>
          <h3>Hostinger 74% OFF</h3>
          <p style={{ margin: '1rem 0', color: 'var(--text-muted)' }}>Use promo code MASTERY10 for massive savings.</p>
          <button className="btn btn-red">Reveal Code</button>
        </div>
      ))}
    </div>
  </PageWrapper>
);

const WebHosting = () => (
  <PageWrapper title="Best Web Hosting Services">
    <HostingSection />
    <div style={{ marginTop: '3rem' }}>
      <h3>Compare Web Hosts</h3>
      <p style={{ marginTop: '1rem' }}>Read our deep-dive reviews on NameHero, Hostinger, SiteGround, and Cloudways to find the perfect server for your business.</p>
    </div>
  </PageWrapper>
);

const Reviews = () => (
  <PageWrapper title="WordPress Reviews">
    <p>Read in-depth reviews on the most popular theme builders and plugins. We personally buy and test these products.</p>
    <BlogSection />
  </PageWrapper>
);

const Resources = () => (
  <PageWrapper title="WordPress Resources & Tools">
    <p>A curated directory of our favorite tools to run a successful online business.</p>
  </PageWrapper>
);

const Contact = () => (
  <PageWrapper title="Contact Us">
    <p>Have a question or a partnership inquiry? Fill out the form below to reach the WP Mastery team.</p>
    <form style={{ maxWidth: '600px', marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <input type="text" placeholder="Your Name" style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '6px' }} />
      <input type="email" placeholder="Your Email" style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '6px' }} />
      <textarea placeholder="Your Message" rows="5" style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '6px' }}></textarea>
      <button type="button" className="btn btn-red">Send Message</button>
    </form>
  </PageWrapper>
);

const ElementorTemplates = () => (
  <PageWrapper title="Premium Elementor Template Kits">
    <TemplateKitsSection />
  </PageWrapper>
);

const DiviLayouts = () => (
  <PageWrapper title="Premium Divi Layouts">
    <p>Explore gorgeous, responsive pre-made layouts for Elegant Themes Divi builder.</p>
    <TemplateKitsSection />
  </PageWrapper>
);

const GenericPage = ({ title }) => (
  <PageWrapper title={title}>
    <p>This is a dynamically generated page for <strong>{title}</strong>. Actual content will be managed through the CMS.</p>
    <br />
    <Link to="/" className="btn btn-black">← Return to Home</Link>
  </PageWrapper>
);

// ===== MAIN APP COMPONENT =====
export default function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Router>
      <ScrollToTop />
      <TopBar />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coupons" element={<Coupons />} />
          <Route path="/web-hosting" element={<WebHosting />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/elementor-templates" element={<ElementorTemplates />} />
          <Route path="/divi-layouts" element={<DiviLayouts />} />
          <Route path="/blog" element={<GenericPage title="Our Blog" />} />
          <Route path="/blog/:id" element={<GenericPage title="Blog Article" />} />
          <Route path="/tutorials" element={<GenericPage title="WordPress Tutorials" />} />
          <Route path="/tutorials/:id" element={<GenericPage title="Category Tutorials" />} />
          <Route path="/templates/:id" element={<GenericPage title="Template Details" />} />
          <Route path="/account" element={<GenericPage title="My Account" />} />
          <Route path="/forums" element={<GenericPage title="Support Forums" />} />
          <Route path="/affiliate" element={<GenericPage title="Affiliate Program" />} />
          <Route path="/privacy" element={<GenericPage title="Privacy Policy" />} />
          <Route path="/terms" element={<GenericPage title="Terms of Service" />} />
          <Route path="/refunds" element={<GenericPage title="Refund Policy" />} />
          <Route path="/delivery" element={<GenericPage title="Delivery Policy" />} />
          <Route path="/articles/:category" element={<GenericPage title="Article Category" />} />
          <Route path="/hosting/hostinger" element={<WebHosting />} />
          <Route path="*" element={<GenericPage title="404 - Page Not Found" />} />
        </Routes>
      </main>
      <Footer />

      {showTop && (
        <button
          className="scroll-top"
          onClick={scrollTop}
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </Router>
  );
}
