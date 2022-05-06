import type { NextPage } from 'next';
import styled from 'styled-components';
import Background from '../src/components/main-page/Background';
import Character from '../src/components/main-page/character';

const Home: NextPage = () => {
  return (
    <>
      <Background>
        <Character />
      </Background>
    </>
  );
};

export default Home;
