import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, History, Home, Package, LogIn, LayoutDashboard, Menu, X, Leaf, Info } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'Home', icon: <Home size={18} /> },
        { path: '/storefront', label: 'Store', icon: <LayoutDashboard size={18} /> },
        { path: '/products', label: 'Products', icon: <Package size={18} /> },
        { path: '/cart', label: 'Cart', icon: <ShoppingCart size={18} /> },
        { path: '/history', label: 'History', icon: <History size={18} /> },
        { path: '/profile', label: 'Profile', icon: <User size={18} /> },
        { path: '/about', label: 'About', icon: <Info size={18} /> },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
                        <span className="text-2xl font-black text-primary tracking-tight">NesBuko<span className="text-secondary">YNot</span></span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${isActive(link.path)
                                    ? 'bg-primary/10 text-primary'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-primary'
                                    }`}
                            >
                                {link.icon}
                                {link.label}
                            </Link>
                        ))}
                        <div className="ml-4 pl-4 border-l border-gray-100">
                            <Link
                                to="/login"
                                className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-xl font-bold transition-all hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20 active:scale-95"
                            >
                                <LogIn size={18} />
                                Login
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 transition-colors"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`lg:hidden transition-all duration-300 ease-in-out border-b border-gray-100 bg-white overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="px-4 pt-2 pb-6 space-y-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center gap-4 px-4 py-4 rounded-2xl text-base font-bold transition-all ${isActive(link.path)
                                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                : 'text-gray-600 hover:bg-gray-50'
                                }`}
                        >
                            {link.icon}
                            {link.label}
                        </Link>
                    ))}
                    <div className="pt-4 border-t border-gray-100">
                        <Link
                            to="/login"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center gap-3 w-full bg-primary text-white py-4 rounded-2xl font-bold shadow-lg shadow-primary/20"
                        >
                            <LogIn size={20} />
                            Sign In to Account
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;