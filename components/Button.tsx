import styled from '@emotion/styled';
import React from 'react';

interface Props
  extends React.PropsWithChildren<
    React.ButtonHTMLAttributes<HTMLButtonElement>
  > {}

const Button = (props: Props, ref: React.ForwardedRef<HTMLButtonElement>) => {
  return <Container ref={ref} {...props} />;
};

export default React.forwardRef(Button);

const Container = styled.button`
  width: 100%;
  padding: 6px;
  background: ${(props) => (props.disabled ? '#f2c48d' : '#EC8000')};
  color: #f6f6f6;
  border-radius: 4px;
  user-select: none;
`;
