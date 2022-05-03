import styled from 'styled-components';
import { useEffect, useState } from 'react';

const TypingText = () => {
  const txt = `프론트엔드 개발자 윤영기 입니다.`;
  const [Text, setText] = useState('');
  const [Count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setText(Text + txt[Count]);
      setCount(Count + 1);
    }, 150);
    if (Count === txt.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });
  return <p className='text'>{Text}</p>;
};

export default function AutoIntroduce() {
  return (
    <Container>
      <Type>{TypingText()}</Type>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  position: relative;
  font-size: 500%;
`;
const Type = styled.div`
  position: absolute;
  margin-left: 5%;
  margin-top: 5%;
  text-align: center;
`;
