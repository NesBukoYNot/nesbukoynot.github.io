import { History, Receipt, ChevronRight, CheckCircle, Package } from 'lucide-react';

const TransactionHistory = () => {
    const historyList = [
        {
            id: "TRX-99812",
            date: "Feb 18, 2026",
            items: "Eco-Coir Garden Pots (x2)",
            total: 650,
            status: "Delivered",
            method: "Online Payment"
        },
        {
            id: "TRX-99745",
            date: "Jan 24, 2026",
            items: "Coconut Fiber Brush, Natural Fiber Doormat",
            total: 570,
            status: "Completed",
            method: "Cash on Delivery"
        },
        {
            id: "TRX-99601",
            date: "Dec 12, 2025",
            items: "Industrial Geotextile Mesh (x5)",
            total: 7500,
            status: "Completed",
            method: "Bank Transfer"
        }
    ];

    return (
        <div className="page-container py-12 min-h-screen flex flex-col">
            <header className="page-header flex items-center justify-center gap-3">
                <History size={32} />
                <h1>Transaction History</h1>
            </header>

            <div className="max-w-4xl mx-auto mt-12 space-y-6">
                {historyList.map((trx) => (
                    <div key={trx.id} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-6 hover:border-primary/30 transition-all cursor-pointer group">
                        <div className="w-16 h-16 bg-accent/30 text-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                            <Receipt size={28} />
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                                <span className="text-xs font-bold text-gray-400 font-mono uppercase tracking-wider">{trx.id}</span>
                                <span className="hidden md:inline text-gray-300">•</span>
                                <span className="text-xs font-semibold text-primary">{trx.date}</span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 line-clamp-1">{trx.items}</h3>
                            <p className="text-sm text-gray-400 font-light">{trx.method}</p>
                        </div>

                        <div className="flex flex-col items-center md:items-end gap-2">
                            <span className="text-xl font-black text-gray-800">₱{trx.total}</span>
                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-600 text-[10px] font-bold uppercase tracking-widest border border-green-100">
                                <CheckCircle size={12} /> {trx.status}
                            </div>
                        </div>

                        <div className="hidden md:block text-gray-300 group-hover:text-primary transition-colors">
                            <ChevronRight size={24} />
                        </div>
                    </div>
                ))}

                {historyList.length === 0 && (
                    <div className="text-center py-20 card grayscale opacity-50">
                        <Package size={64} className="mx-auto mb-4 text-gray-400" />
                        <p className="text-gray-500 font-light italic">No transaction history found.</p>
                    </div>
                )}
            </div>

            <div className="mt-12 text-center text-sm text-gray-400 font-light italic">
                * All transactions are placeholders for educational purposes only.
            </div>
        </div>
    );
};

export default TransactionHistory;
