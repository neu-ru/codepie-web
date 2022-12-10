import React from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import LoginButton from './LoginButton';
import { signIn } from 'next-auth/react';

export default function Social() {
  const router = useRouter();

  return (
    <Container>
      <TitleText>개발자끼리 나누어보는 코드 이야기</TitleText>
      <Buttons>
        <LoginButton
          icon="image/github.svg"
          message="깃허브로 시작하기"
          onClick={() => signIn('github', { callbackUrl: '/' })}
        />
        {/* <LoginButton
          icon="image/google.svg"
          message="구글로 시작하기"
          onClick={() => {
            alert('not implemented');
          }}
        /> */}
      </Buttons>
      {/* <FindText>아이디 찾기</FindText> */}
    </Container>
  );
}

const Container = styled.div``;

const TitleText = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #f6f6f6;
`;

const Buttons = styled.div`
  margin-top: 14px;
`;

const FindText = styled.div``;
