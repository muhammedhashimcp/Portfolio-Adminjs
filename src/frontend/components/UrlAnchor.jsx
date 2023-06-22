import * as React from 'react';

const UrlAnchor = () => {
	return (
		<a
			className="flex justify-between items-center w-full text-gray-300"
			target="_blank"
			rel="noreferrer"
			href={record.params.github_url}
		>
			<FaGithub size={30} />
		</a>
	);
};

export default UrlAnchor
