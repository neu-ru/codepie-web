import styled from '@emotion/styled';
import Image from 'next/image';
import ImageLoader from "../imageLoader";

export default function Header() {
  return (
    <Container>
      <Image loader={ImageLoader} width={300} height={50} alt="logo" src="logo.svg" />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  margin: 34px 34px 34px 13%;
`;
