import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './layout.css';

export default function Layout() {
  const location = useLocation();
  return <div className="app-shell"><Navbar /><main className="page-content" key={location.pathname}><Outlet /></main><Footer /></div>;
}
