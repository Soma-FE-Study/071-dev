import React, { useEffect } from 'react';
import Head from 'next/head';
import Footer from './Footer';
import { darkTheme, lightTheme } from '../../styles/theme';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../styles/global-styles';

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Main>
          <Container>{children}</Container>
        </Main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

const Container = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  min-height: calc(100vh - 7rem - 6.5rem);
  padding: 1rem 1rem 5rem 1rem;
`;

const Main = styled.main`
  margin-top: 7rem;
  width: 100%;
`;
