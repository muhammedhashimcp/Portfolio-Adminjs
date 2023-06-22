
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express'
import AdminJSMongoose from '@adminjs/mongoose';
import { adminOptions } from '../src/admin.options.js';

AdminJS.registerAdapter({
	Resource: AdminJSMongoose.Resource,
	Database: AdminJSMongoose.Database,
});
//   componentLoader: ComponentLoader { components: {} }
export const admin = new AdminJS(adminOptions);
// export const admin = new AdminJS({
// 	rootPath: '/admin',

// 	dashboard: {
// 		// component: AdminJS.bundle('../src/frontend/pages/Dashboard.jsx'),
// 		// handler: dashboardHandler,
// 	},

// 	branding: { 
// 		companyName: 'Zigma Epr',
// 		favicon: '/favicon.ico',
// 		logo: '/favicon.svg',
// 		withMadeWithLove: false,
// 	},


// 	// assets: {
// 	// 	styles: [
// 	// 		'/stylesheets/sidebar.style.css',
// 	// 		'/stylesheets/orders.style.css',
// 	// 		'/stylesheets/client.style.css',
// 	// 	],
// 	// },
// 	// pages: {
// 	// 	Settings: {
// 	// 		component: AdminJS.bundle('../src/pages/Settings.jsx'),
// 	// 		icon: 'Settings',
// 	// 	},
// 	// 	Logout: {
// 	// 		component: AdminJS.bundle('../src/pages/Logout/modal-example.tsx'),
// 	// 		icon: 'Logout',
// 	// 	},
// 	// },
// });
admin.watch();
const adminJSRouter = AdminJSExpress.buildRouter(admin);
export default adminJSRouter;
