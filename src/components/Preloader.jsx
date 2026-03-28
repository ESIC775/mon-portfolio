import React from 'react';

const Preloader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950 transition-opacity duration-1000">
            <div className="relative flex flex-col items-center justify-center">
                {/* Outer Glow Ring */}
                <div className="absolute w-40 h-40 rounded-full border-t-4 border-l-4 border-blue-500 animate-[spin_3s_linear_infinite] blur-[2px]"></div>
                <div className="absolute w-40 h-40 rounded-full border-b-4 border-r-4 border-purple-500 animate-[spin_2s_linear_infinite_reverse] blur-[2px]"></div>
                
                {/* Inner Content - Magnificent Logo */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-3xl sm:text-4xl shadow-[0_0_40px_rgba(59,130,246,0.6)] animate-pulse hover:scale-110 transition-transform duration-300">
                        MDev
                    </div>
                </div>
                
                {/* Background effects */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            </div>
        </div>
    );
};

export default Preloader;
