import Experience from '../../../models/experience.model.js';

const experienceNavigation = {
	icon: 'EventSchedule',
};
export const experienceResource = {
	resource: Experience,

	options: {
		navigation: experienceNavigation,
		id: 'experience',
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
		listProperties: ['_id', 'experience_type', 'category'],
		filterProperties: ['experience_type', 'category'],
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
