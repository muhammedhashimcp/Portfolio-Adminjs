import * as React from 'react'
const MyReactComponent = (props) => {
	const { record, property } = props;
	const value = record.params[property.path] === 'foo' ? 'bar' : 'zoe';
	return <PropertyInShow property={property}>{value}</PropertyInShow>;
};
export default MyReactComponent; 