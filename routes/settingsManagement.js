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
router.get('/', getAllCategories);

// GET /categories/:id - Get a single category by ID
router.get('/:id', getCategoryById);

// POST /categories - Create a new category
router.post('/', createCategory);

// PUT /categories/:id - Update an existing category
router.put('/:id', updateCategory);

// DELETE /categories/:id - Delete a category
router.delete('/:id', deleteCategory);


// GET /project-categories
router.get('/', getAllProjectCategories);

// POST /project-categories
router.post('/', createProjectCategory);

// PUT /project-categories/:id
router.put('/:id', updateProjectCategory);

// DELETE /project-categories/:id
router.delete('/:id', deleteProjectCategory);
export default router;
