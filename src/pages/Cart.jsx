import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Cart = () => {
    const cartItems = [
        { ...products[0], quantity: 2 },
        { ...products[2], quantity: 1 }
    ];

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = 150;
    const total = subtotal + shipping;

    return (
        <div className="page-container py-12 min-h-screen flex flex-col">
            <header className="page-header flex items-center justify-center gap-3">
                <ShoppingBag size={32} />
                <h1>Your Cart</h1>
            </header>

            <div className="grid lg:grid-cols-3 gap-12 mt-12">
                <div className="lg:col-span-2 space-y-6">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex flex-col sm:flex-row items-center bg-white p-6 rounded-3xl border border-gray-50 shadow-sm gap-6 hover:shadow-md transition-shadow">
                            <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>

                            <div className="flex-1 text-center sm:text-left">
                                <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                                <p className="text-sm text-gray-400 mb-2">{item.category}</p>
                                <span className="text-primary font-black">₱{item.price}</span>
                            </div>

                            <div className="flex items-center gap-4 bg-gray-50 p-2 rounded-xl border border-gray-100">
                                <button className="p-1 hover:text-primary transition-colors"><Minus size={16} /></button>
                                <span className="font-bold w-4 text-center">{item.quantity}</span>
                                <button className="p-1 hover:text-primary transition-colors"><Plus size={16} /></button>
                            </div>

                            <div className="flex flex-col items-center sm:items-end gap-2">
                                <button className="p-2 text-red-400 hover:bg-red-50 rounded-lg transition-all">
                                    <Trash2 size={20} />
                                </button>
                                <span className="text-lg font-black text-gray-800">₱{item.price * item.quantity}</span>
                            </div>
                        </div>
                    ))}

                    <div className="pt-6">
                        <Link to="/products" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                            <Plus size={18} /> Add More Items
                        </Link>
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <div className="card shadow-lg border border-gray-100 sticky top-28">
                        <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between text-gray-500 font-light">
                                <span>Subtotal</span>
                                <span className="font-bold text-gray-800">₱{subtotal}</span>
                            </div>
                            <div className="flex justify-between text-gray-500 font-light">
                                <span>Estimated Shipping</span>
                                <span className="font-bold text-gray-800">₱{shipping}</span>
                            </div>
                            <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-xl font-bold">
                                <span>Total</span>
                                <span className="text-primary text-2xl">₱{total}</span>
                            </div>
                        </div>

                        <Link to="/checkout" className="btn-primary py-4 text-lg">
                            Checkout Now <ArrowRight size={20} />
                        </Link>

                        <p className="mt-4 text-center text-xs text-gray-400 font-light uppercase tracking-widest">
                            Secure payment options available
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
