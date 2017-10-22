import React from 'react';
import styled from 'styled-components';

export const Text = styled.p`
  color: ${props => props.color};
`;

Text.defaultProps = {
  color: 'yellow',
};

export default Text;
