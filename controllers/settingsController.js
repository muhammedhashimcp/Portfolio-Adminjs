// categoryController.js

// Sample category data (replace with your actual implementation)
let categories = [
	{ id: 1, name: 'Category 1' },
	{ id: 2, name: 'Category 2' },
];

// Get all categories
const getAllCategories = (req, res) => {
	// #swagger.tags = ['Settings Management','Category']
	// #swagger.summary = 'category '
	res.json(categories);
};

// Get a single category by ID
const getCategoryById = (req, res) => {
	// #swagger.tags = ['Settings Management','Category']
	// #swagger.summary = 'category '
	const categoryId = parseInt(req.params.id);
	const category = categories.find((c) => c.id === categoryId);

	if (!category) {
		res.status(404).json({ error: 'Category not found' });
	} else {
		res.json(category);
	}
};

// Create a new category
const createCategory = (req, res) => {
	// #swagger.tags = ['Settings Management','Category']
	// #swagger.summary = 'category '
	const { name } = req.body;
	const newCategory = { id: categories.length + 1, name };
	categories.push(newCategory);
	res.status(201).json(newCategory);
};

// Update an existing category
const updateCategory = (req, res) => {
	// #swagger.tags = ['Settings Management','Category']
	// #swagger.summary = 'category '
	const categoryId = parseInt(req.params.id);
	const { name } = req.body;
	const category = categories.find((c) => c.id === categoryId);

	if (!category) {
		res.status(404).json({ error: 'Category not found' });
	} else {
		category.name = name;
		res.json(category);
	}
};

// Delete a category
const deleteCategory = (req, res) => {
	// #swagger.tags = ['Settings Management','Category']
	// #swagger.summary = 'category '
	const categoryId = parseInt(req.params.id);
	const index = categories.findIndex((c) => c.id === categoryId);

	if (index === -1) {
		res.status(404).json({ error: 'Category not found' });
	} else {
		const deletedCategory = categories.splice(index, 1);
		res.json(deletedCategory[0]);
	}
};

// project catEGORY
// projectCategory.controller.js

// GET /project-categories
export const getAllProjectCategories = (req, res) => {
	// #swagger.tags = ['Settings Management','Project Category']
	// #swagger.summary = 'project category '
	// Logic to fetch all project categories from the database
	// and send the response
	res.json({ message: 'Get all project categories' });
};

// POST /project-categories
export const createProjectCategory = (req, res) => {
	// #swagger.tags = ['Settings Management','Project Category']
	// #swagger.summary = 'project category '
	// Logic to create a new project category in the database
	// using the request body and send the response
	res.json({ message: 'Create project category' });
};

// PUT /project-categories/:id
export const updateProjectCategory = (req, res) => {
	// #swagger.tags = ['Settings Management','Project Category']
	// #swagger.summary = 'project category '
	const { id } = req.params;
	// Logic to update the project category with the given id
	// using the request body and send the response
	res.json({ message: `Update project category ${id}` });
};

// DELETE /project-categories/:id
export const deleteProjectCategory = (req, res) => {
	// #swagger.tags = ['Settings Management','Project Category']
	// #swagger.summary = 'project category '
	const { id } = req.params;
	// Logic to delete the project category with the given id
	// from the database and send the response
	res.json({ message: `Delete project category ${id}` });
};

export {
	getAllCategories,
	getCategoryById,
	createCategory,
	updateCategory,
	deleteCategory,
};
