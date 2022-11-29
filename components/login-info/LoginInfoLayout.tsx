import styled from '@emotion/styled';
import React from 'react';
import { LogoSVG } from '../../assets/svg';
import Button from '../common/Button';
import Select from '../common/Select';

export default function LoginInfoLayout() {
  const position = React.useRef('');
  const techStack = React.useRef<string[]>([]);

  return (
    <Container>
      <LogoSVG />
      <Text>맞춤 피드를 위해 추가 정보를 입력해 주세요.</Text>
      <SelectWrapper>
        <Select
          items={[
            { label: '프론트엔드', value: 'front' },
            { label: '백엔드', value: 'back' },
            { label: '인프라', value: 'infra' },
            { label: '모바일', value: 'mobile' },
            { label: '안드로이드', value: 'android' },
            { label: 'IOS', value: 'ios' },
          ]}
          placeholder="회원님의 포지션을 선택해 주세요"
          onChange={(label) => {
            if (!Array.isArray(label)) position.current = label;
          }}
        />
      </SelectWrapper>
      <SelectWrapper>
        <Select
          multiple
          items={[
            { label: 'HTML, CSS, JS', value: 'vanila_web' },
            { label: 'Node.js', value: 'nodejs' },
            { label: 'Python', value: 'python' },
            { label: 'C++', value: 'cpp' },
            { label: 'Android', value: 'android' },
            { label: 'IOS', value: 'ios' },
          ]}
          placeholder="관심있는 스택을 선택해 주세요 (최대 3개)"
          onChange={(labels) => {
            if (Array.isArray(labels)) techStack.current = labels;
          }}
        />
      </SelectWrapper>
      <ButtonWrapper>
        <Button
          onClick={() => {
            console.log('position', position.current);
            console.log('techStack', techStack.current);
          }}
        >
          입력 완료
        </Button>
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10%;
`;

const Text = styled.div`
  margin-top: 26px;
  margin-bottom: 70px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #f6f6f6;
`;

const SelectWrapper = styled.div`
  width: 300px;
  margin-bottom: 12px;
`;

const ButtonWrapper = styled.div`
  margin-top: 24px;
  width: 300px;
`;
