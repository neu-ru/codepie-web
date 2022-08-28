import styled from "@emotion/styled";

export default function Side() {
    return (
        <Container>
            <Card>
                <Container>
                    자주보는 태그
                </Container>
                <Container>
                    추천 유저
                </Container>
            </Card>
        </Container>
    );
}

const Container = styled.div`
    flex: 1;
`;

const Card = styled.div`
  padding: 32px;
  margin: 48px;
  box-shadow: 1px 1px 8px #1B1B1B;
  border-radius: 5px;
  height: 300px;
`;
