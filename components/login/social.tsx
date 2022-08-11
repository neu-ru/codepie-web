import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styled from '@emotion/styled';

import GithubIcon from './github.png';
import GoogleIcon from './google.png';

export default function Social() {
  return (
    <Container>
      <TitleText>개발자끼리 나누어보는 코드 이야기</TitleText>
      <div>
        <LoginButton
          icon={GithubIcon}
          message="깃허브로 시작하기"
          onClick={() => {
            alert('깃허브 클릭');
          }}
        />
        <LoginButton
          icon={GoogleIcon}
          message="구글로 시작하기"
          onClick={() => {
            alert('구글 클릭');
          }}
        />
      </div>
      <FindText>아이디 찾기</FindText>
    </Container>
  );
}

function Comp() {
  React.useEffect(() => {
    // 마운트 (처음 렌더링 했을때만 실행되는거)
    console.log('Comp가 마운트 되었습니다.');
    return () => {
      // 언마운트 될 때
      console.log('Comp가 언마운트 되었습니다.');
    };
  }, []);

  return <div>여기가 사라질예정입니다.</div>;
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.div`
  color: #f6f6f6;
  font-weight: 500;
`;

interface LoginButtonProps {
  icon: StaticImageData;
  message: string;
  onClick: () => void;
}
function LoginButton(props: LoginButtonProps) {
  return (
    <ButtonContainer onClick={props.onClick}>
      <Image alt="ic" src={props.icon} />
      <Message>{props.message}</Message>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.button`
  width: 230px;
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
  padding: 10px;
  padding-left: 40px;
  background: #000000;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin: 10px 0;
  cursor: pointer;
`;

const Message = styled.span`
  margin-left: 10px;
`;

const FindText = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
`;
