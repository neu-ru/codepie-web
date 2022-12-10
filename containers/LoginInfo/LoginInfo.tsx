import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import styled from '@emotion/styled';
import { Position, TechStack } from '@prisma/client';

import { LogoSVG } from '@/assets/svg';
import * as api from '@/utils/api';
import Select from '@/components/Select';
import Button from '@/components/Button';
import {
  POSITION_CODE_TO_LABEL,
  POSITION_LABEL_TO_CODE,
  TECH_STACK_CODE_TO_LABEL,
  TECH_STACK_LABEL_TO_CODE,
} from './code-kr';

const LoginInfo = () => {
  const router = useRouter();

  const { data: positions } = useSWR<Position[]>('/api/positions', api.fetcher);
  const { data: techStacks } = useSWR<TechStack[]>(
    '/api/techstacks',
    api.fetcher
  );

  const selectedPositionLabel = React.useRef('');
  const selectedTechStacksLabels = React.useRef<string[]>([]);

  return (
    <Container>
      <LogoSVG />
      <Text>맞춤 피드를 위해 추가 정보를 입력해 주세요.</Text>
      <SelectWrapper>
        <Select
          items={
            positions?.map((position) => ({
              value: position.code,
              label: POSITION_CODE_TO_LABEL[position.code],
            })) ?? []
          }
          placeholder="회원님의 포지션을 선택해 주세요"
          onChange={(label) => {
            if (!Array.isArray(label)) selectedPositionLabel.current = label;
          }}
        />
      </SelectWrapper>
      <SelectWrapper>
        <Select
          multiple
          items={
            techStacks?.map((stack) => ({
              value: stack.code,
              label: TECH_STACK_CODE_TO_LABEL[stack.code],
            })) ?? []
          }
          placeholder="관심있는 스택을 선택해 주세요 (최대 3개)"
          onChange={(labels) => {
            if (Array.isArray(labels))
              selectedTechStacksLabels.current = labels;
          }}
        />
      </SelectWrapper>
      <ButtonWrapper>
        <Button
          onClick={() => {
            const positionCode =
              POSITION_LABEL_TO_CODE[selectedPositionLabel.current];
            const techStacksCodes = selectedTechStacksLabels.current.map(
              (label) => TECH_STACK_LABEL_TO_CODE[label]
            );
            api
              .post(
                '/api/signup',
                JSON.stringify({
                  position: positionCode,
                  techStacks: techStacksCodes,
                })
              )
              .then(() => {
                alert('등록 되었습니다');
                router.replace('/');
              })
              .catch((e) => {
                alert(e.message);
              });
          }}
        >
          입력 완료
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default LoginInfo;

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
