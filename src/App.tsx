import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Horoscope from './components/Horoscope/Horoscope';
import ZodiacSigns from './components/ZodiacSigns/ZodiacSigns';

export default function App() {
  return <Routes><Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="horoscope" element={<Horoscope />} />
    <Route path="zodiac-signs" element={<ZodiacSigns />} />
    <Route path="about" element={<About />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Route></Routes>;
}
