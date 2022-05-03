import styled from 'styled-components';

export default function Profile() {
  return (
    <ImgContainer>
      <img className='img' src='/img/yoon.png' />
    </ImgContainer>
  );
}

const ImgContainer = styled.div`
  .img {
    padding: 20%;
    width: 30rem;
    height: 30rem;
    border-radius: 70%;
  }
`;
