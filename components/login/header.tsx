import styled from '@emotion/styled';
import Image from 'next/image';

import LogoIcon from '../../assets/logo.png';

export default function Header() {
  return (
    <Container>
      <Image alt="logo" src={LogoIcon} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin: 34px;
  margin-left: 13%;
`;
