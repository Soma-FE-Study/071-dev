import styled from 'styled-components';
import Image from 'next/image';
import { useEffect } from 'react';

export default function UpButton() {
  function goUp() {
    const goingup = document.getElementById('top');
    if (goingup) goingup.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <Up onClick={goUp}>
      <Image className='img' width='80px' height='80px' src='/img/up.png' />
    </Up>
  );
}

const Up = styled.div`
  position: fixed;
  top: 80vh;
  left: 90vw;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 1);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  .img {
    opacity: 100%;
  }
`;
