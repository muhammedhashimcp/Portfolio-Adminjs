// projects
import express from 'express';
import {
	getAllProjects,
	getProjectById,
	createProject,
} from '../controllers/projectsController.js';

const router = express.Router();

router.get('/projects', getAllProjects);
router.get('/projects/:id', getProjectById);
router.post('/projects', createProject);

export default router;
