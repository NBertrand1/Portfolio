import React from 'react';
import { SiHtml5 } from '@react-icons/all-files/si/SiHtml5';
import { SiCss3 } from '@react-icons/all-files/si/SiCss3';
import { SiJavascript } from '@react-icons/all-files/si/SiJavascript';
import { SiReact } from '@react-icons/all-files/si/SiReact';
import { SiExpress } from '@react-icons/all-files/si/SiExpress';
import { SiMysql } from '@react-icons/all-files/si/SiMysql';
import { SiMongodb } from '@react-icons/all-files/si/SiMongodb';
import { SiJsonwebtokens } from '@react-icons/all-files/si/SiJsonwebtokens';
import { SiPhp } from '@react-icons/all-files/si/SiPhp';

function Skills() {
    const skills = [
        { name: "HTML", icon: <SiHtml5 className="text-orange-600" /> },
        { name: "CSS", icon: <SiCss3 className="text-blue-600" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "React", icon: <SiReact className="text-cyan-400" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "JWT", icon: <SiJsonwebtokens className="text-pink-500" /> },
        { name: "PHP", icon: <SiPhp className="text-indigo-500" /> },
    ];

    return (
        <div id='skills' className="bg-base-100/50 backdrop-blur-sm rounded-xl p-8 w-[90%] mx-auto">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold text-center mb-18">Mon stack technologique</h2>
                <p className='text-center text-xl m-8 mb-18 font-bold text-gray-500'>
                    Comme tout developeur en quête d'experience, il est nécessaire de participer et même de construire des solutions innovante
                    qui apportent une plus-value à notre quotidien. Dans mon cas, j'ai participé à ces différents projets pour allier théorie et pratiques.
                    Vous retrouverez des boutons renvoyant vers des demo de ces differents projets.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center my-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center p-4 bg-base-100 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-32 h-32 justify-center">
                            <div className="text-5xl mb-2">
                                {skill.icon}
                            </div>
                            <span className="font-semibold">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
