import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding-top: 0;
`;

Link.defaultProps = {};

export default Link;
