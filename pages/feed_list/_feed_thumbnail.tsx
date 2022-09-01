import styled from "@emotion/styled";
import Avatar from "react-avatar";
import Image from "next/image";
import {getAssetURL} from "../../utils/asset";
import Chip from "./_chip";
import NumberUtils from "../../utils/number_utils";
import Spacer from "../../component/style/spacer";

// TODO: 유저 파리미터 추가
export default function FeedThumbnail() {
    return (
        <Card>
            <Row>
                <Container>
                    <Row>
                        <Profile/>
                        <EditorThumbnail/>
                    </Row>
                </Container>
                <Features/>
            </Row>
        </Card>
    );
}

function Profile() {
    return (
        <ProfileContainer>
            <Row>
                <Avatar round="100px" size="36px"
                        src={"https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-1/" +
                            "258867831_481563193336979_1631726358864355454_n.jpg?stp=dst-jpg_p480x480&_nc_cat=102&ccb=1-7" +
                            "&_nc_sid=c6021c&_nc_ohc=RmAVRG8XacgAX94_ZNV&_nc_ht" +
                            "=scontent-nrt1-1.xx&oh=00_AT-UhiZrDAfSfOTHhN0-dJ5w4T-wHaxdU40zvog5GXQ0Fg&oe=6312F3EE"}/>
                <div>
                    <Name>
                        이름
                    </Name>
                    <div/>
                    <Date>
                        8월 13일 오후 5:17
                    </Date>
                </div>
            </Row>
            <Row>
                <Chip label={"Front-End"} selected={true} onClick={() => {
                }}/>
                <Chip label={"Back-End"} selected={true} onClick={() => {
                }}/>
            </Row>
        </ProfileContainer>
    );
}

// TODO: 에디터 컴포넌트 삽입
function EditorThumbnail() {
    return (
        <EditorThumbnailContainer>
            에디터
        </EditorThumbnailContainer>
    );
}

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
            <Spacer height={'8px'}/>
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
            <Spacer height={'8px'}/>
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
            <Spacer height={'35%'}/>
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

const Name = styled.text`
  padding: 8px;
`;

const Date = styled.text`
  padding: 8px;
  font-size: 12px;
  font-weight: lighter;
  color: #A7A7A7;
`;

const Text = styled.text`
  font-size: 12px;
  margin-top: 2px;
  font-weight: lighter;
  text-align: center;
`;

const Card = styled.div`
  margin: 48px;
  box-shadow: 1px 1px 8px #1B1B1B;
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

const Feature = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  flex: 1;
  padding: 32px;
  box-shadow: 1px 1px 8px #1B1B1B;
  height: 300px;
`;

const ProfileContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const FeaturesContainer = styled.div`
  padding: 32px 16px;
  flex-direction: column;
`;

const EditorThumbnailContainer = styled.div`
  border: 1px solid yellow;
  flex: 3;
`;
