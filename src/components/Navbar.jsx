import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, History, Home, Package, LogIn, LayoutDashboard } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'Home', icon: <Home size={20} /> },
        { path: '/storefront', label: 'Store', icon: <LayoutDashboard size={20} /> },
        { path: '/products', label: 'Products', icon: <Package size={20} /> },
        { path: '/cart', label: 'Cart', icon: <ShoppingCart size={20} /> },
        { path: '/history', label: 'History', icon: <History size={20} /> },
        { path: '/profile', label: 'Profile', icon: <User size={20} /> },
    ];

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="logo-container">
                    <div className="logo-icon">🥥</div>
                    <span className="logo-text">NesBukoYNot</span>
                </Link>

                <div className="nav-links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`nav-item ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.icon}
                            <span>{link.label}</span>
                        </Link>
                    ))}
                    <Link to="/login" className="login-btn">
                        <LogIn size={20} />
                        <span>Login</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
