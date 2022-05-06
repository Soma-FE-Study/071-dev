import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

export default function Character() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  console.log(position);

  const containerRef = useRef<HTMLDivElement | null>(null);
  let heightMax = useRef(0);
  let widthMax = useRef(0);
  const keyHandler = (event: KeyboardEvent) => {
    event.preventDefault();
    const hMAX = heightMax.current;
    const wMAX = widthMax.current;
    if (event.key === 'ArrowRight') {
      console.log('right');
      if (position.x >= wMAX - 100) {
        return;
      }
      setPosition({ ...position, x: position.x + 15 });
    } else if (event.key === 'ArrowLeft') {
      console.log('left');
      if (position.x <= 10) {
        console.log('out of x');
        return;
      }
      setPosition({ ...position, x: position.x - 15 });
    } else if (event.key === 'ArrowDown') {
      console.log('down');
      if (position.y >= hMAX - 130) {
        return;
      }
      setPosition({ ...position, y: position.y + 15 });
    } else if (event.key === 'ArrowUp') {
      console.log('up');
      if (position.y <= 10) {
        console.log('out of y');
        return;
      }
      setPosition({ ...position, y: position.y - 15 });
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', keyHandler);
    return () => {
      window.removeEventListener('keydown', keyHandler);
    };
  });
  useEffect(() => {
    if (containerRef.current !== null) {
      heightMax.current = containerRef.current.clientHeight;
      widthMax.current = containerRef.current.clientWidth;
      setPosition({ x: widthMax.current / 2 - 50, y: heightMax.current / 2 - 50 });
    }
  }, []);
  return (
    <Container ref={containerRef}>
      <CharacterContainer style={{ left: `${position.x}px`, top: `${position.y}px` }}>
        <Image className='char' src='/img/character-standing-high.png' width='100' height='100' />
      </CharacterContainer>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

const CharacterContainer = styled.div`
  position: absolute;
  top: 50px;
`;
