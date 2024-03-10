function ProjectList({projects}) {

    return (
        <div className="portfolio">
            {projects.map((project, index) => {
                return <div key={index}>
                    <img alt={`project ${index}`} src={project.img} />
                </div>
            })}
        </div>
    )
}

export default ProjectList;