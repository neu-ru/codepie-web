import styled from '@emotion/styled';

import FeedThumbnail from './Thumbnail';
import Side from './Side';
import WriteFeed from './WriteFeed';
import Header from '../common/Header';
import SearchBar from '../common/SearchBar';
import Action from '../common/Action';

export default function FeedsLayout() {
  return (
    <Container>
      <Header center={<SearchBar />} right={<Action />} />
      <Body>
        <Row>
          <FeedList>
            <WriteFeed onClick={() => {}} />
            <FeedThumbnail />
            <FeedThumbnail />
            <FeedThumbnail />
          </FeedList>
          <Side />
        </Row>
      </Body>
    </Container>
  );
}

const FeedList = styled.div`
  flex: 3;
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const Body = styled.div`
  height: 100%;
  margin: 0 180px;
`;
