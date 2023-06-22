import Tutorial from '../../../models/tutorial.model.js';

const tutorialsNavigation = {
	icon: 'PresentationFile',
};
export const tutorialsResource = {
	resource: Tutorial,

	options: {
		navigation: tutorialsNavigation,
		id: 'tutorials',
		properties: {
			// user_type: {
			// 	isVisible: {
			// 		edit: true,
			// 		show: true,
			// 		list: false,
			// 		filter: false,
			// 	},
			// },
			// user_status: {
			// 	isVisible: {
			// 		edit: false,
			// 		show: true,
			// 		list: false,
			// 	},
			// },
		},
		listProperties: ['_id', 'blog_type', 'category'],
		filterProperties: ['blog_type', 'category'],
		// editProperties: ['_id', 'name', 'bio', 'createdAt'],
		actions: {
			Details: {
				actionType: 'record',
				component: false,
				handler: (request, response, context) => {
					const { record } = context;
					return {
						msg: 'Hello world',
					};
				},
			},
		},
		sort: {
			sortBy: 'user_status',
			direction: 'desc',
		},
	},
};
