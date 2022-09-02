import Avatar from "react-avatar";
import styled from "@emotion/styled";

interface ProfileProps {
    avatarSize?: string;
    nameSize?: string
    padding?: string;
    trailing?: any;
}

export default function Profile(props: ProfileProps) {
    return (
        <Container padding={props.padding}>
            <Avatar round="100px" size={props.avatarSize ?? "36px"}
                    src={"https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-1/" +
                        "258867831_481563193336979_1631726358864355454_n.jpg?stp=dst-jpg_p480x480&_nc_cat=102&ccb=1-7" +
                        "&_nc_sid=c6021c&_nc_ohc=RmAVRG8XacgAX94_ZNV&_nc_ht" +
                        "=scontent-nrt1-1.xx&oh=00_AT-UhiZrDAfSfOTHhN0-dJ5w4T-wHaxdU40zvog5GXQ0Fg&oe=6312F3EE"}/>
            <Text>
                이름
            </Text>
            {props.trailing}
        </Container>
    );
}

interface ContainerProps {
    padding?: string;
}

const Container = styled.div<ContainerProps>`
  padding: ${(props) => props.padding};
`;

interface TextProps {
    padding?: string;
    fontSize?: string;
}

const Text = styled.text<TextProps>`
  margin: 0 8px;
  font-size: ${(props) => props.fontSize};
`;
