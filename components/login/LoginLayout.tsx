import React from 'react';
import styled from '@emotion/styled';

import Header from '../common/Header';
import Description from './Description';
import Social from './Social';
import { PiePieceSVG } from '../../assets/svg';

export default function LoginLayout() {
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
}

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
