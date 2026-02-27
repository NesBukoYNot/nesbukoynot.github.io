import { UserPlus, Mail, Lock, User, MapPin, Smartphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="page-container py-16 min-h-screen flex flex-col items-center justify-center">
            <div className="max-w-3xl mx-auto">
                <header className="page-header text-center mb-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 text-primary rounded-[2rem] mb-6 shadow-xl shadow-primary/5">
                        <UserPlus size={36} />
                    </div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">Join the <span className="text-primary">Community</span></h1>
                    <p className="text-gray-500 font-light mt-2">Sign up to support sustainable coconut coir products.</p>
                </header>

                <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-gray-200/50 border border-gray-50">
                    <form className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="group">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-3 ml-1">Complete Name</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 pl-5 flex items-center text-gray-300 group-focus-within:text-primary transition-colors">
                                        <User size={20} />
                                    </span>
                                    <input
                                        type="text"
                                        className="w-full pl-14 pr-6 py-4 rounded-2xl bg-gray-50 border-none outline-none ring-2 ring-transparent focus:ring-primary/10 transition-all font-bold text-gray-700 placeholder:text-gray-300"
                                        placeholder="Juan Dela Cruz"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="group">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-3 ml-1">Mobile Number</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 pl-5 flex items-center text-gray-300 group-focus-within:text-primary transition-colors">
                                        <Smartphone size={20} />
                                    </span>
                                    <input
                                        type="tel"
                                        className="w-full pl-14 pr-6 py-4 rounded-2xl bg-gray-50 border-none outline-none ring-2 ring-transparent focus:ring-primary/10 transition-all font-bold text-gray-700 placeholder:text-gray-300"
                                        placeholder="09123456789"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="group">
                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-3 ml-1">Email Address</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-5 flex items-center text-gray-300 group-focus-within:text-primary transition-colors">
                                    <Mail size={20} />
                                </span>
                                <input
                                    type="email"
                                    className="w-full pl-14 pr-6 py-4 rounded-2xl bg-gray-50 border-none outline-none ring-2 ring-transparent focus:ring-primary/10 transition-all font-bold text-gray-700 placeholder:text-gray-300"
                                    placeholder="juan.delacruz@email.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-3 ml-1">Complete Address</label>
                            <div className="relative">
                                <span className="absolute top-5 left-5 flex items-start text-gray-300 group-focus-within:text-primary transition-colors">
                                    <MapPin size={20} />
                                </span>
                                <textarea
                                    className="w-full pl-14 pr-6 py-5 rounded-3xl bg-gray-50 border-none outline-none ring-2 ring-transparent focus:ring-primary/10 transition-all font-bold text-gray-700 placeholder:text-gray-300 h-32 resize-none"
                                    placeholder="Unit No, Street, Barangay, City, Province"
                                    required
                                ></textarea>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="group">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-3 ml-1">Choose Password</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 pl-5 flex items-center text-gray-300 group-focus-within:text-primary transition-colors">
                                        <Lock size={20} />
                                    </span>
                                    <input
                                        type="password"
                                        className="w-full pl-14 pr-6 py-4 rounded-2xl bg-gray-50 border-none outline-none ring-2 ring-transparent focus:ring-primary/10 transition-all font-bold text-gray-700 placeholder:text-gray-300"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="group">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-3 ml-1">Confirm Password</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 pl-5 flex items-center text-gray-300 group-focus-within:text-primary transition-colors">
                                        <Lock size={20} />
                                    </span>
                                    <input
                                        type="password"
                                        className="w-full pl-14 pr-6 py-4 rounded-2xl bg-gray-50 border-none outline-none ring-2 ring-transparent focus:ring-primary/10 transition-all font-bold text-gray-700 placeholder:text-gray-300"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <button type="submit" className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:bg-primary-hover hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 tracking-wide">
                                Create My Account <ArrowRight size={22} />
                            </button>
                        </div>
                    </form>

                    <div className="mt-12 pt-8 border-t border-gray-50 text-center">
                        <p className="text-gray-400 font-medium font-bold">
                            Already a member? <Link to="/login" className="text-primary font-black hover:underline cursor-pointer">Sign In Instead</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
