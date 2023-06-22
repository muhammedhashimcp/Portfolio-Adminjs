import pkg from 'adminjs';
const { ComponentLoader } = pkg;

const componentLoader = new ComponentLoader();
const Components = {
	// MyInput: componentLoader.add('MyInput', './frontend/components/MyInput.jsx'),
	Dashboard: componentLoader.add('Dashboard', '../src/frontend/pages/Dashboard.js'),
	// other custom components
};

export { componentLoader, Components };   
