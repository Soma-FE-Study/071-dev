import { useRef, useEffect, ReactElement } from 'react';
import { CanvasHTMLAttributes } from 'react';
import styled from 'styled-components';

export default function Background({ children }: { children: ReactElement }) {
  //   const canvasRef = useRef<HTMLCanvasElement>(null);

  //   useEffect(() => {
  //     if (!canvasRef.current) return;
  //     const ctx = canvasRef.current.getContext('2d');
  //     const image = new Image();
  //     image.src = 'img/background.png';
  //     image.onload = function () {
  //       if (!ctx) return;
  //       ctx.drawImage(image, 0, 0);
  //     };
  //   }, [canvasRef]);
  return (
    <BackgroundCanvas id='top' className='background'>
      {children}
    </BackgroundCanvas>
  );
}

const BackgroundCanvas = styled.div`
  background-image: url('/img/background.png');
  background-repeat: repeat;
  height: 100vh;
  width: 100vw;
`;
