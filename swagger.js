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
			name: 'Client',
			description: 'Features For clients ',
		},
		{
			name: 'Subscription',
			description: 'Features For subscriptions ',
		},
		{
			name: 'Admin',
			description: 'Features For admin ',
		},
		{
			name: 'Wallet',
			description: 'Wallet Features ',
		},
		{
			name: 'Test',
			description: 'Test every routes ',
		},
		{
			name: 'Order',
			description: 'Order Features',
		},
		{
			name: 'Admin-Flow',
			description: 'Test Complete Flow for Admin',
		},
		{
			name: 'Client-Flow',
			description: 'Test Complete Flow for Client',
		},
	],
};
const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
