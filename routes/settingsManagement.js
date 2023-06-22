// category
// project_category
// tag
// categoryRoutes.js

import express from 'express';
import {
	getAllCategories,
	getCategoryById,
	createCategory,
	updateCategory,
	deleteCategory,
	getAllProjectCategories,
	createProjectCategory,
	updateProjectCategory,
	deleteProjectCategory,
} from '../controllers/settingsController.js';

const router = express.Router();

// GET /categories - Get all categories
router.get('/category', getAllCategories);

// GET /categories/:id - Get a single category by ID
router.get('/category/:id', getCategoryById);

// POST /categories - Create a new category
router.post('/category', createCategory);

// PUT /categories/:id - Update an existing category
router.put('/category/:id', updateCategory);

// DELETE /categories/:id - Delete a category
router.delete('/category/:id', deleteCategory);


// GET /project-categories
router.get('/project-category', getAllProjectCategories);

// POST /project-categories
router.post('/project-category', createProjectCategory);

// PUT /project-categories/:id
router.put('/project-category/:id', updateProjectCategory);

// DELETE /project-categories/:id
router.delete('/project-category/:id', deleteProjectCategory);
export default router;
