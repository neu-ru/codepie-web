import styled from '@emotion/styled';

import Description from '../../components/login/description';
import Header from '../../components/login/header';
import Social from '../../components/login/social';

export default function LoginPage() {
  return (
    <Container>
      <Header />
      <Body>
        <Description />
        <Social />
      </Body>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Body = styled.div`
  display: flex;
  flex: 1;
  margin: 0 80px;
`;
