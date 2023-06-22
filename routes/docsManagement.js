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

router.get('/', getAllTutorials);
router.get('/:id', getTutorialById);
router.post('/', createTutorial);
router.put('/:id', updateTutorial);
router.delete('/:id', deleteTutorial);

router.get('/blogs/', getAllTutorials);
router.get('/blogs/:id', getTutorialById);
router.post('/blogs/', createTutorial);
router.put('/blogs/:id', updateTutorial);
router.delete('/blogs/:id', deleteTutorial);

router.get('/tutorials', getAllTutorials);
router.get('/tutorials/:id', getTutorialById);
router.post('/tutorials', createTutorial);
router.put('/tutorials/:id', updateTutorial);
router.delete('/tutorials/:id', deleteTutorial);

export default router;
