// import mongoose from 'mongoose';
// import databaseConn from '../config/dataBase.js'
// import { dark, light, noSidebar } from '@adminjs/themes'
import AdminJS from 'adminjs';
// Resources
import { blogsResource } from '../src/backend/resources/blog.resource.js';
import { categoryResource } from '../src/backend/resources/category.resource.js';
import { experienceResource } from '../src/backend/resources/experience.resource.js';
import { projectCategoryResource } from '../src/backend/resources/projectCategory.resource.js';
import { projectsResource } from '../src/backend/resources/projects.resource.js';
import { skillsResource } from '../src/backend/resources/skills.resource.js';
import { tagsResource } from '../src/backend/resources/tags.resource.js';
import { tutorialsResource } from '../src/backend/resources/tutorials.resource.js';
import { usersResource } from '../src/backend/resources/users.resource.js';

// components
// import { componentLoader,Components } from '../src/components.js';

export const adminOptions = { 
	rootPath: '/admin',
	// componentLoader,
	// 	 defaultTheme: dark.id,
	//   availableThemes: [dark, light, noSidebar],
	// dashboard: {
	// 	// component: AdminJS.bundle('./frontend/pages/Dashboard.js'),
	// 	// component: AdminJS.bundle('../src/frontend/pages/Dashboard.js'),
	// 	// handler: dashboardHandler,
	// 	// component: Dashboard,
	// 	// component: Components.Dashboard,
	// },
	branding: {
		companyName: 'Portfolio',
		favicon: '/favicon-32x32.png',
		logo: '/favicon-32x32.png',
		withMadeWithLove: false,
	},

	resources: [
		// important
		projectsResource,
		skillsResource,
		experienceResource,
		// user management
		usersResource,
		// settings
		categoryResource,
		projectCategoryResource,
		tagsResource,
		// docs
		tutorialsResource,
		blogsResource,
	],
	// componentLoader,
	// databases: [mongoose],
	// databases: [databaseConn],
	locale: {
		language: 'en',
		translations: {
			labels: {
				User: 'People',
			},
		},
	},
	pages: {
		// 'Custom Page': {
		// 	component: SOME_STATS,
		// 	icon: 'Purchase',
		// 	// eslint-disable-next-line @typescript-eslint/no-unused-vars
		// 	handler: async (request, response, context) => {
		// 		return {
		// 			text: 'I am fetched from the backend',
		// 		};
		// 	},
		// }
		// 'Design system example': {
		// 	component: DESIGN_SYSTEM_EXAMPLE_PAGE,
		// 	icon: 'Workspace',
		// },
	},
};
