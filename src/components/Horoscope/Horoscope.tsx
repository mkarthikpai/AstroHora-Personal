import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { zodiacSigns } from '../../data/zodiac';
import './horoscope.css';

type Period = 'daily' | 'weekly' | 'monthly';
interface Reading { sign?: string; horoscope?: string; [key: string]: unknown; }
const periods: {label:string;value:Period;description:string}[] = [
 {label:'Daily',value:'daily',description:'A little perspective for today'},
 {label:'Weekly',value:'weekly',description:'Themes to reflect on this week'},
 {label:'Monthly',value:'monthly',description:'A wider view of the month ahead'},
];

export default function Horoscope() {
 const [searchParams, setSearchParams] = useSearchParams();
 const initialSign = searchParams.get('sign')?.toLowerCase() || '';
 const [sign, setSign] = useState(initialSign);
 const [period, setPeriod] = useState<Period>('daily');
 const [reading, setReading] = useState<Reading | null>(null);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState('');
 const [retryCount, setRetryCount] = useState(0);
 const selected = zodiacSigns.find(item => item.value === sign);

 useEffect(() => { if (initialSign && zodiacSigns.some(item => item.value === initialSign)) setSign(initialSign); }, [initialSign]);
 useEffect(() => {
  if (!sign) { setReading(null); setError(''); return; }
  const controller = new AbortController();
  async function loadReading() {
   setLoading(true); setError(''); setReading(null);
   try {
    const response = await fetch(`https://freehoroscopeapi.com/api/v1/get-horoscope/${period}?sign=${encodeURIComponent(sign)}`, { signal: controller.signal });
    if (!response.ok) throw new Error('The horoscope service is temporarily unavailable. Please try again.');
    const json = await response.json();
    if (!json?.data?.horoscope) throw new Error('No reading was returned for this sign. Please try another sign or period.');
    setReading(json.data);
   } catch (err) {
    if (err instanceof DOMException && err.name === 'AbortError') return;
    setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
   } finally { if (!controller.signal.aborted) setLoading(false); }
  }
  void loadReading();
  return () => controller.abort();
 }, [sign, period, retryCount]);

 const chooseSign = (value: string) => { setSign(value); setSearchParams(value ? {sign:value} : {}); };
 return <div className="horoscope-page page-container"><section className="page-hero compact-hero"><div className="eyebrow"><span className="eyebrow-line"/> YOUR COSMIC CHECK-IN</div><h1>Your horoscope, <em>your moment.</em></h1><p>Choose your zodiac sign and a time frame to explore a reading for reflection.</p></section>
  <div className="period-tabs" role="tablist" aria-label="Horoscope period">{periods.map(item => <button type="button" role="tab" aria-selected={period===item.value} className={`period-tab ${period===item.value?'selected':''}`} key={item.value} onClick={() => setPeriod(item.value)}><span>{item.label}</span><small>{item.description}</small></button>)}</div>
  <section className="reading-layout"><div className="sign-picker-panel"><div className="panel-heading"><div><span className="eyebrow">STEP 01</span><h2>Choose your sign</h2></div><span className="panel-count">12 signs</span></div><div className="sign-picker-grid">{zodiacSigns.map(item => <button type="button" key={item.value} className={`sign-picker ${sign===item.value?'chosen':''}`} onClick={() => chooseSign(item.value)} aria-pressed={sign===item.value}><img src={item.image} alt=""/><span>{item.label}</span><small>{item.dates}</small></button>)}</div></div>
  <div className="reading-panel"><div className="panel-heading"><div><span className="eyebrow">STEP 02</span><h2>Your reading</h2></div><span className="reading-period">{periods.find(p=>p.value===period)?.label}</span></div>{!sign ? <div className="reading-empty"><div className="empty-moon">☾</div><h3>Your stars are waiting</h3><p>Select one of the twelve signs to see its {period} horoscope here.</p></div> : <div className="reading-content"><div className="reading-sign-art"><img src={selected?.image} alt={`${selected?.label} symbol`}/></div><div className="reading-sign-meta"><span className="eyebrow">{selected?.dates}</span><h3>{selected?.label}</h3><p>{selected?.element} sign · {selected?.quality}</p></div>{loading ? <div className="reading-status"><span className="spinner"/><p>Reading the stars…</p></div> : error ? <div className="reading-error" role="alert"><strong>We couldn't load your reading.</strong><p>{error}</p><button className="button button-primary" onClick={() => setRetryCount(count => count + 1)}>Try again</button></div> : reading ? <div className="horoscope-text"><div className="quote-mark">“</div><p>{reading.horoscope}</p><div className="reading-disclaimer">Take what resonates, leave what doesn't. This reading is for reflection and entertainment.</div></div> : null}</div>}</div></section>
  <p className="horoscope-footnote">Astrology is a cultural and spiritual tradition, not a scientifically validated way to predict events.</p>
 </div>;
}
