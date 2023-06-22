import React, { useEffect, useState } from 'react';

import { Box, H4, Text } from '@adminjs/design-system';
import styled from 'styled-components';

const pageHeaderHeight = 70;
const pageHeaderPaddingY = 20;
const pageHeaderPaddingX = 0;


 export const Dashboard = () => {
	const Button = styled.button`
		font-size: 1em;
		margin: 1em;
		padding: 0.25em 1em;
		border-radius: 3px;
		color: ${(props) => props.theme.main};
		border: 2px solid ${(props) => props.theme.main};
	`;

	return (
		<>
			<Box variant="grey" m={0}>
				<Box variant="white">
					<Box
						variant="white"
						border={' 2px solid transparent '}
						borderColor="#009A30"
						width={1}
						my="xl"
					>
						<Box px="xl" mt="-20px">
							<Button
								variant="outlined"
								size="lg"
								style={{
									borderColor: '#009A30',
									backgroundColor:
										tabIndex === 1 ? '#009A30' : '',
								}}
							>
								RDF Data
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
}; 

// export default Dashboard;