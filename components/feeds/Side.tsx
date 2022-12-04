import styled from '@emotion/styled';
import { Button, ThemeProvider } from '@mui/material';

import Chip from './Chip';
import Profile from '../common/Profile';
import CodePieTheme from '../../styles/theme';

// TODO: 유저 정보 추가
export default function Side() {
  return (
    <Card>
      <Title>자주 보는 태그</Title>
      <Container>
        <Chip label={'Android'} selected={false} onClick={() => {}} />
        <Chip label={'iOS'} selected={false} onClick={() => {}} />
        <Chip label={'Spring'} selected={false} onClick={() => {}} />
        <Chip label={'CI/CD'} selected={false} onClick={() => {}} />
        <Chip label={'Infra'} selected={false} onClick={() => {}} />
      </Container>
      <Title>추천 유저</Title>
      <ThemeProvider theme={CodePieTheme}>
        <Container>
          <Profile
            avatarSize={'30px'}
            padding={'8px 0'}
            trailing={
              <Button variant={'text'} color={'primary'} onClick={() => {}}>
                <ButtonText>팔로우</ButtonText>
              </Button>
            }
          />
          <Profile
            avatarSize={'30px'}
            padding={'8px 0'}
            trailing={
              <Button variant={'text'} color={'primary'} onClick={() => {}}>
                <ButtonText>팔로우</ButtonText>
              </Button>
            }
          />
          <Profile
            avatarSize={'30px'}
            padding={'8px 0'}
            trailing={
              <Button variant={'text'} color={'primary'} onClick={() => {}}>
                <ButtonText>팔로우</ButtonText>
              </Button>
            }
          />
          <Profile
            avatarSize={'30px'}
            padding={'8px 0'}
            trailing={
              <Button variant={'text'} color={'primary'} onClick={() => {}}>
                <ButtonText>팔로우</ButtonText>
              </Button>
            }
          />
        </Container>
      </ThemeProvider>
    </Card>
  );
}

const ButtonText = styled.div`
  font-weight: 400;
`;

const Container = styled.div`
  flex: 1;
  height: 50%;
`;

const Title = styled.text`
  font-weight: 100;
  font-size: 12px;
`;

const Card = styled.div`
  position: sticky;
  top: 112px;
  padding: 32px;
  margin: 48px;
  box-shadow: 1px 1px 8px #1b1b1b;
  flex: 1;
  flex-direction: column;
  border-radius: 5px;
  width: 250px;
  height: 600px;
`;
