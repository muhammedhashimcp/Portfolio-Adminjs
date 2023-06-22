const projects = [];

// Get all projects
export const getAllProjects = (req, res) => {
	// #swagger.tags = ['Projects Management']
	// #swagger.summary = projects '
	res.json(projects);
};

// Get a specific project by ID
export const getProjectById = (req, res) => {
	// #swagger.tags = ['Projects Management']
	// #swagger.summary = projects '
	const projectId = req.params.id;
	const project = projects.find((p) => p.id === projectId);

	if (!project) {
		res.status(404).json({ error: 'Project not found' });
	} else {
		res.json(project);
	}
};

// Create a new project
export const createProject = (req, res) => {
	// #swagger.tags = ['Projects Management']
	// #swagger.summary = projects '
	const { name, description } = req.body;
	const newProject = { id: Date.now().toString(), name, description };
	projects.push(newProject);
	res.status(201).json(newProject);
};