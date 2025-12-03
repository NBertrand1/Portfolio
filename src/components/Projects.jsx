import React from 'react'

function Projects() {
    const projectsData = [
        {
            id: 1,
            title: "Xsmall Card",
            description: "A card component has a figure, a body part, and inside body there are title and actions parts",
            image: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
            size: "card-xs"
        },
        {
            id: 2,
            title: "Small Card",
            description: "A card component has a figure, a body part, and inside body there are title and actions parts",
            image: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
            size: "card-sm"
        },
        {
            id: 3,
            title: "Medium Card",
            description: "A card component has a figure, a body part, and inside body there are title and actions parts",
            image: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
            size: "card-md"
        },
        {
            id: 4,
            title: "Large Card",
            description: "A card component has a figure, a body part, and inside body there are title and actions parts",
            image: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
            size: "card-lg"
        },
        {
            id: 5,
            title: "Xlarge Card",
            description: "A card component has a figure, a body part, and inside body there are title and actions parts",
            image: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
            size: "card-xl"
        }
    ];

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {projectsData.map((project) => (
                    <div key={project.id} className={`card bg-base-100 shadow-xl w-full max-w-sm ${project.size}`}>
                        <figure>
                            <img src={project.image} alt={project.title} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{project.title}</h2>
                            <p>{project.description}</p>
                            <div className="card-actions justify-end">
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
