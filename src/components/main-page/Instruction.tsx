import styled from 'styled-components';

export default function Instruction() {
  return (
    <Container>
      <TextContainer>화살표 방향으로 움직여 저를 알아보아요</TextContainer>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  left: 10vw;
  top: 3vw;
  text-align: center;
`;
const TextContainer = styled.div`
  font-size: 70px;
  font-weight: bold;
`;
