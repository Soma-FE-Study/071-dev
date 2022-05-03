import styled from 'styled-components';

export default function IntroductionContainer() {
  return (
    <Container>
      안녕하세요<br></br> 프론트엔드 개발자 지망생 윤영기입니다
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  width: 100%;
  height: 100vh;
  background-color: #006e7f;
  font-size: 500%;
  color: #f8cb2e;
`;
