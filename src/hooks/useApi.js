import { useState, useEffect } from 'react';

// Use standard relative path for production (Vercel routes /api) or localhost for dev python
const API_BASE = import.meta.env.DEV ? 'http://localhost:8000/api' : '/api';

export function useApi(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}${endpoint}`)
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
