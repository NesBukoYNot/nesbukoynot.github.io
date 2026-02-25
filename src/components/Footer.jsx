import { Leaf, Mail, MapPin, Phone, Github, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                                <Leaf size={24} className="text-accent" fill="currentColor" />
                            </div>
                            <span className="text-2xl font-black tracking-tight">NesBuko<span className="text-secondary">YNot</span></span>
                        </div>
                        <p className="text-white/70 font-light leading-relaxed">
                            Pioneering sustainable solutions through high-quality coconut coir products. Transforming agricultural waste into eco-friendly wonders for gardening, construction, and lifestyle.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors border border-white/10">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors border border-white/10">
                                <Github size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors border border-white/10">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-8 text-accent">Shop Catalog</h4>
                        <ul className="space-y-4 text-white/70">
                            <li><Link to="/products" className="hover:text-white transition-colors">All Products</Link></li>
                            <li><Link to="/storefront" className="hover:text-white transition-colors">Featured Items</Link></li>
                            <li><Link to="/cart" className="hover:text-white transition-colors">Shopping Cart</Link></li>
                            <li><Link to="/history" className="hover:text-white transition-colors">Order History</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-8 text-accent">My Account</h4>
                        <ul className="space-y-4 text-white/70">
                            <li><Link to="/profile" className="hover:text-white transition-colors">Profile Details</Link></li>
                            <li><Link to="/login" className="hover:text-white transition-colors">Member Login</Link></li>
                            <li><Link to="/register" className="hover:text-white transition-colors">Join Community</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">About Team</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-8 text-accent">Get In Touch</h4>
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

                <div className="pt-8 border-t border-white/10 text-center">
                    <p className="text-accent/60 italic text-sm mb-4 max-w-2xl mx-auto">
                        "For educational purposes only, and no copyright infringement is intended."
                    </p>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs tracking-widest uppercase font-bold">
                        <span>FEU TECH ADVANCED WEB DESIGN</span>
                        <span>© {new Date().getFullYear()} NesBukoYNot Group. All rights reserved.</span>
                        <span>FINALS PROJECT</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;