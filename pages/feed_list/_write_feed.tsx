import styled from "@emotion/styled";
import Avatar from "react-avatar";

export default function WriteFeed() {
    return (
        <Card>
            <Row>
                <Avatar round="100px" size="36px" src={""}/>
                이름
            </Row>
            <EditorBox>
                오늘은 어떤 코드로 리뷰를 나누어 볼까요?
            </EditorBox>
        </Card>
    );
}

const Row = styled.div`
  flex: 1;
  flex-direction: row;
`;

const EditorBox = styled.div`
  background: #312E2E;
  flex: 1;
  padding: 16px;
  border-radius: 5px;
`;

const Card = styled.div`
  margin: 48px;
  padding: 32px;
  box-shadow: 1px 1px 8px #1B1B1B;
  border-radius: 5px;
  height: 150px;
`;

