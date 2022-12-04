import styled from '@emotion/styled';
import Image from 'next/image';
import { getAssetURL } from '../../utils/asset';
import Chip from './Chip';
import NumberUtils from '../../utils/number_utils';
import Spacer from '../../styles/spacer';
import Profile from '../common/Profile';

// TODO: 유저 파리미터 추가
export default function FeedThumbnail() {
  return (
    <Card>
      <Row>
        <Container>
          <Row>
            <ProfileContainer>
              <Profile date={'2022.08.03 화'} />
              <ChipRow>
                <Chip label={'Front-End'} selected={true} onClick={() => {}} />
                <Chip label={'Back-End'} selected={true} onClick={() => {}} />
              </ChipRow>
            </ProfileContainer>
            <EditorThumbnail />
          </Row>
        </Container>
        <Features />
      </Row>
    </Card>
  );
}

const Container = styled.div`
  flex: 1;
  padding: 32px;
  box-shadow: 1px 1px 8px #1b1b1b;
  height: 300px;
`;

const ProfileContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Card = styled.div`
  margin: 48px;
  box-shadow: 1px 1px 8px #1b1b1b;
  border-radius: 5px;
  height: 300px;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 8px;
  flex: 1;
  flex-direction: row;
`;

const ChipRow = styled.div`
  width: 100%;
  display: flex;
  margin: 16px 0;
  flex: 1;
  flex-direction: row;
`;

// TODO: 에디터 컴포넌트 삽입
function EditorThumbnail() {
  return <EditorThumbnailContainer>에디터</EditorThumbnailContainer>;
}

const EditorThumbnailContainer = styled.div`
  border: 1px solid yellow;
  flex: 3;
`;

function Features() {
  return (
    <FeaturesContainer>
      <Feature>
        <Image
          loader={(props) => getAssetURL(props.src)}
          alt="ic_eye"
          width={24}
          height={24}
          src={'image/Eye.svg'}
        />
        <Text>{NumberUtils.format(543000)}</Text>
      </Feature>
      <Spacer height={'8px'} />
      <Feature>
        <Image
          loader={(props) => getAssetURL(props.src)}
          alt="ic_like"
          width={24}
          height={24}
          src={'image/Like.svg'}
        />
        <Text>{NumberUtils.format(12300)}</Text>
      </Feature>
      <Spacer height={'8px'} />
      <Feature>
        <Image
          loader={(props) => getAssetURL(props.src)}
          alt="ic_message"
          width={24}
          height={24}
          src={'image/Message.svg'}
        />
        <Text>{NumberUtils.format(349)}</Text>
      </Feature>
      <Spacer height={'35%'} />
      <Image
        loader={(props) => getAssetURL(props.src)}
        alt="ic_bookmark"
        width={24}
        height={24}
        src={'image/Bookmark.svg'}
      />
    </FeaturesContainer>
  );
}

const Feature = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeaturesContainer = styled.div`
  padding: 32px 16px;
  flex-direction: column;
`;

const Text = styled.text`
  font-size: 12px;
  margin-top: 2px;
  font-weight: lighter;
  text-align: center;
`;
