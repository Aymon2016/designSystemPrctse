import React from 'react';
import "@dse/scss/lib/Select.css";
interface SelectOption {
    label: string;
    value: string;
}
interface RenderOptionProps {
    isSelected: boolean;
    option: SelectOption;
    getOptionRecommendProps: (overrideProps?: object) => object;
}
interface SelectProps {
    label?: string;
    option?: Array<SelectOption>;
    onOptionSelected?: (option: SelectOption, optionIndex: number) => void;
    renderOption?: (props: RenderOptionProps) => React.ReactNode;
}
declare const Select: React.FC<SelectProps>;
export default Select;
