import { LogIn, Mail, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="page-container py-20 flex items-center justify-center min-h-[80vh]">
            <div className="w-full max-w-lg">
                <header className="page-header text-center mb-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 text-primary rounded-[2rem] mb-6 shadow-xl shadow-primary/5">
                        <LogIn size={36} />
                    </div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">Welcome <span className="text-primary">Back</span></h1>
                    <p className="text-gray-500 font-light mt-2">Sign in to manage your sustainable orders.</p>
                </header>

                <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-2xl shadow-gray-200/50 border border-gray-50">
                    <form className="space-y-8">
                        <div>
                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-3 ml-1">Email Address</label>
                            <div className="relative group">
                                <span className="absolute inset-y-0 left-0 pl-5 flex items-center text-gray-300 group-focus-within:text-primary transition-colors">
                                    <Mail size={20} />
                                </span>
                                <input
                                    type="email"
                                    className="w-full pl-14 pr-6 py-4 rounded-2xl bg-gray-50 border-none outline-none ring-2 ring-transparent focus:ring-primary/10 transition-all font-bold text-gray-700 placeholder:text-gray-300"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-3 ml-1">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Password</label>
                                <a href="#" className="text-[10px] text-primary font-black uppercase tracking-widest hover:underline">Forgot?</a>
                            </div>
                            <div className="relative group">
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

                        <div className="pt-4">
                            <button type="submit" className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:bg-primary-hover hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
                                Sign In <ArrowRight size={22} />
                            </button>
                        </div>
                    </form>

                    <div className="mt-12 pt-8 border-t border-gray-50 text-center">
                        <p className="text-gray-400 font-medium">
                            Don't have an account? <Link to="/register" className="text-primary font-black hover:underline cursor-pointer">Create Account</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
