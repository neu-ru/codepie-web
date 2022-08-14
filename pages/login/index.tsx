import styled from '@emotion/styled';

import Description from '../../components/login/description';
import Header from '../../components/login/header';
import Social from '../../components/login/social';
import Image from "next/image";
import React from "react";
import ImageLoader from "../../components/imageLoader";

export default function LoginPage() {
    return (
        <Container>
            <Pie>
                <Image loader={ImageLoader} layout="fill" alt="ic" src={"pie_piece.svg"}/>
            </Pie>
            <Header/>
            <Body>
                <Row>
                    <Description/>
                    <Social/>
                </Row>
            </Body>
        </Container>
    );
}

const Pie = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  bottom: 0;
`

const Container = styled.div`
  flex: 1;
`;

const Row = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`

const Body = styled.div`
  height: 100%;
  margin: 0 80px;
`;
