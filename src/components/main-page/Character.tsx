import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

export default function Character() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [img, setImg] = useState('/img/character-standing-high.png');
  const [dir, setDir] = useState(0); //0 -> stand, 1 -> right, 2 -> left
  const [imgCnt, setImgCnt] = useState(0); // 0, 1, 2, 3

  const containerRef = useRef<HTMLDivElement | null>(null);
  let heightMax = useRef(0);
  let widthMax = useRef(0);

  const keyHandler = (event: KeyboardEvent) => {
    event.preventDefault();
    const hMAX = heightMax.current;
    const wMAX = widthMax.current;

    if (event.key === 'ArrowRight') {
      if (position.x >= wMAX - 100) {
        return;
      }

      if (dir === 1) {
        setImgCnt((imgCnt + 1) % 4);
      } else {
        setDir(1);
        setImgCnt(0);
      }
      setImg(`/img/character-right-${imgCnt}-high.png`);

      setPosition({ ...position, x: position.x + 20 });
    } else if (event.key === 'ArrowLeft') {
      if (position.x <= 10) {
        return;
      }

      if (dir === 2) {
        setImgCnt((imgCnt + 1) % 4);
      } else {
        setDir(2);
        setImgCnt(0);
      }
      setImg(`/img/character-left-${imgCnt}-high.png`);

      setPosition({ ...position, x: position.x - 20 });
    } else if (event.key === 'ArrowDown') {
      if (position.y >= hMAX - 130) {
        return;
      }

      if (dir === 0) {
        setDir(1);
        setImgCnt(-1);
      }
      setImgCnt((imgCnt + 1) % 4);
      if (dir === 1) {
        setImg(`/img/character-right-${imgCnt}-high.png`);
      } else {
        setImg(`/img/character-left-${imgCnt}-high.png`);
      }

      setPosition({ ...position, y: position.y + 20 });
    } else if (event.key === 'ArrowUp') {
      if (position.y <= 10) {
        return;
      }

      if (dir === 0) {
        setDir(1);
        setImgCnt(-1);
      }
      setImgCnt((imgCnt + 1) % 4);
      if (dir === 1) {
        setImg(`/img/character-right-${imgCnt}-high.png`);
      } else {
        setImg(`/img/character-left-${imgCnt}-high.png`);
      }

      setPosition({ ...position, y: position.y - 20 });
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
        <Image src={img} width='100' height='100' />
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
