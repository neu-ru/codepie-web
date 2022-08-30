import React from "react";
import styled from "@emotion/styled";
import Header from "./_header";
import FeedThumbnail from "./_feed_thumbnail";
import Side from "./_side";
import WriteFeed from "./_write_feed";

export default function FeedListPage() {
    return (
        <Container>
            <Header/>
            <Body>
                <Row>
                    <FeedList>
                        <WriteFeed onClick={() => {
                        }}/>
                        <FeedThumbnail/>
                        <FeedThumbnail/>
                        <FeedThumbnail/>
                    </FeedList>
                    <Side/>
                </Row>
            </Body>
        </Container>
    );
}

const FeedList = styled.div`
  flex: 3;
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const Body = styled.div`
  height: 100%;
  margin: 0 180px;
`;
