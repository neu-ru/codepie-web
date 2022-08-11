import styled from '@emotion/styled';

export default function Description() {
  return (
    <Container>
      <div>
        <Text>더 완벽한 코드를 위해</Text>
        <Text>코드를 나누는 시간</Text>
      </div>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  font-weight: 700;
  font-size: 48px;
  color: #f6f6f6;
`;
