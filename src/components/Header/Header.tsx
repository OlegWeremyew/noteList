import React from 'react';

import { useSelector } from 'react-redux';

import { getThemeValue } from '../../selectors';
import { ReturnComponentType } from '../../types/ReturnComponentType';

import { HeaderContainer, Image } from './components';
import nodeListBlack from './image/nodeListBlack.png';
import nodeListLight from './image/nodeListLight.png';
import nodeListLightSky from './image/nodeListLightSky.png';
import { Navbar } from './Navbar';

export const Header = (): ReturnComponentType => {
  const themValue = useSelector(getThemeValue);

  const getImg = (): string => {
    let themeImage: any;
    if (themValue === 'light') themeImage = nodeListBlack;
    if (themValue === 'dark') themeImage = nodeListLight;
    if (themValue === 'heavenly') themeImage = nodeListLightSky;
    return themeImage;
  };

  const nodeListImg = getImg();

  return (
    <HeaderContainer>
      <Image src={nodeListImg} alt="header icon" />
      <Navbar />
    </HeaderContainer>
  );
};
