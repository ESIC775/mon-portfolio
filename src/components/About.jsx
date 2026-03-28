import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="apropos" className="py-16 sm:py-20 relative overflow-hidden min-h-screen">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
            >
                <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    À Propos
                </motion.h2>
                
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Ma Passion */}
                    <motion.div variants={itemVariants} className="glass rounded-2xl p-6 sm:p-8 hover-lift">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white">Ma Passion</h3>
                        </div>
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p className="text-base sm:text-lg">
                                À la croisée de l'ingénierie logicielle et des nouvelles technologies, j'ai développé au fil de mes projets un fort intérêt pour la conception web. Actuellement étudiant en Master 1 Informatique à l'Université Sorbonne Paris Nord, je cherche à approfondir mes compétences et à mieux maîtriser les technologies du web moderne.
                            </p>
                            <p className="text-base sm:text-lg">
                                Curieux, motivé et impliqué, j'aime concevoir des solutions à la fois performantes, intuitives et utiles. Grâce à mon parcours et aux projets que j'ai réalisés, j'ai pu renforcer mes compétences techniques tout en développant ma rigueur, mon sens de l'analyse et mon goût pour le travail en équipe. Aujourd'hui, je souhaite mettre mon énergie, ma créativité et mon sérieux au service de projets innovants et formateurs.
                            </p>
                        </div>
                    </motion.div>
                    
                    {/* Mon Parcours */}
                    <motion.div variants={itemVariants} className="glass rounded-2xl p-6 sm:p-8 hover-lift">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white">Mon Parcours</h3>
                        </div>
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p className="text-base sm:text-lg">
                                Mon attrait pour l'informatique a débuté au lycée pour se transformer en véritable vocation tout au long de mon cursus universitaire. J'ai construit une base technique solide en développement frontend à travers la maîtrise des langages clés : <span className="text-purple-400 font-semibold">HTML, CSS et JavaScript</span>.
                            </p>
                            <p className="text-base sm:text-lg">
                                Par la suite, j'ai eu l'opportunité de concevoir des applications interactives et performantes en exploitant des frameworks modernes tels que <span className="text-purple-400 font-semibold">React et Angular</span>, tant sur des projets académiques qu'en environnement professionnel.
                            </p>
                            <p className="text-base sm:text-lg">
                                Aujourd'hui en cycle Master, mon parcours est résolument axé sur l'excellence technique. Il me permet d'affiner mon expertise en développement web et d'explorer les technologies émergentes pour créer des solutions innovantes.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
