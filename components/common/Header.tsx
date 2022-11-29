import styled from '@emotion/styled';
import Image from 'next/image';
import { LogoSVG } from '../../assets/svg';

import { getAssetURL } from '../../utils/asset';

interface Props {
  center?: React.ReactNode;
  right?: React.ReactNode;
}

export default function Header({ center, right }: Props) {
  return (
    <Container>
      <LogoSVG />
      {center}
      {right}
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  align-items: center;
  padding-top: 34px;
  padding-bottom: 34px;
  margin-left: 200px;
`;
