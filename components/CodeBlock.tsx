import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface Props {
  code: string;
  reviewLines?: number[];
  highlightLines?: number[];
  onChangeHighlights?: (selects: number[]) => void;
}

const CodeBlock = ({
  code,
  reviewLines,
  highlightLines,
  onChangeHighlights,
}: Props) => {
  const [selects, setSelects] = React.useState(new Set<number>());

  const jsonCode = JSON.stringify(code);
  const lines = jsonCode.slice(1, -1).split('\\n');

  const reviewLineSet = new Set<number>(reviewLines);
  const highlightLineSet = new Set<number>(highlightLines);

  const onReviewAction = (line: number) => {
    const reviewMode = !!onChangeHighlights;
    if (!reviewMode) return;
    const newSet = new Set<number>();
    newSet.add(line);
    setSelects(newSet);
    onChangeHighlights?.(Array.from(newSet.keys()).sort());
  };

  return (
    <StyledBox>
      {lines.map((line, index) => (
        <Line key={index}>
          <PreNumBox
            isSelect={selects.has(index + 1)}
            line={index + 1}
            onReviewLine={onReviewAction}
          />
          <Code
            isReview={reviewLineSet.has(index + 1)}
            isHighlight={highlightLineSet.has(index + 1)}
          >
            {line}
          </Code>
        </Line>
      ))}
    </StyledBox>
  );
};

export default CodeBlock;

const StyledBox = styled.ul`
  width: 100%;
  user-select: none;
`;

const Line = styled.li`
  margin-bottom: 4px;
`;

const Code = styled.div<{ isReview: boolean; isHighlight: boolean }>`
  display: inline;
  word-spacing: 8px;

  ${(props) =>
    props.isReview
      ? css`
          background: rgba(236, 128, 0, 0.11);
          border-bottom: 2px solid #ec8000;
        `
      : css``}

  ${(props) =>
    props.isHighlight
      ? css`
          background: rgba(236, 128, 0, 0.5);
          border-bottom: 2px solid #ec8000;
        `
      : css``}
`;

const PreNumBox = ({
  isSelect,
  line,
  onReviewLine,
}: {
  isSelect: boolean;
  line: number;
  onReviewLine: (line: number) => void;
}) => {
  const [isHover, setIsHover] = React.useState(false);

  return (
    <PreNum
      isSelect={isSelect}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => onReviewLine(line)}
    >
      {isSelect || isHover ? '+' : line}
    </PreNum>
  );
};

const PreNum = styled.div<{ isSelect: boolean }>`
  display: inline-block;
  text-align: right;
  width: 60px;
  padding-inline: 12px;
  color: #a7a7a7;
  cursor: pointer;
`;
