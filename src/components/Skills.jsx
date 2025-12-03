import React from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiExpress, SiMysql, SiMongodb, SiJsonwebtokens, SiPhp } from 'react-icons/si';

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
        <div className="bg-base-100/50 backdrop-blur-sm rounded-xl p-8 my-10 w-[90%] mx-auto">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
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
