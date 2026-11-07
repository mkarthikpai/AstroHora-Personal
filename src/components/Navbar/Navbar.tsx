import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Horoscope', to: '/horoscope' },
  { label: 'Zodiac signs', to: '/zodiac-signs' },
  { label: 'About', to: '/about' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><nav className="nav-wrap" aria-label="Main navigation">
    <Link to="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">✦</span><span>Astro<span className="brand-accent">Hora</span><small>YOUR COSMIC COMPASS</small></span></Link>
    <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(v => !v)}>{open ? '✕' : '☰'}</button>
    <div className={`nav-links ${open ? 'is-open' : ''}`}>
      {links.map(link => <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={() => setOpen(false)} className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>{link.label}</NavLink>)}
      <Link className="nav-cta" to="/horoscope" onClick={() => setOpen(false)}>Read my horoscope <span>↗</span></Link>
    </div>
  </nav></header>;
}
