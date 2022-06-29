import React from 'react';

import { useNavigate } from 'react-router-dom';

import { PageContainer, ReturnButton, Title } from './components';

import { PATH } from 'constants/router';
import { ReturnComponentType } from 'types/ReturnComponentType';

const PageNotFound = (): ReturnComponentType => {
  const navigate = useNavigate();

  const returnHomePage = (): void => {
    navigate(`${PATH.HOME_PAGE_ROUTE}`);
  };

  return (
    <PageContainer>
      <Title>Page not found</Title>
      <ReturnButton type="button" onClick={returnHomePage}>
        Return to the homepage 🏠
      </ReturnButton>
    </PageContainer>
  );
};

export default PageNotFound;
