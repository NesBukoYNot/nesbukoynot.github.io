import { CreditCard, Truck, Package, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const Checkout = () => {
    const [method, setMethod] = useState('delivery');
    const [payment, setPayment] = useState('cod');
    const [isFinished, setIsFinished] = useState(false);

    if (isFinished) {
        return (
            <div className="page-container flex items-center justify-center py-20">
                <div className="text-center card max-w-lg p-12">
                    <div className="flex justify-center mb-6">
                        <CheckCircle2 size={80} className="text-green-500" />
                    </div>
                    <h1 className="text-3xl font-bold mb-4">Order Placed!</h1>
                    <p className="text-gray-500 mb-8 font-light leading-relaxed">
                        Thank you for choosing NesBukoYNot. Your order #77123 has been received and is being processed for {method}.
                    </p>
                    <button onClick={() => window.location.href = '/'} className="btn-primary">Return to Home</button>
                </div>
            </div>
        );
    }

    return (
        <div className="page-container py-8">
            <header className="page-header mb-12">
                <h1>Complete Your Order</h1>
                <p>Select your preferred receiving and payment methods.</p>
            </header>

            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="space-y-10">
                    <section>
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Truck size={22} className="text-primary" /> Receiving Method
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={() => setMethod('pickup')}
                                className={`p-6 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all ${method === 'pickup' ? 'border-primary bg-green-50/30' : 'border-gray-100 bg-white hover:border-gray-200'
                                    }`}
                            >
                                <Package size={32} className={method === 'pickup' ? 'text-primary' : 'text-gray-400'} />
                                <span className={`font-bold ${method === 'pickup' ? 'text-primary' : 'text-gray-600'}`}>Pickup at Outlet</span>
                            </button>
                            <button
                                onClick={() => setMethod('delivery')}
                                className={`p-6 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all ${method === 'delivery' ? 'border-primary bg-green-50/30' : 'border-gray-100 bg-white hover:border-gray-200'
                                    }`}
                            >
                                <Truck size={32} className={method === 'delivery' ? 'text-primary' : 'text-gray-400'} />
                                <span className={`font-bold ${method === 'delivery' ? 'text-primary' : 'text-gray-600'}`}>Delivery</span>
                            </button>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <CreditCard size={22} className="text-primary" /> Payment Method
                        </h2>
                        <div className="space-y-4">
                            {['Cash on Delivery', 'GCash', 'Bank Transfer', 'Maya'].map((opt) => (
                                <label
                                    key={opt}
                                    className={`flex items-center justify-between p-5 rounded-2xl border-2 cursor-pointer transition-all ${payment === opt.toLowerCase() ? 'border-primary bg-green-50/30 shadow-sm' : 'border-gray-100 bg-white'
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <input
                                            type="radio"
                                            name="payment"
                                            checked={payment === opt.toLowerCase()}
                                            onChange={() => setPayment(opt.toLowerCase())}
                                            className="w-5 h-5 accent-primary"
                                        />
                                        <span className="font-bold text-gray-700">{opt}</span>
                                    </div>
                                    <ChevronRight size={18} className="text-gray-300" />
                                </label>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="lg:col-span-1">
                    <div className="card shadow-2xl border border-gray-100">
                        <h2 className="text-xl font-bold mb-8">Confirm Details</h2>

                        <div className="space-y-6 mb-10">
                            <div>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Delivery Address</span>
                                <p className="text-gray-700 font-light italic">
                                    Juan Dela Cruz<br />
                                    123 Coconut Fiber St., Brgy. Husk, Manila City, Metro Manila
                                </p>
                            </div>

                            <div className="pt-6 border-t border-gray-50">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Selected Method</span>
                                <p className="font-bold text-primary flex items-center gap-2">
                                    {method === 'delivery' ? <Truck size={16} /> : <Package size={16} />}
                                    {method === 'delivery' ? 'Standard Delivery' : 'In-store Pickup'}
                                </p>
                            </div>

                            <div className="pt-6 border-t border-gray-50">
                                <div className="flex justify-between items-center text-2xl font-black">
                                    <span>Total to Pay:</span>
                                    <span className="text-primary">₱650</span>
                                </div>
                                <p className="text-xs text-gray-400 mt-2">Inc. VAT and shipping fees</p>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsFinished(true)}
                            className="btn-primary py-5 rounded-2xl text-xl shadow-lg shadow-primary/20"
                        >
                            Place My Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
