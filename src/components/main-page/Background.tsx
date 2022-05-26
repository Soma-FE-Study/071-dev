import { useState, ReactElement } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import useInterval from '../../Hooks/useInterval';

export default function Background({ children }: { children: ReactElement }) {
  const [leftImg, setLeft] = useState('/img/character-left');
  const [rightImg, setRight] = useState('/img/character-right');
  const [imgCnt, setImgCnt] = useState(0);

  useInterval(() => {
    setImgCnt((imgCnt + 1) % 4);
    setLeft(`/img/character-left-${imgCnt}.png`);
    setRight(`/img/character-right-${imgCnt}.png`);
  }, 200);

  return (
    <BackgroundCanvas id='top' className='background'>
      <LeftCharacter>
        <Image src={rightImg} alt='character' width='40' height='40' />
      </LeftCharacter>
      <RightCharacter>
        <Image src={leftImg} alt='character' width='40' height='40' />
      </RightCharacter>
      {children}
    </BackgroundCanvas>
  );
}

const RightCharacter = styled.div`
  right: 1.5rem;
  position: absolute;
  image-rendering: crisp-edges;
`;

const LeftCharacter = styled.div`
  position: absolute;
  left: 1.5rem;
  image-rendering: crisp-edges;
`;

const BackgroundCanvas = styled.div`
  background-image: url('/img/background.png');
  background-repeat: repeat;
  height: 100vh;
  width: 100vw;
`;
