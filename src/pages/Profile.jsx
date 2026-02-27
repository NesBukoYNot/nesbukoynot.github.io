import { User, Mail, Smartphone, MapPin, Edit3, Settings, Shield, LogOut } from 'lucide-react';

const Profile = () => {
    return (
        <div className="page-container pt-12 pb-32 min-h-screen flex flex-col justify-start">
            <header className="page-header mb-12 text-center md:text-left">
                <span className="text-[10px] font-black text-primary/40 uppercase tracking-[0.3em] mb-4 block">Account Management</span>
                <h1 className="text-5xl font-black text-gray-900 tracking-tight">Your <span className="text-primary">Profile</span></h1>
            </header>

            <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl shadow-gray-200/50 border border-gray-50 text-center sticky top-28">
                        <div className="relative w-32 h-32 mx-auto mb-6">
                            <div className="w-full h-full rounded-[2.5rem] bg-primary flex items-center justify-center text-accent text-4xl font-black shadow-xl shadow-primary/20">
                                JD
                            </div>
                            <button className="absolute bottom-0 right-0 p-3 bg-accent text-primary rounded-2xl shadow-lg hover:scale-110 active:scale-95 transition-all">
                                <Edit3 size={18} />
                            </button>
                        </div>

                        <h2 className="text-2xl font-black text-gray-800 mb-1">Juan Dela Cruz</h2>
                        <p className="text-primary text-xs font-bold uppercase tracking-widest mb-6">Sustainable Advocate</p>

                        <div className="pt-6 border-t border-gray-50 space-y-3">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-400 font-medium">Member Since</span>
                                <span className="font-bold text-gray-700">March 2026</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-400 font-medium">Total Orders</span>
                                <span className="font-bold text-gray-700">12 Packages</span>
                            </div>
                        </div>

                        <button className="mt-8 w-full flex items-center justify-center gap-2 bg-gray-50 text-red-500 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-50 transition-all active:scale-95">
                            <LogOut size={16} /> Sign Out
                        </button>
                    </div>
                </div>

                <div className="lg:col-span-2 space-y-8">
                    <section className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-gray-100/50 border border-gray-50">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-black text-gray-800 flex items-center gap-3">
                                <User size={22} className="text-primary" /> Personal Information
                            </h3>
                            <button className="text-xs font-black text-primary uppercase tracking-widest hover:underline">Edit Info</button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-1">
                                <label className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">Email Address</label>
                                <div className="flex items-center gap-3 font-bold text-gray-700">
                                    <Mail size={18} className="text-gray-300" /> juan.delacruz@email.com
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">Phone Number</label>
                                <div className="flex items-center gap-3 font-bold text-gray-700">
                                    <Smartphone size={18} className="text-gray-300" /> +63 912 345 6789
                                </div>
                            </div>
                            <div className="md:col-span-2 space-y-1">
                                <label className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">Shipping Address</label>
                                <div className="flex items-start gap-3 font-bold text-gray-700 leading-relaxed">
                                    <MapPin size={18} className="text-gray-300 mt-1 flex-shrink-0" />
                                    123 Coconut Fiber St., Brgy. Husk, Manila City, Metro Manila
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-[2.2rem] p-8 shadow-lg shadow-gray-100/30 border border-gray-50 group hover:border-primary/20 transition-all cursor-pointer">
                            <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6 border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all">
                                <Shield size={22} />
                            </div>
                            <h4 className="text-lg font-black text-gray-800 mb-2">Security</h4>
                            <p className="text-gray-400 text-sm font-light leading-relaxed">Manage your password and factor authentication.</p>
                        </div>

                        <div className="bg-white rounded-[2.2rem] p-8 shadow-lg shadow-gray-100/30 border border-gray-50 group hover:border-secondary/20 transition-all cursor-pointer">
                            <div className="w-12 h-12 bg-secondary/5 text-secondary rounded-xl flex items-center justify-center mb-6 border border-secondary/10 group-hover:bg-secondary group-hover:text-white transition-all">
                                <Settings size={22} />
                            </div>
                            <h4 className="text-lg font-black text-gray-800 mb-2">Preferences</h4>
                            <p className="text-gray-400 text-sm font-light leading-relaxed">Customize your notifications and account behavior.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

