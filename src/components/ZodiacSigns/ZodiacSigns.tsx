import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { zodiacSigns } from '../../data/zodiac';
import './zodiac-signs.css';

export default function ZodiacSigns() {
 const [query, setQuery] = useState('');
 const [element, setElement] = useState('All');
 const signs = useMemo(() => zodiacSigns.filter(sign => sign.label.toLowerCase().includes(query.toLowerCase()) && (element==='All' || sign.element===element)), [query,element]);
 return <div className="page-container zodiac-page"><section className="page-hero"><div className="eyebrow"><span className="eyebrow-line"/> TWELVE SIGNS · FOUR ELEMENTS</div><h1>Get to know your <em>zodiac.</em></h1><p>Explore the symbols, dates and elements behind each sign. Start with the one you know, or discover a new one.</p></section><div className="zodiac-tools"><label className="search-field"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search a zodiac sign…" aria-label="Search zodiac signs"/></label><div className="element-filters" aria-label="Filter by element">{['All','Fire','Earth','Air','Water'].map(item=><button key={item} className={element===item?'filter-active':''} onClick={()=>setElement(item)}>{item}</button>)}</div></div><div className="zodiac-directory-grid">{signs.map(sign=><article className="directory-card" key={sign.value}><div className="directory-card-top"><img src={sign.image} alt={`${sign.label} symbol`}/><span className={`element-pill ${sign.element.toLowerCase()}`}>{sign.element}</span></div><span className="sign-date">{sign.dates}</span><h2>{sign.label}</h2><h3>{sign.tagline}</h3><p>{sign.description}</p><div className="directory-card-bottom"><span>{sign.quality} sign</span><Link to={`/horoscope?sign=${sign.value}`}>Read horoscope <span>↗</span></Link></div></article>)}</div>{signs.length===0&&<div className="no-results"><h2>No signs found</h2><p>Try another name or select a different element.</p><button className="button button-primary" onClick={()=>{setQuery('');setElement('All')}}>Clear filters</button></div>}</div>;
}
