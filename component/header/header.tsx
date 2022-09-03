import styled from '@emotion/styled';
import Image from 'next/image';
import {getAssetURL} from '../../utils/asset';
import SearchBar from "./search_bar";
import Action from "./action";

// TODO: User 정보로 변경
interface HeaderProps {
    isLoggedIn: boolean;
}

export default function Header(props: HeaderProps) {
    return (
        <Container>
            <Image
                loader={(props) => getAssetURL(props.src)}
                width={300}
                height={50}
                alt="logo"
                src="image/logo.svg"
            />
            <SearchBar visibility={props.isLoggedIn ? "visible" : "hidden"}/>
            <Action visibility={props.isLoggedIn ? "visible" : "hidden"}/>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  margin: 34px 13% 34px 13%;
`;
