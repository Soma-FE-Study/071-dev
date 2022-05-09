import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

export default function Character() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [img, setImg] = useState('/img/character-standing-high.png');
  const [dir, setDir] = useState(0); //0 -> stand, 1 -> right, 2 -> left
  const [imgCnt, setImgCnt] = useState(0); // 0, 1, 2, 3
  const [keyPressed, setKeyPressed] = useState({ right: 0, left: 0, up: 0, down: 0 });

  const containerRef = useRef<HTMLDivElement | null>(null);
  let heightMax = useRef(0);
  let widthMax = useRef(0);

  const removeKey = (event: KeyboardEvent) => {
    event.preventDefault();
    if (event.key === 'ArrowRight') {
      setKeyPressed({ ...keyPressed, right: 0 });
    } else if (event.key === 'ArrowLeft') {
      setKeyPressed({ ...keyPressed, left: 0 });
    } else if (event.key === 'ArrowDown') {
      setKeyPressed({ ...keyPressed, down: 0 });
    } else if (event.key === 'ArrowUp') {
      setKeyPressed({ ...keyPressed, up: 0 });
    }
  };

  const keyHandler = (event: KeyboardEvent) => {
    event.preventDefault();
    console.log(keyPressed);
    const hMAX = heightMax.current;
    const wMAX = widthMax.current;

    if (event.key === 'ArrowRight') {
      setKeyPressed({ ...keyPressed, right: 1 });
      if (position.x >= wMAX - 100 || position.y >= hMAX - 130 || position.y <= 10) {
        return;
      }
      if (dir === 1) {
        setImgCnt((imgCnt + 1) % 4);
      } else {
        setDir(1);
        setImgCnt(0);
      }
      setImg(`/img/character-right-${imgCnt}-high.png`);
      if (keyPressed.down) {
        setPosition({ ...position, x: position.x + 20, y: position.y + 20 });
      } else if (keyPressed.up) {
        setPosition({ ...position, x: position.x + 20, y: position.y - 20 });
      } else {
        setPosition({ ...position, x: position.x + 20 });
      }
    } else if (event.key === 'ArrowLeft') {
      setKeyPressed({ ...keyPressed, left: 1 });
      if (position.x <= 10 || position.y >= hMAX - 130 || position.y <= 10) {
        return;
      }

      if (dir === 2) {
        setImgCnt((imgCnt + 1) % 4);
      } else {
        setDir(2);
        setImgCnt(0);
      }
      setImg(`/img/character-left-${imgCnt}-high.png`);
      if (keyPressed.up) {
        setPosition({ ...position, x: position.x - 20, y: position.y - 20 });
      } else if (keyPressed.down) {
        setPosition({ ...position, x: position.x - 20, y: position.y + 20 });
      } else {
        setPosition({ ...position, x: position.x - 20 });
      }
    } else if (event.key === 'ArrowDown') {
      setKeyPressed({ ...keyPressed, down: 1 });
      if (position.y >= hMAX - 130 || position.x <= 10 || position.x >= wMAX - 100) {
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
      if (keyPressed.right) {
        setPosition({ ...position, x: position.x + 20, y: position.y + 20 });
      } else if (keyPressed.left) {
        setPosition({ ...position, x: position.x - 20, y: position.y + 20 });
      } else {
        setPosition({ ...position, y: position.y + 20 });
      }
    } else if (event.key === 'ArrowUp') {
      setKeyPressed({ ...keyPressed, up: 1 });
      if (position.y <= 10 || position.x <= 10 || position.x >= wMAX - 100) {
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
      if (keyPressed.right) {
        setPosition({ ...position, x: position.x + 20, y: position.y - 20 });
      } else if (keyPressed.left) {
        setPosition({ ...position, x: position.x - 20, y: position.y - 20 });
      } else {
        setPosition({ ...position, y: position.y - 20 });
      }
    }

    if (position.y <= heightMax.current * 0.3 && position.x <= widthMax.current * 0.15) {
      const intro = document.getElementById('intro');
      if (intro) intro.scrollIntoView({ behavior: 'smooth' });
      setPosition({ x: widthMax.current / 2 - 50, y: heightMax.current / 2 - 50 });
      setImg('/img/character-standing-high.png');
    } else if (position.y <= heightMax.current * 0.3 && position.x >= widthMax.current * 0.8) {
      const project = document.getElementById('project');
      if (project) project.scrollIntoView({ behavior: 'smooth' });
      setPosition({ x: widthMax.current / 2 - 50, y: heightMax.current / 2 - 50 });
      setImg('/img/character-standing-high.png');
    } else if (position.y >= heightMax.current * 0.7 && position.x <= widthMax.current * 0.15) {
      const skillStack = document.getElementById('skillStack');
      if (skillStack) skillStack.scrollIntoView({ behavior: 'smooth' });
      setPosition({ x: widthMax.current / 2 - 50, y: heightMax.current / 2 - 50 });
      setImg('/img/character-standing-high.png');
    } else if (position.y >= heightMax.current * 0.7 && position.x >= widthMax.current * 0.8) {
      const contact = document.getElementById('contact');
      if (contact) contact.scrollIntoView({ behavior: 'smooth' });
      setPosition({ x: widthMax.current / 2 - 50, y: heightMax.current / 2 - 50 });
      setImg('/img/character-standing-high.png');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keyHandler);
    window.addEventListener('keyup', removeKey);
    return () => {
      window.removeEventListener('keydown', keyHandler);
      window.removeEventListener('keyup', removeKey);
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
        <Nickname>영기</Nickname>
        <Image src={img} width='100' height='100' />
      </CharacterContainer>
    </Container>
  );
}

const Nickname = styled.div`
  background-color: white;
  width: 50%;
  font-family: sans-serif;
  border-radius: 30px;
  font-size: 15px;
  text-align: center;
`;

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

const CharacterContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 50px;
`;
