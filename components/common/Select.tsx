import React from 'react';
import styled from '@emotion/styled';

import { CheckSVG, TriDownSVG } from '../../assets/svg';
import colors from '../../styles/colors';

type Props = {
  items: { label: string; value: string }[];
  placeholder?: string;
  onChange?: (value: string | string[]) => void;
  multiple?: boolean;
};

export default function Select({
  items,
  placeholder,
  onChange,
  multiple,
}: Props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentLabel, setCurrentLabel] = React.useState('');
  const [currentLabels, setCurrentLabels] = React.useState<string[]>([]);

  const isMultiple = !!multiple;
  const isClicked = !isMultiple ? !!currentLabel : !!currentLabels.length;

  return (
    <Container>
      <SelectWrapper onClick={() => setIsOpen((p) => !p)} isClick={isClicked}>
        {(isMultiple
          ? currentLabels.map((label) => `[${label}]`).join(' ')
          : currentLabel) || placeholder}
        <TriDownWrapper isClick={isClicked}>
          <TriDownSVG />
        </TriDownWrapper>
      </SelectWrapper>
      {isOpen && (
        <ItemsWrapper>
          {items.map((item) => (
            <Item
              key={item.label}
              label={item.label}
              isSelected={
                currentLabel === item.label ||
                currentLabels.includes(item.label)
              }
              onClick={() => {
                if (isMultiple) {
                  setCurrentLabels((prev) => {
                    let newLabels = [...prev];
                    const isExistLabel = newLabels.includes(item.label);
                    if (isExistLabel) {
                      newLabels = newLabels.filter(
                        (label) => label !== item.label
                      );
                    }
                    if (!isExistLabel) {
                      if (newLabels.length === 3) {
                        alert('관심 분야는 3개까지만 입력 가능합니다.');
                        return newLabels;
                      }
                      newLabels.push(item.label);
                    }
                    onChange?.(newLabels);
                    return newLabels;
                  });
                }
                if (!isMultiple) {
                  onChange?.(item.value);
                  setCurrentLabel(item.label);
                  setIsOpen(false);
                }
              }}
            />
          ))}
        </ItemsWrapper>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  position: relative;
  user-select: none;
`;

const SelectWrapper = styled.div<{ isClick: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #262424;
  border: 1px solid ${(props) => (props.isClick ? '#A7A7A7' : colors.primary)};
  border-radius: 5px;
  padding: 10px 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  color: #f6f6f6;
  cursor: pointer;
`;

const TriDownWrapper = styled.div<{ isClick: boolean }>`
  width: 10px;
  height: 5px;
  color: ${(props) => (props.isClick ? '#A7A7A7' : colors.primary)};
`;

const ItemsWrapper = styled.div`
  width: 100%;
  height: 192px;
  position: absolute;
  background: #262424;
  border: 1px solid ${colors.primary};
  border-radius: 5px;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  z-index: 2;
  ::-webkit-scrollbar {
    display: none;
  }
`;

type ItemProp = {
  label: string;
  onClick?: VoidFunction;
  isSelected?: boolean;
};

function Item({ label, onClick, isSelected }: ItemProp) {
  return (
    <ItemWrapper onClick={onClick} isSelected={isSelected}>
      {label}
      {isSelected && (
        <CheckWrapper>
          <CheckSVG />
        </CheckWrapper>
      )}
    </ItemWrapper>
  );
}

const ItemWrapper = styled.div<{ isSelected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  color: ${(props) => (props.isSelected ? '#EC8000' : '#f6f6f6')};
  cursor: pointer;
  :hover {
    color: ${colors.primary};
  }
`;

const CheckWrapper = styled.div`
  width: 15px;
  height: 11px;
`;
