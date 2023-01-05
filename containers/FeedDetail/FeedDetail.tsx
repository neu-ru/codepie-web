import styled from '@emotion/styled';

import Header from '@/components/Header';

const FeedDatail = () => {
  return (
    <Container>
      <Header />
      <Body>
        <Title>Select 컴포넌트 이렇게 사용하는건 어떤가요?</Title>
        <Row>
          <Feed>
            <FeedInfo>
              <ProfileImage />
              <ProfileName>name</ProfileName>
              <FeedDate>1월 1일 오후 5:17</FeedDate>
            </FeedInfo>
            <CodeCard>코드</CodeCard>
          </Feed>
          <Review>
            <ReviewHeader>
              Reviewer Comment<ReviewCount>4</ReviewCount>
            </ReviewHeader>
            <ReviewList>
              <ReviewCard>asd</ReviewCard>
              <ReviewCard>asd</ReviewCard>
              <ReviewCard>asd</ReviewCard>
              <ReviewCard>asd</ReviewCard>
            </ReviewList>
          </Review>
        </Row>
      </Body>
    </Container>
  );
};

export default FeedDatail;

const Container = styled.div``;

const Body = styled.main`
  margin: 100px 10%;
`;

const Title = styled.h1`
  margin-bottom: 45px;
  font-size: 32px;
  font-weight: 700;
`;

const Row = styled.section`
  display: flex;
  gap: 80px;
`;

const Feed = styled.article`
  flex: 2;
`;

const FeedInfo = styled.div`
  display: flex;
  margin-bottom: 30px;
  align-items: center;
`;

// 나중에 common의 profile로 바꿀 예정
const ProfileImage = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 10px;
  border-radius: 100%;
  background-color: blue;
`;

const ProfileName = styled.span`
  font-size: 14px;
`;

const FeedDate = styled.span`
  margin-left: 20px;
  color: #a7a7a7;
  font-size: 14akwmpx;
`;

const CodeCard = styled.div`
  height: 300px;
  box-shadow: 1px 1px 8px #1b1b1b;
  border-radius: 5px;
`;

const Review = styled.article`
  flex: 1;
`;

const ReviewHeader = styled.h2``;

const ReviewCount = styled.span`
  margin-left: 10px;
  font-weight: bold;
`;

const ReviewList = styled.ul`
  margin-top: 60px;
`;

const ReviewCard = styled.li`
  margin-bottom: 30px;
  height: 150px;
  box-shadow: 1px 1px 8px #1b1b1b;
  border-radius: 5px;
  list-style: none;
`;
