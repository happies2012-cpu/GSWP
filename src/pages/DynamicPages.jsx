import React from 'react';
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
  const { data, loading } = useApi(`/tutorials/${category}`);
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
  const { data, loading } = useApi(`/articles/${category}`);
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
  const { data, loading } = useApi(`/services`);
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
