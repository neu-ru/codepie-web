import styled from '@emotion/styled';
import Image from 'next/image';
import { getAssetURL } from '../../utils/asset';

interface SearchBarProps {
  visibility?: 'visible' | 'hidden' | 'collapse';
}

export default function SearchBar(
  props: SearchBarProps = { visibility: 'visible' }
) {
  return (
    <SearchContainer visibility={props.visibility} onSubmit={() => {}}>
      <ImageContainer>
        <Image
          loader={(props) => getAssetURL(props.src)}
          width={20}
          height={20}
          alt="search"
          layout={'fixed'}
          src="image/Search.svg"
        />
      </ImageContainer>
      <InputContainer>
        <InputStyle
          type="text"
          id="search"
          color={'#312E2E'}
          name="search"
          placeholder={'검색'}
          required
        />
      </InputContainer>
    </SearchContainer>
  );
}

const ImageContainer = styled.span`
  margin: 0 8px;
  display: flex;
  flex: 1;
  align-items: center;
`;

const InputContainer = styled.span`
  width: 100%;
`;

const InputStyle = styled.input`
  font-size: 14px;
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  outline: none;
`;

const SearchContainer = styled.form<SearchBarProps>`
  margin: 8px 96px;
  border-radius: 5px;
  flex: 1;
  display: flex;
  visibility: ${(props) => props.visibility};
  background: #312e2e;
`;
