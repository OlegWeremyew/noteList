import styled from 'styled-components';

import { ThemeType } from '../../../../types/themeType';

export const InnerFormContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

export const Input = styled.input`
  color: ${({ theme }: ThemeType) => theme.color};
  height: 35px;
  width: 500px;
  padding-left: 5px;
  font-size: 18px;
  border-radius: 5px;
  margin: 0;
  border: ${({ theme }: ThemeType) => theme.border} 3px solid;
  background: ${({ theme }: ThemeType) => theme.buttonsBgc};

  &:focus {
    outline: none;
  }
`;
