import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import Image from 'next/image';

import { getAssetURL } from '../../utils/asset';

interface ActionsProps {
  visibility?: 'visible' | 'hidden' | 'collapse';
}

export default function Action(
  props: ActionsProps = { visibility: 'visible' }
) {
  return (
    <Container visibility={props.visibility}>
      <IconButton>
        <Image
          loader={(props) => getAssetURL(props.src)}
          width={28}
          height={28}
          alt="search"
          layout={'fixed'}
          src="image/Bell.svg"
        />
      </IconButton>
      <IconButton>
        <Image
          loader={(props) => getAssetURL(props.src)}
          width={28}
          height={28}
          alt="search"
          layout={'fixed'}
          src="image/Box.svg"
        />
      </IconButton>
      <IconButton>
        <Image
          loader={(props) => getAssetURL(props.src)}
          width={28}
          height={28}
          alt="search"
          layout={'fixed'}
          src="image/User.svg"
        />
      </IconButton>
    </Container>
  );
}

const Container = styled.div<ActionsProps>`
  visibility: ${(props) => props.visibility};
`;
