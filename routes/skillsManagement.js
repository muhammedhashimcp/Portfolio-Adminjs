import express from 'express';
import {
	getAllSkills,
	getSkillById,
	createSkill,
	updateSkill,
	deleteSkill,
} from '../controllers/skillsController.js';

const router = express.Router();

// GET /skills
router.get('/skills', getAllSkills);

// GET /skills/:id
router.get('/skills/:id', getSkillById);

// POST /skills
router.post('/skills', createSkill);

// PUT /skills/:id
router.put('/skills/:id', updateSkill);

// DELETE /skills/:id
router.delete('/skills/:id', deleteSkill);

export default router;
