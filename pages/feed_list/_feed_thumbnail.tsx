import styled from "@emotion/styled";
import Avatar from "react-avatar";
import Image from "next/image";
import {getAssetURL} from "../../utils/asset";
import DefaultChip from "./_chip";

export default function FeedThumbnail() {
    return (
        <Card>
            <Row>
                <ProfileAndCodeContainer>
                    <Row>
                        <Profile/>
                        <Code/>
                    </Row>
                </ProfileAndCodeContainer>
                <Buttons/>
            </Row>
        </Card>
    );
}

function Profile() {
    return (
        <ProfileContainer>
            <Row>
                <div>
                    <Avatar round="100px" size="36px" src={""}/>
                </div>
                <div>
                    <div>
                        아아디
                    </div>
                    <div>
                        8월 13일
                    </div>
                </div>
            </Row>
            <Row>
                <DefaultChip label={"Front-End"}/>
                <DefaultChip label={"Back-End"}/>
            </Row>
        </ProfileContainer>
    );
}

function Code() {
    return (
        <CodeContainer>
            <div>
                코드 제목
            </div>
            <div>
                코드내용
            </div>
        </CodeContainer>
    );
}

function Buttons() {
    return (
        <ButtonsContainer>
            <Column>
                <Column>
                    <Image
                        loader={(props) => getAssetURL(props.src)}
                        alt="ic_eye"
                        width={24}
                        height={24}
                        src={'image/Eye.svg'}
                    />
                    <Text>20</Text>
                </Column>
                <Column>
                    <Image
                        loader={(props) => getAssetURL(props.src)}
                        alt="ic_like"
                        width={24}
                        height={24}
                        src={'image/Like.svg'}
                    />
                    20
                </Column>
                <Column>
                    <Image
                        loader={(props) => getAssetURL(props.src)}
                        alt="ic_message"
                        width={24}
                        height={24}
                        src={'image/Message.svg'}
                    />
                    20
                </Column>
                <Column>
                    <Image
                        loader={(props) => getAssetURL(props.src)}
                        alt="ic_bookmark"
                        width={24}
                        height={24}
                        src={'image/Bookmark.svg'}
                    />
                </Column>
            </Column>
        </ButtonsContainer>
    );
}

const Text = styled.div`
  flex: 1;
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
  flex: 1;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const ProfileAndCodeContainer = styled.div`
  flex: 1;
  padding: 32px;
  box-shadow: 1px 1px 8px #1B1B1B;
  height: 300px;
`;

const ProfileContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const ButtonsContainer = styled.div`
  padding: 32px 16px;
  flex-direction: column;
`;

const CodeContainer = styled.div`
  flex: 3;
`;
