import React, { useEffect } from 'react';
import Head from 'next/head';
import Footer from './Footer';
import { darkTheme, lightTheme } from '../../../styles/theme';
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
