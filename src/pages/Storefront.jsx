import { products } from '../data/products';
import { ShoppingCart, Star, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Storefront = () => {
    // Featured products are "Best Seller", "New", or "Trending"
    const featured = products.filter(p => ["Best Seller", "New", "Trending"].includes(p.tag));

    return (
        <div className="page-container py-12">
            <header className="page-header relative overflow-hidden p-16 rounded-[2.5rem] bg-gradient-to-br from-primary to-primary-hover text-white mb-20 shadow-2xl">
                <div className="relative z-10 max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-accent text-[10px] font-bold mb-6 backdrop-blur-md uppercase tracking-widest">
                        <Sparkles size={12} /> Curated Picks
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight leading-tight">Featured <span className="text-accent italic">Collections</span></h1>
                    <p className="text-white/80 font-light leading-relaxed text-lg">
                        Discover the finest sustainable products handpicked by our experts. From garden essentials to industrial solutions, experience the best of coconut coir.
                    </p>
                </div>

                {/* Decorative circles */}
                <div className="absolute top-[-20%] right-[-10%] w-80 h-80 bg-white/5 rounded-full blur-[60px]"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-40 h-40 bg-accent/10 rounded-full blur-[40px]"></div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {featured.map((product) => (
                    <div key={product.id} className="group flex flex-col bg-white rounded-[2rem] shadow-xl shadow-gray-100/50 border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                        {/* Image Container */}
                        <div className="relative h-72 overflow-hidden bg-gray-50">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-6 left-6">
                                <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg ${product.tag === 'New' ? 'bg-blue-600 text-white' :
                                        product.tag === 'Best Seller' ? 'bg-amber-500 text-white' :
                                            'bg-primary text-accent'
                                    }`}>
                                    {product.tag}
                                </span>
                            </div>
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <button className="p-4 bg-white text-primary rounded-2xl shadow-2xl transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 font-bold flex items-center gap-2 hover:bg-primary hover:text-white">
                                    <ShoppingCart size={20} /> Add to Cart
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-[10px] font-black text-primary/40 uppercase tracking-[0.2em]">{product.category}</span>
                                <div className="flex text-amber-400 gap-0.5">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} size={14} fill="currentColor" />
                                    ))}
                                </div>
                            </div>
                            <h3 className="text-2xl font-black text-gray-800 mb-3 group-hover:text-primary transition-colors leading-tight">{product.name}</h3>
                            <p className="text-gray-500 text-sm font-light mb-8 line-clamp-3 leading-relaxed">{product.description}</p>

                            <div className="mt-auto pt-8 border-t border-gray-50 flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Price</span>
                                    <span className="text-3xl font-black text-primary tracking-tighter">₱{product.price.toLocaleString()}</span>
                                </div>
                                <Link to="/products" className="w-12 h-12 bg-gray-50 text-primary rounded-2xl flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
                                    <ArrowRight size={24} />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-24 text-center">
                <Link to="/products" className="inline-flex items-center gap-3 bg-secondary text-white px-12 py-5 rounded-2xl font-black text-lg transition-all hover:bg-secondary-hover hover:scale-105 hover:shadow-2xl active:scale-95 shadow-xl shadow-secondary/20">
                    View Complete Catalog <ArrowRight size={22} />
                </Link>
            </div>
        </div>
    );
};

export default Storefront;
