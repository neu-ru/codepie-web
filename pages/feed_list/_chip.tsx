import {Chip} from "@mui/material";

interface ChipProps {
    label: string
}

export default function DefaultChip(props: ChipProps) {
    return (
        <Chip label={props.label} color='primary' />
    );

}