import React from 'react';

const Projects = () => {
    const projectsData = [
        {
            id: 1,
            title: "Task Manager",
            description: "Application web permettant de gérer des tâches (CRUD) avec React, Node.js, Express et MongoDB, incluant une API REST et une base de données.",
            tags: ["React JS", "Node JS", "Express", "MongoDB"],
            githubLink: "#",
            demoLink: "#",
            image: "/task-manager.png"
        },
        {
            id: 2,
            title: "Application Web",
            description: "Une application web fullstack moderne et performante, développée avec une architecture robuste utilisant Node.js et MongoDB",
            tags: ["Node JS", "Express", "MongoDB"],
            githubLink: "https://github.com/ESIC775/application.git",
            demoLink: "http://localhost:5173/",
            image: "/aurashop.png"
        }
    ];

    return (
        <section id="projets" className="py-16 sm:py-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    Mes Projets
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {/* Project Cards */}
                    {projectsData.map((project) => (
                        <div key={project.id} className="glass rounded-2xl overflow-hidden hover-lift group cursor-pointer flex flex-col h-full">
                            {/* Project Image Placeholder */}
                            <div className="h-48 sm:h-56 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative overflow-hidden group-hover:from-blue-600/20 group-hover:to-purple-600/20 transition-all duration-500 shrink-0">
                                {project.image ? (
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <svg className="w-16 h-16 text-gray-600 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </>
                                )}
                            </div>
                            
                            {/* Project Content */}
                            <div className="p-5 sm:p-6 flex flex-col flex-grow">
                                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="text-xs px-2 py-1 bg-blue-500/10 text-blue-300 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-gray-400 mb-6 text-sm sm:text-base flex-grow">
                                    {project.description}
                                </p>
                                
                                {/* Links Section */}
                                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-700/50">
                                    <a 
                                        href={project.githubLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-300 hover:text-blue-400 font-medium text-sm transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                        GitHub
                                    </a>
                                    <a 
                                        href={project.demoLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-300 hover:text-green-400 font-medium text-sm transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
