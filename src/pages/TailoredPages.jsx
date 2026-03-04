import React from 'react';
import { PlayCircle, Zap, BookOpen, Star, CheckCircle, Monitor, Smartphone, Settings, Globe, Layout } from 'lucide-react';
import { PageWrapper } from './DynamicPages';

const HeroHeader = ({ title, subtitle, icon: Icon, color }) => (
    <div style={{
        background: `linear-gradient(135deg, ${color}22 0%, var(--bg-light) 100%)`,
        padding: '4rem 2rem',
        borderRadius: '16px',
        marginBottom: '3rem',
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid var(--border)'
    }}>
        <div style={{
            width: '80px', height: '80px', borderRadius: '50%', background: color,
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            boxShadow: `0 10px 20px ${color}44`
        }}>
            <Icon size={40} color="white" />
        </div>
        <div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--black)', marginBottom: '0.5rem' }}>{title}</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-mid)', maxWidth: '600px' }}>{subtitle}</p>
        </div>
    </div>
);

export const EcommerceTutorials = () => {
    return (
        <div className="container" style={{ padding: '3rem 0' }}>
            <HeroHeader title="e-Commerce Mastery" subtitle="Everything you need to launch a highly profitable WooCommerce or Shopify store from scratch." icon={Globe} color="#9013FE" />
            <div className="kits-grid">
                {[1, 2, 3].map(i => (
                    <div key={i} className="kit-card">
                        <div className="kit-img-wrap">
                            <img src={`https://images.unsplash.com/photo-${1556742049 + i}-0cfed4f6a45d?w=600`} alt="Ecommerce" className="kit-img" />
                            <PlayCircle size={48} color="white" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.9 }} />
                        </div>
                        <div className="kit-info" style={{ padding: '1.5rem' }}>
                            <div style={{ color: '#9013FE', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>BEGINNER TO PRO</div>
                            <div className="kit-title" style={{ fontSize: '1.2rem' }}>How To Make a WooCommerce Store</div>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Complete 2-hour masterclass on setting up payments, shipping, and products.</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const ElementorTutorials = () => {
    return (
        <div className="container" style={{ padding: '3rem 0' }}>
            <HeroHeader title="Elementor Tutorials" subtitle="Design like a pro. Build pixel-perfect WordPress sites without writing a single line of code." icon={Zap} color="#D61876" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
                {[1, 2, 3, 4].map(i => (
                    <div key={i} style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', background: 'var(--white)', transition: 'transform 0.3s ease', cursor: 'pointer' }} className="hover-lift">
                        <div style={{ height: '220px', background: '#f5f5f5', position: 'relative' }}>
                            <img src={`https://images.unsplash.com/photo-${1581850518616 + i}-bcb8077a2336?w=600`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: '#D61876', color: 'white', padding: '0.2rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>Pro</div>
                        </div>
                        <div style={{ padding: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Mastering Global Colors & Fonts</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>Learn how to set up your design system globally to save hours of work.</p>
                            <div style={{ display: 'flex', alignItems: 'center', color: '#D61876', fontWeight: 600, fontSize: '0.9rem' }}>
                                Watch Lesson <ArrowRight size={16} style={{ marginLeft: '5px' }} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const DiviTutorials = () => {
    return (
        <div className="container" style={{ padding: '3rem 0' }}>
            <HeroHeader title="Divi Theme Tutorials" subtitle="Unlock the power of the Elegant Themes builder." icon={Layout} color="#8E44AD" />
            <div style={{ background: 'var(--white)', padding: '3rem', borderRadius: '16px', boxShadow: 'var(--shadow-sm)', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>The Ultimate Divi 4.0 Course</h2>
                <p style={{ color: 'var(--text-mid)', maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.1rem' }}>Join 50,000+ students in mastering the visual builder, theme builder, and dynamic content.</p>
                <button className="btn btn-red" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>Start Free Course</button>
            </div>
        </div>
    );
};

export const BestPlugins = () => {
    const plugins = [
        { name: "Elementor Pro", desc: "The ultimate #1 page builder for WordPress.", rating: 5, color: "#D61876" },
        { name: "WP Rocket", desc: "Premium caching plugin to achieve 90+ core web vitals.", rating: 5, color: "#FF7D14" },
        { name: "RankMath SEO", desc: "AI-powered SEO tool to outrank competitors.", rating: 4.8, color: "#1E3B89" }
    ];
    return (
        <div className="container" style={{ padding: '3rem 0' }}>
            <HeroHeader title="Best WordPress Plugins" subtitle="Tested and verified plugins that actually deliver results for your website." icon={Settings} color="#00B894" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {plugins.map((p, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2rem', borderRadius: '12px', background: 'var(--white)', boxShadow: 'var(--shadow-sm)', borderLeft: '6px solid ' + p.color }}>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>{p.name}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{p.desc}</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ color: '#F1C40F', display: 'flex', gap: '2px', marginBottom: '0.5rem' }}>
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill={s <= p.rating ? 'currentColor' : 'none'} />)}
                            </div>
                            <button className="btn btn-outline-red" style={{ padding: '0.5rem 1.5rem' }}>Get it Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export const BestThemes = () => {
    return (
        <div className="container" style={{ padding: '3rem 0' }}>
            <HeroHeader title="Best WordPress Themes" subtitle="Don't waste money. Start with these highly optimized, customizable free themes." icon={Monitor} color="#FC427B" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                {["Astra", "GeneratePress", "OceanWP"].map((theme, i) => (
                    <div key={i} style={{ background: 'var(--white)', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                        <div style={{ height: '200px', background: `linear-gradient(45deg, #111, #333)`, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 800 }}>
                            {theme}
                        </div>
                        <div style={{ padding: '2rem', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{theme} Theme</h3>
                            <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', color: 'var(--text-muted)' }}>
                                <li style={{ marginBottom: '0.5rem' }}>✅ Lightweight & Fast</li>
                                <li style={{ marginBottom: '0.5rem' }}>✅ Elementor Compatible</li>
                                <li style={{ marginBottom: '0.5rem' }}>✅ Free Starter Sites</li>
                            </ul>
                            <button className="btn btn-red" style={{ width: '100%' }}>Download Free</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const PluginReviews = () => {
    return (
        <div className="container" style={{ padding: '3rem 0' }}>
            <HeroHeader title="Plugin Reviews" subtitle="In-depth, honest reviews of premium WordPress plugins." icon={BookOpen} color="#F39C12" />
            <div className="blog-grid">
                {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="blog-card">
                        <img src={`https://images.unsplash.com/photo-${1677442135703 + i}-1787eea5ce01?w=600`} alt="Review" className="blog-card-img" />
                        <div className="blog-card-body">
                            <span className="blog-tag" style={{ background: '#F39C1211', color: '#F39C12' }}>Review</span>
                            <div className="blog-card-title">Hostinger vs Bluehost: Honest Truth</div>
                            <div className="blog-card-meta"><BookOpen size={12} /> Oct 24, 2024</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const WordPressServices = () => {
    return (
        <div className="container" style={{ padding: '3rem 0' }}>
            <HeroHeader title="Expert WordPress Services" subtitle="Need it done right? Hire our certified WordPress experts to build, optimize, or fix your site." icon={Star} color="#2980B9" />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>

                <div style={{ background: 'var(--white)', borderRadius: '16px', padding: '3rem', cursor: 'pointer', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid var(--border)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: '#e1f5fe', color: '#03a9f4', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                        <Zap size={30} />
                    </div>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Speed Optimization</h3>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flex: 1 }}>We will guarantee a 90+ score on Google PageSpeed Insights for both mobile and desktop.</p>
                    <div style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '2rem', color: 'var(--black)' }}>$199</div>
                    <button className="btn btn-outline-red" style={{ width: '100%', padding: '1rem' }}>Book Now</button>
                </div>

                <div style={{ background: 'var(--red)', color: 'white', borderRadius: '16px', padding: '3rem', cursor: 'pointer', boxShadow: '0 15px 35px var(--red-light)', transform: 'translateY(-10px)', border: '1px solid var(--red-dark)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-15px', right: '30px', background: 'var(--black)', color: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1px' }}>MOST POPULAR</div>
                    <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: 'rgba(255,255,255,0.2)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                        <Layout size={30} />
                    </div>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Custom Web Design</h3>
                    <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem', flex: 1 }}>Full website redesign using Elementor or Divi, tailored perfectly to your brand identity.</p>
                    <div style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '2rem' }}>$999</div>
                    <button className="btn" style={{ width: '100%', padding: '1rem', background: 'var(--white)', color: 'var(--red)' }}>Start Project</button>
                </div>

            </div>
        </div>
    );
};
