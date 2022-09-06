import styled from "@emotion/styled";

interface ChipProps {
    label: string;
    selected: boolean;
    onClick: () => void;
}

export default function Chip(props: ChipProps) {
    return (
        <RectangleChip className={props.selected ? "selected" : "unselected"} onClick={props.onClick}>
            {props.label}
        </RectangleChip>
    );

}

const RectangleChip = styled.button`
  margin-right: 4px;
  padding: 4px;
  border-radius: 4px;
  font-size: 12px;

  &.selected {
    background: transparent;
    border: 0.5px solid #EC8000;
  }

  &.unselected {
    background: #A7A7A7;
    border: 0;
  }
`;
