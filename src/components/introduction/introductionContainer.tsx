import styled from 'styled-components';
import AutoIntroduce from './AutoIntroduce';
import Profile from './Profile';

export default function IntroductionContainer() {
  return (
    <Container id='intro'>
      <Profile />
      <AutoIntroduce />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #006e7f;
  color: #f8cb2e;
  display: flex;
`;
