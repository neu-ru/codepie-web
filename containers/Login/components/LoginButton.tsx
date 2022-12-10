import styled from '@emotion/styled';

import { GithubSVG, GoogleSVG } from '@/assets/svg';

interface Props {
  icon: string;
  message: string;
  onClick: () => void;
}

const LoginButton = (props: Props) => {
  return (
    <Container onClick={props.onClick}>
      {props.icon.includes('github') && <GithubSVG />}
      {props.icon.includes('google') && <GoogleSVG />}
      <Message>{props.message}</Message>
    </Container>
  );
};

export default LoginButton;

const Container = styled.button`
  padding: 12px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #000000;
  border-radius: 5px;
`;

const Message = styled.span``;
