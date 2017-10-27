import React from 'react';
import { keyframes } from 'styled-components';

const scale = keyframes`
	from {
		transform: scale(1.0);
	}

	to {
		transform: scale(3.5);
	}
`;

export default scale;
