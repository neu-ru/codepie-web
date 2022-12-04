import styled from '@emotion/styled';

interface SpacerProps {
  width?: string;
  height?: string;
}

const Spacer = styled.span<SpacerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: block;
`;

export default Spacer;
