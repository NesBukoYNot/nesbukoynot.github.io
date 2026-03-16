import { Github, Facebook, User, Box } from 'lucide-react';

const About = () => {
    const members = [
        {
            name: "Vince Gio Acedillo",
            role: "Team Leader",
            bio: "Collaborated with the team to develop and integrate various project components.",
            image: "/Vince Acedillo.png",
            github: "#",
            facebook: "#"
        },
        {
            name: "Jandrei Labarento",
            role: "Team Member",
            bio: "Contributed to the design and implementation of the project alongside the team.",
            image: "/Jandrei Labarento.png",
            github: "#",
            facebook: "#"
        },
        {
            name: "Stephen Dave Blanza",
            role: "Team Member",
            bio: "Worked together with the team on the overall development of the project.",
            image: "/Dave Blanza.png",
            github: "#",
            facebook: "#"
        }
    ];

    return (
        <div className="page-container py-12 min-h-screen flex flex-col">
            <header className="mb-16 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-50 text-primary rounded-xl mb-6 border border-gray-100">
                    <User size={24} />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Meet the Team</h1>
                <p className="mt-3 text-gray-500 font-light max-w-xl mx-auto text-base">
                    The creative minds behind <span className="font-semibold text-gray-800">NesBukoYNot</span>.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                {members.map((member, index) => (
                    <div key={index} className="bg-white rounded-xl p-8 border border-gray-100 transition-all hover:border-gray-200 text-center">
                        <div className="relative w-24 h-24 mx-auto mb-6">
                            <div className="w-full h-full rounded-2xl bg-gray-50 flex items-center justify-center overflow-hidden border border-gray-100">
                                {member.image ? (
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                ) : (
                                    <User size={32} className="text-gray-300" />
                                )}
                            </div>
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                        <p className="text-secondary text-[10px] font-bold uppercase tracking-widest mb-4">{member.role}</p>
                        <p className="text-gray-500 text-xs font-light leading-relaxed mb-6">
                            {member.bio}
                        </p>

                        <div className="flex justify-center gap-2">
                            <a href={member.github} className="w-10 h-10 border border-gray-100 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary transition-all">
                                <Github size={16} />
                            </a>
                            <a href={member.facebook} className="w-10 h-10 border border-gray-100 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-600 transition-all">
                                <Facebook size={16} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <section className="mt-20 py-16 border-t border-gray-100 max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <Box className="text-primary" size={24} />
                    <h2 className="text-2xl font-bold text-gray-900">Project Overview</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Our Vision</h4>
                        <p className="text-gray-500 text-sm font-light leading-relaxed">
                            NesBukoYNot blends e-commerce functionality with a strong sustainability message, featuring coconut coir as a hero material.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Technology</h4>
                        <p className="text-gray-500 text-sm font-light leading-relaxed">
                            Built with React, Vite, and Tailwind CSS. It features a responsive catalog and functional cart simulation.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
