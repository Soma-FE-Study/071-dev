import styled from 'styled-components';
import Image from 'next/image';

export default function Profile() {
  return (
    <ImgContainer>
      <Image className='profileImg' src='/img/yoon.png' width='300' height='300' />
    </ImgContainer>
  );
}

const ImgContainer = styled.div`
  padding: 60px;
  .profileImg {
    border-radius: 50%;
  }
`;
