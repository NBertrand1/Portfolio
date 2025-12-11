import React from 'react'

function Testimonies() {
    const testimoniesData = [
        {
            id: 1,
            name: "Alice Dupont",
            text: "Un travail exceptionnel ! Le site est rapide, beau et très fonctionnel. Je recommande vivement.",
            image: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
        },
        {
            id: 2,
            name: "Jean Martin",
            text: "Très professionnel et à l'écoute. Mon projet a été réalisé dans les temps et dépasse mes attentes.",
            image: "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
        },
        {
            id: 3,
            name: "Sophie Durand",
            text: "Une collaboration fluide et efficace. Le résultat final est tout simplement bluffant.",
            image: "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
        },
        {
            id: 4,
            name: "Marc Levy",
            text: "Je suis ravi de mon nouveau site web. Merci pour votre expertise et votre créativité.",
            image: "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
        }
    ];

    return (
        <div id='testimonies' className="flex flex-col items-center w-[90%] mx-auto py-10 gap-4 bg-base-100/50 backdrop-blur-sm rounded-xl my-10">
            <h2 className="text-3xl font-bold text-center mb-8">Témoignages</h2>
            <div className="carousel w-full">
                {testimoniesData.map((testimony) => (
                    <div key={testimony.id} id={`item${testimony.id}`} className="carousel-item w-full flex flex-col items-center p-4">
                        <div className="avatar mb-4">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={testimony.image} alt={testimony.name} />
                            </div>
                        </div>
                        <p className="text-lg italic text-center max-w-2xl mb-4">"{testimony.text}"</p>
                        <h3 className="font-bold text-xl">{testimony.name}</h3>
                    </div>
                ))}
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                {testimoniesData.map((testimony) => (
                    <a key={testimony.id} href={`#item${testimony.id}`} className="btn btn-xs">{testimony.id}</a>
                ))}
            </div>
        </div>
    )
}

export default Testimonies