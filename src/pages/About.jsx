import { Github, Linkedin, Mail, User } from 'lucide-react';

const About = () => {
    // Member data - Group members can update their own info here
    const members = [
        {
            name: "Stephen Dave Blanza",
            role: "Project Lead / Lead Developer",
            bio: "Responsible for overall project architecture and core React implementation.",
            image: "/Dave Blanza.png",
            github: "#",
            linkedin: "#"
        },
        {
            name: "Jandrei Labarento",
            role: "UI/UX Designer",
            bio: "Focused on the premium earthy aesthetic and Tailwind CSS design system.",
            image: "/Jandrei Labarento.png",
            github: "#",
            linkedin: "#"
        },
        {
            name: "Vince Gio Acedillo",
            role: "Content & QA Specialist",
            bio: "Managed product data and conducted cross-device testing for performance.",
            image: "/Vince Acedillo.png",
            github: "#",
            linkedin: "#"
        }
    ];

    return (
        <div className="page-container py-12">
            <header className="page-header mb-16 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 text-primary rounded-[2rem] mb-6 shadow-xl shadow-primary/5">
                    <User size={36} />
                </div>
                <h1 className="text-5xl font-black text-gray-900 tracking-tight">Meet the <span className="text-primary">Team</span></h1>
                <p className="mt-4 text-gray-500 font-light max-w-2xl mx-auto text-lg leading-relaxed">
                    The creative minds behind <span className="text-primary font-bold">NesBukoYNot</span>. We are a group of developers committed to showcasing sustainable innovation through modern web design.
                </p>
                <div className="w-16 h-1.5 bg-secondary mx-auto mt-8 rounded-full"></div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
                {members.map((member, index) => (
                    <div key={index} className="group bg-white rounded-[2.5rem] p-8 shadow-xl shadow-gray-100/50 border border-gray-50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center">
                        <div className="relative w-32 h-32 mx-auto mb-6">
                            <div className="w-full h-full rounded-[2rem] bg-gray-100 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg overflow-hidden group-hover:border-primary/20 transition-colors">
                                {member.image ? (
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                ) : (
                                    <User size={48} className="text-gray-300" />
                                )}
                            </div>
                        </div>

                        <h3 className="text-xl font-black text-gray-800 mb-1">{member.name}</h3>
                        <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">{member.role}</p>
                        <p className="text-gray-500 text-sm font-light leading-relaxed mb-6">
                            {member.bio}
                        </p>

                        <div className="flex justify-center gap-3">
                            <a href={member.github} className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all shadow-sm">
                                <Github size={18} />
                            </a>
                            <a href={member.linkedin} className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                                <Linkedin size={18} />
                            </a>
                            <a href={`mailto:#`} className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-white transition-all shadow-sm">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Project Info Section */}
            <section className="mt-24 bg-accent/30 rounded-[3rem] p-10 md:p-16 text-center max-w-5xl mx-auto">
                <h2 className="text-3xl font-black text-primary mb-6">About the Project</h2>
                <div className="grid md:grid-cols-2 gap-12 text-left">
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-gray-800">Our Vision</h4>
                        <p className="text-gray-600 font-light leading-relaxed">
                            NesBukoYNot was conceptualized as a final project for Advanced Web Design at FEU Tech. Our goal was to blend e-commerce functionality with a strong sustainability message, featuring coconut coir as a hero material.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-gray-800">The Technology</h4>
                        <p className="text-gray-600 font-light leading-relaxed">
                            This project implements a full customer-side experience using React, Vite, and Tailwind CSS. It features a responsive catalog, functional cart simulation, and a premium earthy design system.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
