import React from 'react'

function Projects() {
    const projectsData = [
        {
            id: 1,
            title: "Xsmall Card",
            description: "A card component has a figure, a body part, and inside body there are title and actions parts",
            image: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
            size: "card-xl"
        },
        {
            id: 2,
            title: "Small Card",
            description: "A card component has a figure, a body part, and inside body there are title and actions parts",
            image: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
            size: "card-xl"
        },
        {
            id: 3,
            title: "Medium Card",
            description: "A card component has a figure, a body part, and inside body there are title and actions parts",
            image: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
            size: "card-xl"
        },
    ];

    return (
        <div id='projects' className="bg-base-100/50 backdrop-blur-sm rounded-xl p-8 my-10 w-[90%] mx-auto container">
            <h1 className="text-5xl font-bold text-center m-8">Mes Projets</h1>
                <div>
                    <p className='text-center text-xl m-8 mb-18 font-bold text-gray-500'>
                    Comme tout developeur en quête d'experience, il est nécessaire de participer et même de construire des solutions innovante
                    qui apportent une plus-value à notre quotidien. Dans mon cas, j'ai participé à ces différents projets pour allier théorie et pratiques.
                    Vous retrouverez des boutons renvoyant vers des demo de ces differents projets.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {projectsData.map((project) => (
                        <div key={project.id} className={`card bg-gray-900 backdrop-blur-sm  shadow w-full max-w-sm ${project.size}`}>
                            <figure>
                                <img src={project.image} alt={project.title} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{project.title}</h2>
                                <p>{project.description}</p>
                                <div className="card-actions justify-left md:justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    )
}

export default Projects
