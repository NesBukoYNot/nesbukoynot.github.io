import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, History, Home, Package, LogIn, LayoutDashboard, Menu, X, Leaf, Info } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Inject the brand logo as the site favicon dynamically on mount
    useEffect(() => {
        const links = document.querySelectorAll("link[rel*='icon']");
        if (links.length > 0) {
            links.forEach(link => {
                link.href = '/logo.png';
                link.removeAttribute('type');
            });
        } else {
            const newLink = document.createElement('link');
            newLink.rel = 'icon';
            newLink.href = '/logo.png';
            document.head.appendChild(newLink);
        }
    }, []);

    const navLinks = [
        { path: '/', label: 'Home', icon: <Home size={18} /> },
        { path: '/storefront', label: 'Store', icon: <LayoutDashboard size={18} /> },
        { path: '/products', label: 'Products', icon: <Package size={18} /> },
        { path: '/cart', label: 'Cart', icon: <ShoppingCart size={18} /> },
        { path: '/history', label: 'History', icon: <History size={18} /> },
        { path: '/profile', label: 'Profile', icon: <User size={18} /> },
        { path: '/about', label: 'About', icon: <Info size={18} /> },
    ];

    // Helper function to detect if the current route matches the link path
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <Link to="/" className="flex items-center gap-2 group">
                        <img src="/logo.png" alt="Logo" width="32" height="32" className="w-8 h-8 object-contain" fetchPriority="high" decoding="sync" loading="eager" />
                        <span className="text-xl font-bold text-gray-900 tracking-tight">NesBuko<span className="text-secondary">YNot</span></span>
                    </Link>

                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${isActive(link.path)
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                {link.icon}
                                {link.label}
                            </Link>
                        ))}
                        <div className="ml-2 pl-4 border-l border-gray-100 flex items-center gap-2">
                            <Link 
                                to="/login" 
                                className="px-4 py-2 rounded-md font-medium text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all"
                            >
                                Log In
                            </Link>
                            <Link
                                to="/register"
                                className="bg-primary text-white px-5 py-2 rounded-md font-medium text-sm transition-all hover:bg-primary-dark"
                            >
                                Register
                            </Link>
                        </div>
                    </div>

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

            <div className={`lg:hidden transition-all duration-300 ease-in-out border-b border-gray-100 bg-white overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="px-4 pt-2 pb-6 space-y-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${isActive(link.path)
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-600 hover:bg-gray-50'
                                }`}
                        >
                            {link.icon}
                            {link.label}
                        </Link>
                    ))}
                    <div className="pt-4 border-t border-gray-100 grid grid-cols-2 gap-3">
                        <Link
                            to="/login"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center py-3 rounded-lg text-sm font-bold bg-gray-50 text-gray-600"
                        >
                            Log In
                        </Link>
                        <Link
                            to="/register"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center py-3 rounded-lg text-sm font-bold bg-primary text-white"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;