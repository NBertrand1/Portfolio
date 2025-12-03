import React from 'react'
import profilPic from '../assets/Moi.jpg'

function Hero() {
    return (
        <div className="bg-base-100/50 backdrop-blur-sm rounded-xl p-8 my-10 w-[90%] mx-auto">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={profilPic}
                        className="w-lg rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-7xl font-bold">Salut toi!</h1>
                        <p className="py-6 mr-5">
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
