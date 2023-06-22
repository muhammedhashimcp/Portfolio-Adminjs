// tutorials
// blogs
// personal youtube
// routes/tutorialRoutes.js
import express from 'express';
import {
  getAllTutorials,
  getTutorialById,
  createTutorial,
  updateTutorial,
  deleteTutorial,
} from '../controllers/docsController.js';

const router = express.Router();

router.get('/tutorials', getAllTutorials);
router.get('/tutorials/:id', getTutorialById);
router.post('/tutorials', createTutorial);
router.put('/tutorials/:id', updateTutorial);
router.delete('/tutorials/:id', deleteTutorial);

export default router;
