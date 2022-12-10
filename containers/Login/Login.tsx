import React from 'react';
import styled from '@emotion/styled';

import { PiePieceSVG } from '@/assets/svg';
import Header from '@/components/Header';
import Description from './components/Description';
import Social from './components/Social';

const Login = () => {
  return (
    <Container>
      <Header />
      <Body>
        <Row>
          <Description />
          <Social />
        </Row>
      </Body>
      <Pie>
        <PiePieceSVG />
      </Pie>
    </Container>
  );
};

export default Login;

const Container = styled.div``;

const Body = styled.main``;

const Row = styled.div`
  margin-top: 200px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
`;

const Pie = styled.div`
  position: absolute;
  bottom: 0;
  width: 25%;
`;
