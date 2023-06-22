
import  Project  from '../../../models/project.model.js';
const projectsNavigation = {
	icon: 'Catalog',
};
export const projectsResource = { 
	resource: Project,

	options: {
		navigation: projectsNavigation,
		id: 'projects',
		properties: {
			// github_url: {
			// 	// type: 'string',
			// 	// component: AdminJS.bundle('../components/UrlAnchor'),
			// 	components: {
			// 		show: Components.UrlAnchor,
			// 		edit: Components.MyInput,
			// 		// show: AdminJS.bundle('../components/UrlAnchor.jsx'),
			// 		// edit: AdminJS.bundle('../components/UrlAnchor.jsx'),
			// 		// new: AdminJS.bundle('../components/UrlAnchor.jsx'),
			// 	},
			// 	// components: AdminJS.bundle('../components/DropZone.jsx'),
			// },
			// name: {
			// 	type: 'string',
			// 	components: {
			// 		show: AdminJS.bundle('./my-react-component.jsx'),
			// 	},
			// },
		},
		actions: {
			delete: {
				actionType: 'record',
				// component: AdminJS.bundle('../components/UrlAnchor'),
				component: false,
				handler: (request, response, context) => {
					const { record, currentAdmin } = context;
					return {
						record: record.toJSON(currentAdmin),
					};
				},
				guard: 'doYouReallyWantToDoThis',
			},
			// with alert in browser
			// delete: {
			// 	actionType: 'record',
			// 	component: false,
			// 	handler: (request, response, context) => {
			// 		const { record, currentAdmin } = context;
			// 		return {
			// 			record: record.toJSON(currentAdmin),
			// 		};
			// 	},
			// 	guard: 'doYouReallyWantToDoThis',
			// },
			// 	Details: {
			// 		actionType: 'record',
			// 		component: false,
			// 		handler: (request, response, context) => {
			// 			const { record } = context;
			// 			return {
			// 				msg: 'Hello world',
			// 			};
			// 		},
			// 	},
		},

		// sort: {
		// 	sortBy: 'created_at',
		// 	direction: 'desc',
		// },

		// listProperties: [
		// 	'_id',
		// 	'uid',
		// 	'email',
		// 	'user_status',
		// 	'  user_profile',
		// ],
		// filterProperties: ['_id', 'email', 'user_status', 'uid'],
		// editProperties: ['_id', 'name', 'bio', 'createdAt'],
	},
};
