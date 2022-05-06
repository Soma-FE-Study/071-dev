import type { NextPage } from 'next';
import styled from 'styled-components';
import Background from '../src/components/main-page/Background';
import Character from '../src/components/main-page/Character';
import IntroductionContainer from '../src/components/introduction/introductionContainer';
import Instruction from '../src/components/main-page/Instruction';
import AboutMe from '../src/components/about/AboutMe';
import Portals from '../src/components/main-page/portals';

const Home: NextPage = () => {
  return (
    <>
      <Background>
        <>
          <Instruction />
          <Portals />
          <Character />
        </>
      </Background>
      <IntroductionContainer />
      <AboutMe />
    </>
  );
};

export default Home;
