import { Mail, MapPin, Phone, Github, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
                            <span className="text-xl font-bold tracking-tight text-white">NesBuko<span className="text-secondary">YNot</span></span>
                        </div>
                        <p className="text-white/50 text-xs font-light leading-relaxed max-w-xs">
                            Pioneering sustainable solutions through high-quality coconut coir products. Transforming agricultural waste into eco-friendly wonders.
                        </p>
                        <div className="flex gap-2">
                            <a href="#" className="w-8 h-8 bg-white/5 rounded flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10">
                                <Facebook size={14} />
                            </a>
                            <a href="#" className="w-8 h-8 bg-white/5 rounded flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10">
                                <Github size={14} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold mb-6 text-secondary uppercase tracking-widest">Shop</h4>
                        <ul className="space-y-3 text-xs text-white/50">
                            <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
                            <li><Link to="/storefront" className="hover:text-white transition-colors">Featured</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold mb-6 text-secondary uppercase tracking-widest">Account</h4>
                        <ul className="space-y-3 text-xs text-white/50">
                            <li><Link to="/profile" className="hover:text-white transition-colors">Profile</Link></li>
                            <li><Link to="/login" className="hover:text-white transition-colors">Login</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold mb-6 text-secondary uppercase tracking-widest">Contact</h4>
                        <ul className="space-y-6 text-white/70">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-accent flex-shrink-0" />
                                <span className="text-sm">P. Paredes St., Sampaloc, Manila 1015</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-accent flex-shrink-0" />
                                <span className="text-sm">(02) 8281 8888</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={20} className="text-accent flex-shrink-0" />
                                <div className="flex flex-col text-sm">
                                    <span>info@feutech.edu.ph</span>
                                    <span>ccs_it@feutech.edu.ph</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-[10px] text-white/20 uppercase tracking-[0.2em]">
                        FEN TECH ADVANCED WEB DESIGN • FINALS PROJECT
                    </div>
                    <div className="text-[10px] text-white/20 uppercase tracking-[0.2em]">
                        © {new Date().getFullYear()} NesBukoYNot Group
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;