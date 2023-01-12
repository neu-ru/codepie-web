import { FormEvent, useRef } from 'react';

import styled from '@emotion/styled';
import colors from '@/styles/colors';
import { CheckSVG } from '@/assets/svg';

const CommentForm = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleResizeCommentHeight = () => {
    if (textareaRef.current !== null) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + 'px';
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container action="submit" method="POST" onSubmit={handleSubmit}>
      <InputComment
        ref={textareaRef}
        rows={3}
        placeholder="답글을 입력하세요."
        onChange={handleResizeCommentHeight}
      />
      <WriteBtn type="submit">
        <CheckSVG />
      </WriteBtn>
    </Container>
  );
};

export default CommentForm;

const Container = styled.form`
  padding: 10px;
  text-align: end;
  border: 1px solid #0f0a0a;
  border-radius: 5px;
`;

const InputComment = styled.textarea`
  width: 100%;
  overflow: hidden;
  background-color: #262424;
  border: none;
  resize: none;
  &:focus {
    outline: none;
  }
`;

const WriteBtn = styled.button`
  width: 25px;
  height: 25px;
  padding: 5px;
  background-color: ${colors.primary};
  border-radius: 100%;
`;
