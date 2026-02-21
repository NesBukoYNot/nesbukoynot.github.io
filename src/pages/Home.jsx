import { ArrowRight, Leaf, ShieldCheck, Globe, Zap, Recycle, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="page-container">
            {/* Hero Section */}
            <section className="relative overflow-hidden rounded-[2rem] bg-primary text-white p-8 md:p-16 mb-20 shadow-2xl min-h-[500px] flex items-center">
                <div className="relative z-10 max-w-3xl text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-accent text-xs font-bold mb-8 backdrop-blur-md border border-white/10 uppercase tracking-[0.2em]">
                        <Recycle size={14} /> Eco-Conscious Innovation
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
                        Revolutionizing <span className="text-accent italic">Nature</span> with Coconut Coir
                    </h1>
                    <p className="text-lg md:text-xl opacity-80 mb-12 leading-relaxed font-light max-w-2xl">
                        Discover the limitless potential of coconut husk fiber. We transform recycled organic waste into premium eco-friendly solutions for sustainable living and industry.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5">
                        <Link to="/products" className="group flex items-center justify-center gap-3 bg-accent text-primary px-10 py-5 rounded-2xl font-black text-lg transition-all hover:scale-105 hover:bg-white active:scale-95 shadow-xl shadow-black/20">
                            Explore Catalog <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/storefront" className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/20 backdrop-blur-sm px-10 py-5 rounded-2xl font-bold transition-all active:scale-95">
                            Featured Products
                        </Link>
                    </div>
                </div>

                {/* Decorative Background Elements */}
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-[-20%] left-[-5%] w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[80px] pointer-events-none"></div>

                {/* Abstract Line Art */}
                <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-10 pointer-events-none hidden lg:block">
                    <svg viewBox="0 0 500 500" className="w-full h-full stroke-white fill-none stroke-[0.5]">
                        <path d="M500,500 C400,450 350,300 450,150 C550,0 300,50 150,100 C0,150 50,400 500,500" />
                        <path d="M500,0 C400,50 350,200 450,350 C550,500 300,450 150,400 C0,350 50,100 500,0" />
                    </svg>
                </div>
            </section>

            {/* Stats / Impact Section */}
            <section className="mb-24 grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { label: "Waste Diverted", val: "50+ Tons", icon: <Recycle className="text-primary" /> },
                    { label: "Eco Partners", val: "120+", icon: <Globe className="text-secondary" /> },
                    { label: "Products", val: "25+", icon: <Zap className="text-amber-500" /> },
                    { label: "Happy Clients", val: "2.4k", icon: <Heart className="text-red-500" /> },
                ].map((stat, i) => (
                    <div key={i} className="card p-6 flex flex-col items-center text-center gap-3 border-none shadow-xl shadow-gray-100/50 bg-gradient-to-b from-white to-gray-50/50">
                        <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center mb-2">
                            {stat.icon}
                        </div>
                        <div className="text-2xl font-black text-gray-800">{stat.val}</div>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
                    </div>
                ))}
            </section>

            {/* Why Choose Coir? - Features */}
            <section className="mb-24">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-black text-primary mb-6 tracking-tight">The Power of Natural Fiber</h2>
                    <p className="text-gray-500 font-light leading-relaxed">
                        Coconut coir isn't just waste—it's one of the strongest and most versatile natural fibers on Earth. Discover why it's the future of eco-friendly materials.
                    </p>
                    <div className="w-16 h-1.5 bg-secondary mx-auto mt-8 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    <div className="group bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-100/50 border border-gray-100 hover:border-primary/20 transition-all hover:shadow-2xl hover:-translate-y-2">
                        <div className="w-16 h-16 bg-green-100 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                            <Leaf size={32} />
                        </div>
                        <h3 className="text-2xl font-black mb-4 text-gray-800">100% Organic</h3>
                        <p className="text-gray-500 font-light leading-relaxed">
                            Fully biodegradable and sustainably sourced. Our process returns nutrients back to the earth instead of adding to landfills.
                        </p>
                    </div>

                    <div className="group bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-100/50 border border-gray-100 hover:border-secondary/20 transition-all hover:shadow-2xl hover:-translate-y-2">
                        <div className="w-16 h-16 bg-amber-100 text-secondary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-white transition-colors">
                            <ShieldCheck size={32} />
                        </div>
                        <h3 className="text-2xl font-black mb-4 text-gray-800">Durable Strength</h3>
                        <p className="text-gray-500 font-light leading-relaxed">
                            Naturally resistant to water, rot, and fungi. Coir fibers can withstand years of harsh outdoor exposure without degradation.
                        </p>
                    </div>

                    <div className="group bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-100/50 border border-gray-100 hover:border-blue-200 transition-all hover:shadow-2xl hover:-translate-y-2">
                        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Globe size={32} />
                        </div>
                        <h3 className="text-2xl font-black mb-4 text-gray-800">Global Use</h3>
                        <p className="text-gray-500 font-light leading-relaxed">
                            From large-scale construction geotextiles to interior home decor, we provide solutions that scale for every environmental need.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="bg-accent/30 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-4xl font-black text-primary mb-8 tracking-tight">Built for Excellence & Sustainability</h2>
                    <p className="text-lg text-secondary font-medium mb-12 italic leading-relaxed">
                        "We believe that the best solutions are already created by nature. Our role is simply to innovate their application for a cleaner tomorrow."
                    </p>

                    <div className="pt-10 border-t border-primary/10 flex flex-wrap justify-center gap-10 md:gap-20">
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-primary/40">University Partner</span>
                            <div className="text-xl font-black text-primary/80">FEU TECH</div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-primary/40">Technology Stack</span>
                            <div className="text-xl font-black text-primary/80">VITE + REACT</div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-primary/40">Design System</span>
                            <div className="text-xl font-black text-primary/80">TAILWIND CSS</div>
                        </div>
                    </div>
                </div>

                {/* Background Text Deco */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-black/[0.02] whitespace-nowrap pointer-events-none select-none">
                    NESBUKOYNOT 2026
                </div>
            </section>
        </div>
    );
};

export default Home;