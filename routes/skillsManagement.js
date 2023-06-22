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
router.get('/', getAllSkills)
// GET /skills/:id
router.get('/:id', getSkillById);

// POST /skills
router.post('/', createSkill);

// PUT /skills/:id
router.put('/:id', updateSkill);

// DELETE /skills/:id
router.delete('/:id', deleteSkill);

export default router;
