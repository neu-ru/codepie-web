import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { getAssetURL } from '../../utils/asset';

export default function Social() {
  const router = useRouter();

  return (
    <Container>
      <TitleText>개발자끼리 나누어보는 코드 이야기</TitleText>
      <div>
        <LoginButton
          icon="github.svg"
          message="깃허브로 시작하기"
          onClick={() =>
            router.push(
              `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/github/redirect`
            )
          }
        />
        <LoginButton
          icon="google.svg"
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

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const TitleText = styled.div`
  color: #f6f6f6;
  font-weight: 500;
`;

interface LoginButtonProps {
  icon: string;
  message: string;
  onClick: () => void;
}

function LoginButton(props: LoginButtonProps) {
  return (
    <ButtonContainer onClick={props.onClick}>
      <Image
        loader={(props) => getAssetURL(props.src)}
        width={24}
        height={24}
        alt="ic"
        src={props.icon}
      />
      <Message>{props.message}</Message>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.button`
  width: 230px;
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
  padding: 10px 10px 10px 40px;
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
