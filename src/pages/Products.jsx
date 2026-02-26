import { useState } from 'react';
import { products } from '../data/products';
import { Search, Filter, ShoppingCart, Info, LayoutGrid, List } from 'lucide-react';

const Products = () => {
    const [filter, setFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const categories = ['All', ...new Set(products.map(p => p.category))];

    const filteredProducts = products.filter(product => {
        const matchesCategory = filter === 'All' || product.category === filter;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="page-container py-12">
            <header className="page-header mb-16 text-left border-b border-gray-100 pb-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <span className="text-[10px] font-black text-primary/40 uppercase tracking-[0.3em] mb-4 block">Product Inventory</span>
                        <h1 className="text-5xl font-black text-gray-900 tracking-tight">Our Full <span className="text-primary">Catalog</span></h1>
                        <p className="mt-4 text-gray-500 font-light max-w-xl text-lg">
                            Browsing our sustainable collection of biodegradable materials for professional and personal use.
                        </p>
                    </div>
                </div>
            </header>

            <div className="bg-white p-6 rounded-[2rem] shadow-xl shadow-gray-100/50 border border-gray-50 mb-12 flex flex-col lg:flex-row gap-8 items-center justify-between">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full lg:w-auto">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-3 rounded-2xl text-xs font-black tracking-widest uppercase transition-all ${filter === cat
                                ? 'bg-primary text-white shadow-xl shadow-primary/30 scale-105'
                                : 'bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-4 w-full lg:w-[28rem]">
                    <div className="relative flex-1 group">
                        <span className="absolute inset-y-0 left-0 pl-5 flex items-center text-gray-400 group-focus-within:text-primary transition-all duration-500 pointer-events-none">
                            <Search className="w-5 h-5 group-focus-within:scale-110 group-focus-within:rotate-6" />
                        </span>
                        <input
                            type="text"
                            placeholder="What sustainable materials are you looking for?"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-14 pr-6 py-4 rounded-[1.5rem] bg-gray-50/50 border-2 border-transparent outline-none ring-0 focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/10 transition-all duration-500 font-bold text-gray-700 placeholder:text-gray-400 placeholder:font-medium shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-lg focus:shadow-xl hover:bg-white group-hover:border-gray-100"
                        />
                    </div>
                </div>
            </div>

            <div className="mb-8 flex justify-between items-center px-4">
                <span className="text-xs font-bold text-gray-400 italic">
                    Showing <span className="text-primary font-black">{filteredProducts.length}</span> sustainable products
                </span>
                <div className="flex gap-2">
                    <button className="p-2 text-primary rounded-lg bg-primary/10 transition-colors"><LayoutGrid size={18} /></button>
                    <button className="p-2 text-gray-300 rounded-lg hover:bg-gray-50 transition-colors"><List size={18} /></button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="bg-white rounded-[2rem] p-5 shadow-xl shadow-gray-100/30 border border-gray-50 flex flex-col group hover:shadow-2xl hover:border-primary/10 transition-all duration-500">
                        <div className="relative h-56 rounded-[1.5rem] overflow-hidden mb-6 bg-gray-50">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            {product.tag && (
                                <span className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-white/90 backdrop-blur-md text-[9px] font-black text-primary uppercase tracking-widest shadow-lg">
                                    {product.tag}
                                </span>
                            )}
                        </div>

                        <div className="flex-1 px-2">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-[10px] font-bold text-primary/30 uppercase tracking-widest">{product.category}</span>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2 leading-tight group-hover:text-primary transition-colors text-lg">{product.name}</h3>
                            <span className="text-2xl font-black text-primary tracking-tighter">₱{product.price.toLocaleString()}</span>
                        </div>

                        <div className="mt-6 flex gap-3 px-2 mb-2">
                            <button className="flex-1 bg-primary text-white py-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-2">
                                <ShoppingCart size={16} /> Add to Cart
                            </button>
                            <button className="w-12 h-12 border-2 border-gray-50 rounded-2xl text-gray-200 hover:text-primary hover:border-primary/20 hover:bg-primary/5 transition-all flex items-center justify-center">
                                <Info size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-40 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
                        <Search size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-400">No products found</h3>
                    <p className="text-gray-300 mt-2 font-light">Try adjusting your search query or filters.</p>
                    <button
                        onClick={() => { setFilter('All'); setSearchQuery(''); }}
                        className="mt-8 text-primary font-black uppercase tracking-widest text-xs hover:underline"
                    >
                        Clear All Filters
                    </button>
                </div>
            )}
        </div>
    );
};

export default Products;
