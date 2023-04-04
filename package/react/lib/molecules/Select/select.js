import React__default, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import '@dse/scss/lib/Select.css';
import Text from '../../atoms/text/text.js';

const KEY_CODES = {
    ENTER: 13,
    SPACE: 32,
    DOWN_ARROW: 40,
    UP_ARROW: 38,
    ESC: 27,
};
const getNextOptionIndex = (currentIndex, option) => {
    if (currentIndex === null) {
        return 0;
    }
    if (currentIndex === option.length - 1) {
        return 0;
    }
    return currentIndex + 1;
};
const getPreviousOptionIndex = (currentIndex, option) => {
    if (currentIndex === null) {
        return 0;
    }
    if (currentIndex === 0) {
        return option.length - 1;
    }
    return currentIndex - 1;
};
const Select = ({ label = "Please select an option", option = [], onOptionSelected, renderOption, }) => {
    var _a;
    const [isOpen, setIsOpen] = useState(false);
    const [overlayTop, setOverlayTop] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [highlightedIndex, setHighlightedIndex] = useState(null);
    const [optionRefs, setOptionRefs] = useState([]);
    const labelRef = useRef(null);
    useLayoutEffect(() => {
        var _a;
        setOverlayTop((((_a = labelRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0) + 50);
    }, [(_a = labelRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight]);
    useLayoutEffect(() => {
        if (highlightedIndex !== null && isOpen) {
            const ref = optionRefs[highlightedIndex];
            if (ref && ref.current) {
                ref.current.focus();
            }
        }
    }, [isOpen, highlightedIndex]);
    useEffect(() => {
        setOptionRefs(option.map((_) => React__default.createRef()));
    }, [option.length]);
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
    const onButtonKeyDown = (event) => {
        event.preventDefault();
        if ([KEY_CODES.ENTER, KEY_CODES.SPACE, KEY_CODES.DOWN_ARROW].includes(event.keyCode)) {
            setIsOpen(true);
            highlightItem(0);
        }
    };
    const onOptionKeyDown = (event) => {
        // handle escape key press
        if (event.keyCode === KEY_CODES.ESC) {
            setIsOpen(false);
            return;
        }
        // handle down arrow key press
        if (event.keyCode === KEY_CODES.DOWN_ARROW) {
            highlightItem(getNextOptionIndex(highlightedIndex, option));
        }
        // handle up arrow key press
        if (event.keyCode === KEY_CODES.UP_ARROW) {
            highlightItem(getPreviousOptionIndex(highlightedIndex, option));
        }
        // handle enter key press
        if (event.keyCode === KEY_CODES.ENTER) {
            handleOptionClick(option[highlightedIndex], highlightedIndex);
        }
    };
    const highlightItem = (optionIndex) => {
        setHighlightedIndex(optionIndex);
    };
    let selectedOption = null;
    if (selectedIndex != null) {
        selectedOption = option[selectedIndex];
    }
    return (React__default.createElement("div", { className: 'dse-select' },
        React__default.createElement("button", { className: 'dse-select__label', ref: labelRef, onKeyDown: onButtonKeyDown, "aria-haspopup": true, "aria-expanded": isOpen ? true : undefined, "aria-controls": 'dse-select-list', onClick: handleClick },
            React__default.createElement(Text, null, selectedOption === null ? label : selectedOption.label),
            React__default.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', strokeWidth: 1.5, stroke: 'currentColor', className: `dse-select__caret ${isOpen
                    ? 'dse-select__caret--open'
                    : 'dse-select__caret--close'}`, width: '1rem', height: '1rem' },
                React__default.createElement("path", { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M19.5 8.25l-7.5 7.5-7.5-7.5' }))),
        isOpen ? React__default.createElement("ul", { role: 'menu', id: 'dse-select-list', className: 'dse-select__overlay', style: { top: overlayTop } }, option.map((option, index) => {
            const isSelected = selectedIndex === index;
            const isHighlighted = highlightedIndex === index;
            const ref = optionRefs[index];
            const renderOptionProps = {
                option,
                isSelected,
                getOptionRecommendProps: (overrideProps = {}) => (Object.assign({ 
                    // here we will define default props
                    key: option.value, className: `dse-select__option 
								 ${isSelected ? 'dse-select__option--selected' : ''} 
								 ${isHighlighted ? 'dse-select__option--highlighted' : ''}
								`, ref, role: 'menuitemradio', 'aria-checked': isSelected ? true : undefined, 'aria-label': option.label, tabIndex: isHighlighted ? -1 : 0, onClick: () => handleOptionClick(option, index), onMouseEnter: () => highlightItem(index), onMouseLeave: () => highlightItem(null), onKeyDown: onOptionKeyDown }, overrideProps)),
            };
            if (renderOption) {
                return renderOption(renderOptionProps);
            }
            return (React__default.createElement("li", Object.assign({}, renderOptionProps.getOptionRecommendProps()),
                React__default.createElement(Text, null, option.label),
                isSelected && (React__default.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', strokeWidth: 1.5, stroke: 'currentColor', className: 'w-6 h-6', width: '1rem', height: '1rem' },
                    React__default.createElement("path", { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M4.5 12.75l6 6 9-13.5' })))));
        })) : ''));
};

export { Select as default };
//# sourceMappingURL=select.js.map
