import styled from "@emotion/styled";
import Avatar from "react-avatar";

// TODO: User 정보를 받도록 해야함.
interface WriteFeedProps {
    onClick: () => void;
}

export default function WriteFeed(props: WriteFeedProps) {
    return (
        <Card onClick={props.onClick}>
            <Avatar round="100px" size="36px"
                    src={"https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-1/" +
                        "258867831_481563193336979_1631726358864355454_n.jpg?stp=dst-jpg_p480x480&_nc_cat=102&ccb=1-7" +
                        "&_nc_sid=c6021c&_nc_ohc=RmAVRG8XacgAX94_ZNV&_nc_ht" +
                        "=scontent-nrt1-1.xx&oh=00_AT-UhiZrDAfSfOTHhN0-dJ5w4T-wHaxdU40zvog5GXQ0Fg&oe=6312F3EE"}/>
            <Text>
                이름
            </Text>
            <EditorBox>
                오늘은 어떤 코드로 리뷰를 나누어 볼까요?
            </EditorBox>
        </Card>
    );
}

const Text = styled.text`
  padding: 8px;
`;

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

