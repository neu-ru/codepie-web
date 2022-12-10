import styled from '@emotion/styled';

interface Props {}

const Description = ({}: Props) => {
  return (
    <Container>
      <Text>더 완벽한 코드를 위해</Text>
      <Text>코드를 나누는 시간</Text>
    </Container>
  );
};

export default Description;

const Container = styled.div``;

const Text = styled.h1`
  font-weight: 700;
  font-size: 48px;
  line-height: 1.5;
  color: #f6f6f6;
`;
