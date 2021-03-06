import type { NextPage } from 'next';
import styled from 'styled-components';
import Background from '../src/components/main-page/Background';
import Character from '../src/components/main-page/Character';
import IntroductionContainer from '../src/components/introduction/introductionContainer';
import Instruction from '../src/components/main-page/Instruction';
import MainProject from '../src/components/project/MainProject';
import Portals from '../src/components/main-page/Portals';
import UpButton from '../src/components/UpButton';
import SkillStack from '../src/components/skill-stack/SkillStack';
import Contact from '../src/components/contact/Contact';

const Home: NextPage = () => {
  return (
    <>
      <UpButton />
      <Background>
        <>
          <Instruction />
          <Portals />
          <Character />
        </>
      </Background>
      <IntroductionContainer />
      <MainProject />
      <SkillStack />
      <Contact />
    </>
  );
};

export default Home;
