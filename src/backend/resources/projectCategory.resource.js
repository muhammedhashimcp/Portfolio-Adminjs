import ProjectCategory from '../../../models/project_category.model.js';

const projectCategoryNavigation = {
	name:"Settings",
	icon: 'Roadmap',
};
export const projectCategoryResource = {
	resource: ProjectCategory,

	options: {
		navigation: projectCategoryNavigation,
		id: 'project_category',
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
		listProperties: ['_id', 'title'],
		filterProperties: ['title'],
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
			sortBy: 'title',
			direction: 'desc',
		},
	},
};
