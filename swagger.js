import swagger from 'swagger-autogen';

const swaggerAutogen = swagger({ openapi: '3.0.0' });

const doc = {
	info: {
		title: 'Portfolio Admin Panel Documentation',
		summary: 'Personal Portfolio Admin Panel.',
		description:
			'This is a backend for my personal portfolio management app',
	},
	externalDocs: {
		description: 'Swagger open Api 3.0.0 ',
		url: 'https://swagger.io/specification/',
	},

	servers: [
		{
			url: 'http://localhost:4000',
			description: 'local server',
		},
		{
			url: 'https://panacea-app-backend.onrender.com',
			description: 'Cloud production server ',
		},
	],
	tags: [
		{
			name: 'Index',
			description: 'Default routes for testing',
		},
		{
			name: 'Test',
			description: 'Routes for testing',
		},
		{
			name: 'User Management',
			description: 'Features For clients ',
		},
		{
			name: 'Projects Management',
			description: 'Features For subscriptions ',
		},
		{
			name: 'Skills Management',
			description: 'Features For subscriptions ',
		},
		{
			name: 'Docs Management',
			description:
				'Route for managing tutorials, blogs , videos and tips',
		},
		{
			name: 'Blogs Management',
			description:
				'Route for managing my personal tutorials, blogs , videos and tips',
		},
		{
			name: 'Category',
			description:
				'Route for managing my personal tutorials, blogs , videos and tips',
		},
		{
			name: 'Settings Management',
			description:
				'Different Settings like category, project-category,tags',
		}
	],
};
const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
