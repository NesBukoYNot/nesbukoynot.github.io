import { products } from '../data/products';
import { ShoppingCart, Star, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Storefront = () => {
    const featured = products.filter(p => ["Best Seller", "New", "Trending"].includes(p.tag));

    return (
        <div className="page-container py-12 min-h-screen flex flex-col">
            <header className="mb-16 text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-gray-50 text-gray-400 text-[10px] font-bold mb-6 border border-gray-100 uppercase tracking-widest">
                    <Sparkles size={12} /> Curated Picks
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Featured Collections</h1>
                <p className="text-gray-500 font-light leading-relaxed">
                    Discover the finest sustainable products handpicked by our experts. From garden essentials to industrial solutions, experience the best of coconut coir.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
                {featured.map((product) => (
                    <div key={product.id} className="group flex flex-col bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-gray-200 transition-all">
                        <div className="relative h-64 overflow-hidden bg-gray-50">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4">
                                <span className={`px-3 py-1 rounded text-[8px] font-bold uppercase tracking-widest shadow-sm ${
                                    product.tag === 'New' ? 'bg-primary text-white' :
                                    product.tag === 'Best Seller' ? 'bg-secondary text-white' :
                                    'bg-gray-800 text-white'
                                }`}>
                                    {product.tag}
                                </span>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{product.category}</span>
                                <div className="flex text-amber-400 gap-0.5 opacity-60">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} size={10} fill="currentColor" />
                                    ))}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                            <p className="text-gray-500 text-xs font-light mb-6 line-clamp-2">{product.description}</p>

                            <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                                <span className="text-2xl font-bold text-primary">₱{product.price.toLocaleString()}</span>
                                <button className="w-10 h-10 bg-gray-50 text-gray-400 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                    <ShoppingCart size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-20 text-center">
                <Link to="/products" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-bold text-sm transition-all hover:bg-black">
                    View Complete Catalog <ArrowRight size={18} />
                </Link>
            </div>
        </div>
    );
};

export default Storefront;
