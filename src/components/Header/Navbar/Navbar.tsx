import React from 'react';

import { NavLink } from 'react-router-dom';

import { NavbarContainer } from './components';

import { PATH } from 'constants/router';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const Navbar = (): ReturnComponentType => (
  <NavbarContainer>
    <NavLink to={PATH.HOME_PAGE_ROUTE}>Node</NavLink>
    <NavLink to={PATH.SETTINGS_PAGE_ROUTE}>Settings</NavLink>
  </NavbarContainer>
);
