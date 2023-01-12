import { MouseEvent, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

import Header from '@/components/Header';
import ReviewCard from './ReviewCard';

// TODO: 들어오는 data에 따라 props 추가, ReviewList map 추가
const FeedDatail = () => {
  const outSide = useRef<HTMLElement>(null);
  const reviewRef = useRef<HTMLUListElement>(null);
  const [isOutSideClick, setIsOutSideClick] = useState(false);

  useEffect(() => {
    const handlerOutSide = (e: Event) => {
      if (!reviewRef.current?.contains(e.target as Node)) {
        setIsOutSideClick(true);
      }
    };

    document.addEventListener('mousedown', handlerOutSide);

    return () => {
      document.removeEventListener('mousedown', handlerOutSide);
    };
  }, []);

  return (
    <Container>
      <Header />
      <Body ref={outSide}>
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
            <ReviewList ref={reviewRef}>
              <ReviewCard
                name="markyul"
                date="1분 전"
                comment="handleChange 함수의 로직이 빠진 것 같습니다."
                isOutSideClick={isOutSideClick}
                setIsOutSideClick={setIsOutSideClick}
              />
              <ReviewCard
                name="Jtree"
                date="32분 전"
                comment="구조 분해 할당을 사용하여 const { Option } = Select;
라고 선언하면 더 깔끔한 코드가 될 것 같네요~"
                isOutSideClick={isOutSideClick}
                setIsOutSideClick={setIsOutSideClick}
              />
              <ReviewCard
                name="DONXUX"
                date="2시간 전"
                comment="style 코드는 inline-css 보다 컴포넌트 하나로 분리하여
따로 작성하는 것이 유지보수 측면에서 좋곘어요 😇"
                isOutSideClick={isOutSideClick}
                setIsOutSideClick={setIsOutSideClick}
              />
              <ReviewCard
                name="hongchascone"
                date="1일 전"
                comment="Select 컴포넌트 퍼가요~♡"
                isOutSideClick={isOutSideClick}
                setIsOutSideClick={setIsOutSideClick}
              />
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
  padding: 100px 10%;
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
  font-size: 14px;
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
