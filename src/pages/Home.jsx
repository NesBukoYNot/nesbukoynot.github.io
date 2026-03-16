import { ArrowRight, Leaf, ShieldCheck, Globe, Zap, Recycle, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="pt-8 max-w-7xl mx-auto px-6">
            <section className="py-12 md:py-24 mb-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                {/* Left Side: Editorial Typography */}
                <div className="flex-1 text-left space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold border border-primary/10 uppercase tracking-widest">
                        <Recycle size={14} /> Eco-Conscious Innovation
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-gray-900 leading-[0.95] tracking-tighter">
                        PURE <br />
                        <span className="text-secondary opacity-80">COIR.</span>
                    </h1>
                    <p className="text-xl text-gray-500 leading-relaxed max-w-lg font-light">
                        Transforming coconut organic waste into premium eco-friendly solutions for the modern world.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link to="/products" className="flex items-center justify-center gap-2 bg-primary text-white px-10 py-5 rounded-lg font-bold transition-all hover:bg-primary-dark">
                            Explore Catalog <ArrowRight size={20} />
                        </Link>
                        <Link to="/about" className="flex items-center justify-center gap-2 border border-gray-200 px-10 py-5 rounded-lg font-bold text-gray-500 hover:bg-gray-50">
                            Our Story
                        </Link>
                    </div>
                </div>

                {/* Right Side: Bento Benefits Grid (No Image) */}
                <div className="flex-1 w-full grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-8 rounded-3xl space-y-4 border border-gray-100 flex flex-col justify-center min-h-[200px]">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary">
                            <Leaf size={24} />
                        </div>
                        <h3 className="font-bold text-gray-900 leading-tight">100% Organic Material</h3>
                        <p className="text-xs text-gray-400 font-medium">Naturally sourced and processed.</p>
                    </div>
                    <div className="bg-primary p-8 rounded-3xl space-y-4 text-white flex flex-col justify-center min-h-[200px]">
                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className="font-bold leading-tight">Industrial Grade Strength</h3>
                        <p className="text-xs text-white/50 font-medium">Built to withstand the elements.</p>
                    </div>
                    <div className="bg-secondary p-8 rounded-3xl space-y-4 text-white flex flex-col justify-center min-h-[200px]">
                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                            <Globe size={24} />
                        </div>
                        <h3 className="font-bold leading-tight">Global Export Ready</h3>
                        <p className="text-xs text-white/50 font-medium">Standardized for every market.</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-3xl space-y-4 border border-gray-100 flex flex-col justify-center min-h-[200px]">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-secondary">
                            <Recycle size={24} />
                        </div>
                        <h3 className="font-bold text-gray-900 leading-tight">Zero Waste Circularity</h3>
                        <p className="text-xs text-gray-400 font-medium">Closing the loop on production.</p>
                    </div>
                </div>
            </section>

            <section className="mb-24 grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { label: "Waste Diverted", val: "50+ Tons", icon: <Recycle className="text-primary" /> },
                    { label: "Eco Partners", val: "120+", icon: <Globe className="text-secondary" /> },
                    { label: "Products", val: "25+", icon: <Zap className="text-amber-500" /> },
                    { label: "Happy Clients", val: "2.4k", icon: <Heart className="text-red-500" /> },
                ].map((stat, i) => (
                    <div key={i} className="bg-white border border-gray-100 p-8 rounded-2xl flex flex-col items-center text-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center mb-2">
                            {stat.icon}
                        </div>
                        <div className="text-xl font-bold text-gray-900">{stat.val}</div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
                    </div>
                ))}
            </section>

            <section className="mb-24">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">The Power of Natural Fiber</h2>
                    <p className="text-gray-500 font-light leading-relaxed">
                        Coconut coir isn't just waste—it's one of the strongest and most versatile natural fibers on Earth. Discover why it's the future of eco-friendly materials.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-10 rounded-2xl border border-gray-100">
                        <div className="w-12 h-12 bg-gray-50 text-primary rounded-xl flex items-center justify-center mb-6">
                            <Leaf size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">100% Organic</h3>
                        <p className="text-gray-500 text-sm font-light leading-relaxed">
                            Fully biodegradable and sustainably sourced. Our process returns nutrients back to the earth instead of adding to landfills.
                        </p>
                    </div>

                    <div className="bg-white p-10 rounded-2xl border border-gray-100">
                        <div className="w-12 h-12 bg-gray-50 text-secondary rounded-xl flex items-center justify-center mb-6">
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">Durable Strength</h3>
                        <p className="text-gray-500 text-sm font-light leading-relaxed">
                            Naturally resistant to water, rot, and fungi. Coir fibers can withstand years of harsh outdoor exposure without degradation.
                        </p>
                    </div>

                    <div className="bg-white p-10 rounded-2xl border border-gray-100">
                        <div className="w-12 h-12 bg-gray-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                            <Globe size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">Global Use</h3>
                        <p className="text-gray-500 text-sm font-light leading-relaxed">
                            From large-scale construction geotextiles to interior home decor, we provide solutions that scale for every environmental need.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 rounded-2xl p-12 md:p-16 text-center border border-gray-100">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Built for Excellence & Sustainability</h2>
                    <p className="text-lg text-gray-500 font-light mb-10 italic leading-relaxed">
                        "We believe that the best solutions are already created by nature. Our role is simply to innovate their application for a cleaner tomorrow."
                    </p>

                    {/* Project Metadata Section: Displays technical and academic context */}
                    <div className="pt-10 border-t border-gray-200 flex flex-wrap justify-center gap-10 md:gap-16">
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">University Partner</span>
                            <div className="text-sm font-bold text-gray-600">FEU TECH</div>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Technology Stack</span>
                            <div className="text-sm font-bold text-gray-600">VITE + REACT</div>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Design System</span>
                            <div className="text-sm font-bold text-gray-600">TAILWIND CSS</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;