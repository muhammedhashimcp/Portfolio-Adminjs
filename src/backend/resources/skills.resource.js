import  Skill from "../../../models/skill.model.js";


const skillsNavigation = {
	icon: 'SkillLevel',
};
export const skillsResource = {
	resource: Skill,
	
	options: { 
		navigation: skillsNavigation,
		// user details custom Action
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
		id: 'skills',
		properties: {
			user_type: {
				isVisible: {
					edit: true,
					show: true,
					list: false,
					filter: false,
				},
			},
			user_status: {
				isVisible: {
					edit: false,
					show: true,
					list: false,
				},
			},
		},
		listProperties: [
			'_id',
			'uid',
			'email',
			'user_status',
			'  user_profile',
		],
		filterProperties: ['_id', 'email', 'user_status', 'uid'],
		// editProperties: ['_id', 'name', 'bio', 'createdAt'],

		
	},
};
