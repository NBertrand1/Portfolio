import React from 'react'
import profilPic from '../assets/Moi.png'

function Hero() {
    return (
        <div id='hero' className="bg-base-100/50 -sm rounded-xl p-8 w-[90%] mx-auto">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={profilPic}
                        alt="Portrait de Beker_Dev"
                        className="w-lg rounded-lg -bg-conic-120 hidden lg:flex"
                        width="512"
                        height="512"
                        fetchPriority="high"
                    />
                    <div>
                        <h1 className="text-7xl font-bold">Salut toi !</h1>
                        <p className="py-10 text-xl mr-5 space-y-4">
                            Je suis un développeur web passionné par la création d'interfaces utilisateur modernes et fonctionnelles.
                            <br />
                            Je suis disponible pour vous aider dans vos projets web.
                            <br />
                            Ici vous retrouverez les technologies avec lesquelles j'suis à l'aise et quelques projets réalisés.
                            <br />
                            Contactez-moi pour en savoir plus.
                        </p>
                        <button className="btn btn-primary">Contactez-moi</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
