import express from 'express';

import dotenv from 'dotenv';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger-output.json' assert { type: 'json' };
import adminRouter, { admin } from './routes/admin.router.js';
//requiring data base config
import db from './config/dataBase.js';
import { PORT } from './config/config.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import blogsRoutes from './routes/blogsManagement.js';
import docsRoutes from './routes/docsManagement.js';
import projectsRoutes from './routes/projectManagement.js';
import settingsRoutes from './routes/settingsManagement.js';
import skillsRoutes from './routes/skillsManagement.js';
import usersRoutes from './routes/userManagement.js';
// our config
dotenv.config();
const app = express();
db();
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, 'public')));
// Endpoint  for admin
app.use(`${admin.options.rootPath}`, adminRouter);
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get('/', (req, res) => {
	// #swagger.tags = ['Index']
	// #swagger.summary = 'Portfolio admin panel base route'
	res.status(200).json('Portfolio base Route');
});
app.use('/api/blogs', blogsRoutes);
app.use('/api/docs', docsRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/users', usersRoutes);
// Middleware for Errors
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server started on http://localhost:${PORT}/`);
	console.log(
		`Swagger Documents available on  http://localhost:${PORT}/api/v1/docs`
	);
	console.log(
		`AdminJS started on http://localhost:${PORT}/${admin.options.rootPath}`
	);
});
