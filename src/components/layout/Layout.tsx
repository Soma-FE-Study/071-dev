import React from 'react';
import Footer from './Footer';
import { darkTheme } from '../../../styles/theme';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../../styles/global-styles';

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Main>{children}</Main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

const Main = styled.main`
  width: 100%;
`;
