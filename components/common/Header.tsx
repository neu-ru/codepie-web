import styled from '@emotion/styled';
import { LogoSVG } from '../../assets/svg';

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
  margin-left: 10%;
`;
