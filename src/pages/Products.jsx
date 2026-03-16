import { useState } from 'react';
import { products } from '../data/products';
import { Search, Filter, ShoppingCart, Info, LayoutGrid, List } from 'lucide-react';

const Products = () => {
    const [filter, setFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    // Dynamically extract unique categories from the products data to build filter buttons
    const categories = ['All', ...new Set(products.map(p => p.category))];

    // Memoize or compute filtered results based on both category selection and search query
    const filteredProducts = products.filter(product => {
        const matchesCategory = filter === 'All' || product.category === filter;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="page-container pt-12 pb-24 min-h-screen flex flex-col justify-start">
            <header className="page-header mb-16 text-left border-b border-gray-100 pb-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 block">Product Inventory</span>
                        <h1 className="text-4xl font-bold text-gray-900">Our Full <span className="text-secondary">Catalog</span></h1>
                        <p className="mt-3 text-gray-500 font-light max-w-xl">
                            Browsing our sustainable collection of biodegradable materials for professional and personal use.
                        </p>
                    </div>
                </div>
            </header>

            <div className="bg-white p-4 rounded-xl border border-gray-200 mb-10 flex flex-col md:flex-row gap-6 items-center justify-between">
                <div className="flex flex-wrap items-center gap-2">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-5 py-2 rounded-lg text-xs font-bold uppercase transition-all ${filter === cat
                                ? 'bg-primary text-white'
                                : 'text-gray-400 hover:text-gray-600'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-4 w-full md:w-96">
                    <div className="relative flex-1">
                        <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                            <Search className="w-4 h-4" />
                        </span>
                        <input
                            type="text"
                            placeholder="Find sustainable materials..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 border border-transparent focus:bg-white focus:border-gray-200 outline-none transition-all text-sm font-medium text-gray-700"
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
                    <div key={product.id} className="bg-white rounded-xl p-4 border border-gray-100 flex flex-col transition-all hover:border-gray-200">
                        <div className="relative h-48 rounded-lg overflow-hidden mb-4 bg-gray-50">
                            <img
                                src={product.image}
                                alt={product.name}
                                className={`w-full h-full object-cover ${
                                    product.id === 4 ? 'object-[center_15%]' : ''
                                }`}
                            />
                            {product.tag && (
                                <span className="absolute top-3 left-3 px-2 py-1 rounded bg-white/90 text-[8px] font-bold text-gray-600 uppercase tracking-widest shadow-sm">
                                    {product.tag}
                                </span>
                            )}
                        </div>

                        <div className="flex-1 px-1">
                            <div className="flex justify-between items-start mb-1">
                                <span className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">{product.category}</span>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-1 text-base">{product.name}</h3>
                            <span className="text-xl font-bold text-primary">₱{product.price.toLocaleString()}</span>
                        </div>

                        <div className="mt-5 flex gap-2 px-1 mb-1">
                            <button className="flex-1 bg-primary text-white py-3 rounded-lg text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2">
                                <ShoppingCart size={14} /> Add to Cart
                            </button>
                            <button className="w-10 h-10 border border-gray-100 rounded-lg text-gray-300 hover:text-primary hover:border-primary/20 transition-all flex items-center justify-center">
                                <Info size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-24 bg-gray-50 rounded-xl border border-dashed border-gray-200">
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
