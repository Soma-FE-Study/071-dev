import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <HomeBlock>
      <div>
        <h1>071's very first portfolio</h1>
      </div>
    </HomeBlock>
  );
};

const HomeBlock = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Home;
