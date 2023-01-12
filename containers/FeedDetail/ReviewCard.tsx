import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import styled from '@emotion/styled';
import CommentForm from './CommentForm';

interface Props {
  image?: string;
  name: string;
  date: string;
  comment: string;
  isOutSideClick: boolean;
  setIsOutSideClick: Dispatch<SetStateAction<boolean>>;
  // reviewLines: number[];
  // isFocus: boolean;
  // onFocus: () => void;
}
// TODO: date 형태에 따라 수정
const ReviewCard = ({
  image,
  name,
  date,
  comment,
  isOutSideClick,
  setIsOutSideClick,
}: Props) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isOutSideClick) {
      setIsClicked(false);
    }
  }, [isOutSideClick]);

  const handleClickCard = () => {
    setIsClicked(true);
    setIsOutSideClick(false);
  };

  const profileImage = image ? (
    <ProfileImage src={image} />
  ) : (
    <DefaultProfileImage />
  );

  return (
    <Container isClicked={isClicked} onClick={handleClickCard}>
      <ReviewInfo>
        {profileImage}
        <ProfileName>{name}</ProfileName>
        <ReviewDate>{date}</ReviewDate>
      </ReviewInfo>
      <Comment>{comment}</Comment>
      {isClicked && <CommentForm />}
    </Container>
  );
};

export default ReviewCard;

const Container = styled.li<{ isClicked: boolean }>`
  cursor: ${(props) => (props.isClicked ? 'default' : 'pointer')};
  margin-bottom: 30px;
  padding: 20px;
  box-shadow: 1px 1px 8px #1b1b1b;
  border-radius: 5px;
  list-style: none;
`;

const ReviewInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ReviewDate = styled.span`
  margin-left: 15px;
  color: #a7a7a7;
  font-size: 14px;
`;

const Comment = styled.div`
  margin: 10px 0;
  font-size: 14px;
`;

const DefaultProfileImage = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background-color: blue;
`;
// 나중에 common의 profile로 바꿀 예정
const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 100%;
`;

const ProfileName = styled.span`
  margin-left: 10px;
  font-size: 14px;
`;
