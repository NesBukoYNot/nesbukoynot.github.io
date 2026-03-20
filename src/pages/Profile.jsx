import { User, Mail, Smartphone, MapPin, Edit3, Settings, Shield, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        // Here you would clear user session
        navigate('/login');
    };

    return (
        <div className="page-container pt-12 pb-32 min-h-screen flex flex-col justify-start">
            <header className="mb-12 text-center md:text-left">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 block">Account Details</span>
                <h1 className="text-4xl font-bold text-gray-900 tracking-tight">User Profile</h1>
            </header>

            <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-xl p-8 border border-gray-100 text-center sticky top-28">
                        <div className="relative w-24 h-24 mx-auto mb-6">
                            <div className="w-full h-full rounded-2xl bg-gray-50 flex items-center justify-center text-primary text-2xl font-bold border border-gray-100">
                                JD
                            </div>
                            <button className="absolute -bottom-2 -right-2 p-2 bg-white border border-gray-100 text-gray-400 rounded-lg shadow-sm hover:text-primary transition-all">
                                <Edit3 size={14} />
                            </button>
                        </div>

                        <h2 className="text-xl font-bold text-gray-900 mb-1">Juan Dela Cruz</h2>
                        <p className="text-secondary text-[10px] font-bold uppercase tracking-widest mb-6">Eco-Conscious Member</p>

                        <div className="pt-6 border-t border-gray-50 space-y-3">
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-gray-400 font-medium">Joined</span>
                                <span className="font-bold text-gray-700">March 2026</span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-gray-400 font-medium">Orders</span>
                                <span className="font-bold text-gray-700">12 Total</span>
                            </div>
                        </div>

                        <button 
                            onClick={handleSignOut}
                            className="mt-8 w-full flex items-center justify-center gap-2 bg-gray-50 text-gray-400 py-3 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-red-50 hover:text-red-500 transition-all font-sans"
                        >
                            <LogOut size={14} /> Sign Out
                        </button>
                    </div>
                </div>

                <div className="lg:col-span-2 space-y-6">
                    <section className="bg-white rounded-xl p-8 border border-gray-100">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-3">
                                Personal Information
                            </h3>
                            <button className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline">Edit Info</button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Email Address</label>
                                <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                                    <Mail size={16} className="text-gray-300" /> juan.delacruz@email.com
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Phone Number</label>
                                <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                                    <Smartphone size={16} className="text-gray-300" /> +63 912 345 6789
                                </div>
                            </div>
                            <div className="md:col-span-2 space-y-1">
                                <label className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Shipping Address</label>
                                <div className="flex items-start gap-3 text-sm font-semibold text-gray-700 leading-relaxed">
                                    <MapPin size={16} className="text-gray-300 mt-0.5 flex-shrink-0" />
                                    123 Coconut Fiber St., Brgy. Husk, Manila City, Metro Manila
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-xl p-8 border border-gray-100 transition-all hover:border-gray-200 cursor-pointer">
                            <div className="w-10 h-10 bg-gray-50 text-gray-400 rounded-lg flex items-center justify-center mb-6 border border-gray-100">
                                <Shield size={18} />
                            </div>
                            <h4 className="text-base font-bold text-gray-900 mb-2">Security</h4>
                            <p className="text-gray-400 text-xs font-light leading-relaxed">Manage your password and factor authentication.</p>
                        </div>

                        <div className="bg-white rounded-xl p-8 border border-gray-100 transition-all hover:border-gray-200 cursor-pointer">
                            <div className="w-10 h-10 bg-gray-50 text-gray-400 rounded-lg flex items-center justify-center mb-6 border border-gray-100">
                                <Settings size={18} />
                            </div>
                            <h4 className="text-base font-bold text-gray-900 mb-2">Preferences</h4>
                            <p className="text-gray-400 text-xs font-light leading-relaxed">Customize your notifications and account behavior.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

