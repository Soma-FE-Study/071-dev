import styled from 'styled-components';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Portals() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [max, setMax] = useState({ height: 0, width: 0 });
  useEffect(() => {
    if (containerRef.current !== null) {
      setMax({ height: containerRef.current.clientHeight, width: containerRef.current.clientWidth });
    }
  }, []);

  return (
    <Container ref={containerRef}>
      <Portal wid={max.width * 0.1} hei={max.height * 0.2}>
        <Text>나에 대하여</Text>
        <Image width='150px' height='150px' src='/img/portal-left.gif' />
      </Portal>
      <Portal wid={max.width * 0.8} hei={max.height * 0.2}>
        <Text>프로젝트</Text>
        <Image width='150px' height='150px' src='/img/portal-right.gif' />
      </Portal>
      <Portal wid={max.width * 0.1} hei={max.height * 0.7}>
        <Text>기술 스택</Text>
        <Image width='150px' height='150px' src='/img/portal-left.gif' />
      </Portal>
      <Portal wid={max.width * 0.8} hei={max.height * 0.7}>
        <Text>연락처</Text>
        <Image width='150px' height='150px' src='/img/portal-right.gif' />
      </Portal>
    </Container>
  );
}

const Text = styled.div`
  background-color: white;
  width: 50%;
  font-family: sans-serif;
  border-radius: 30px;
  font-size: 15px;
  text-align: center;
`;

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

const Portal = styled.div<{ hei: number; wid: number }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: ${(props) => props.hei}px;
  left: ${(props) => props.wid}px;
`;
