import styled from "@emotion/styled";
import Profile from "../../component/profile/profile";

// TODO: User 정보를 받도록 해야함.
interface WriteFeedProps {
    onClick: () => void;
}

export default function WriteFeed(props: WriteFeedProps) {
    return (
        <Card onClick={props.onClick}>
            <Profile />
            <EditorBox>
                오늘은 어떤 코드로 리뷰를 나누어 볼까요?
            </EditorBox>
        </Card>
    );
}

const EditorBox = styled.div`
  background: #312E2E;
  flex: 1;
  padding: 16px;
  margin-top: 16px;
  border-radius: 5px;
`;

const Card = styled.div`
  margin: 48px;
  padding: 32px;
  box-shadow: 1px 1px 8px #1B1B1B;
  border-radius: 5px;
`;
