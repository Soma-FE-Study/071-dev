import { ReactElement } from 'react';
import styled from 'styled-components';

export default function Background({ children }: { children: ReactElement }) {
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
