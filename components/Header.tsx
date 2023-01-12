import { LogoSVG } from '@/assets/svg';
import styled from '@emotion/styled';

interface Props {
  center?: React.ReactNode;
  right?: React.ReactNode;
}

const Header = ({ center, right }: Props) => {
  return (
    <Container>
      <LogoSVG />
      {center}
      {right}
    </Container>
  );
};

export default Header;

const Container = styled.header`
  display: flex;
  align-items: center;
  padding-top: 34px;
  padding-bottom: 34px;
  margin-left: 10%;
  margin-right: 10%;
`;
