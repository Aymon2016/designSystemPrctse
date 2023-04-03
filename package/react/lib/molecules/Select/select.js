import React__default, { useState, useRef, useLayoutEffect } from 'react';
import '@dse/scss/lib/Select.css';
import Text from '../../atoms/text/text.js';

const Select = ({ label = "Please select an option", option = [], onOptionSelected, }) => {
    var _a;
    const [isOpen, setIsOpen] = useState(false);
    const [overlayTop, setOverlayTop] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const labelRef = useRef(null);
    useLayoutEffect(() => {
        var _a;
        setOverlayTop((((_a = labelRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0) + 100);
    }, [(_a = labelRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight]);
    const handleClick = () => {
        setIsOpen(true);
    };
    const handleOptionClick = (option, index) => {
        if (onOptionSelected) {
            onOptionSelected(option, index);
        }
        setSelectedIndex(index);
        setIsOpen(false);
    };
    let selectedOption = null;
    if (selectedIndex != null) {
        selectedOption = option[selectedIndex];
    }
    return (React__default.createElement("div", { className: 'dse-select' },
        React__default.createElement("button", { className: 'dse-select__label', onClick: handleClick },
            React__default.createElement(Text, null, selectedOption === null ? label : selectedOption.label),
            React__default.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', strokeWidth: 1.5, stroke: 'currentColor', className: `dse-select__caret ${isOpen
                    ? 'dse-select__caret--open'
                    : 'dse-select__caret--close'}`, width: '1rem', height: '1rem' },
                React__default.createElement("path", { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M19.5 8.25l-7.5 7.5-7.5-7.5' }))),
        isOpen ? React__default.createElement("ul", { className: 'dse-select__overlay', style: { top: overlayTop } }, option.map((option, index) => {
            const isSelected = selectedIndex === index;
            return (React__default.createElement("li", { className: `dse-select__option ${isSelected ? 'dse-select__option--selected' : ''}`, key: option.value, onClick: () => handleOptionClick(option, index) },
                React__default.createElement(Text, null, option.label),
                isSelected && (React__default.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', strokeWidth: 1.5, stroke: 'currentColor', className: 'w-6 h-6', width: '1rem', height: '1rem' },
                    React__default.createElement("path", { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M4.5 12.75l6 6 9-13.5' })))));
        })) : ''));
};

export { Select as default };
//# sourceMappingURL=select.js.map
