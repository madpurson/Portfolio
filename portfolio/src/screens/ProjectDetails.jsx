const ProjectDetails = (projectDetails) => {
    if (!projectDetails) throw new Error('Project details not found');
    const { title, description, image } = projectDetails;
    if (!title || !description || !image) throw new Error('Project details are missing required fields');


    return <>
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={image} alt={title} />
    </>
}