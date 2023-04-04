import React,{useState,useRef,useLayoutEffect,useEffect, KeyboardEventHandler} from 'react'
import "@dse/scss/lib/Select.css"
import Text from '../../atoms/text/text';


const KEY_CODES = {
	ENTER: 13,
	SPACE: 32,
	DOWN_ARROW: 40,
	UP_ARROW: 38,
	ESC: 27,
};


interface SelectOption {
    label:string;
    value:string;
}


interface RenderOptionProps {

    isSelected:boolean;
    option:SelectOption;
    getOptionRecommendProps:(overrideProps?:object)=>object;

}

interface SelectProps {

    label?:string;
    option?:Array<SelectOption>;
    onOptionSelected?:(option:SelectOption,optionIndex:number) => void;
    renderOption?:(props:RenderOptionProps)=>React.ReactNode
}


const getNextOptionIndex = (
	currentIndex: number | null,
	option: Array<SelectOption>
) => {
	if (currentIndex === null) {
		return 0;
	}

	if (currentIndex === option.length - 1) {
		return 0;
	}

	return currentIndex + 1;
};

const getPreviousOptionIndex = (
	currentIndex: number | null,
	option: Array<SelectOption>
) => {
	if (currentIndex === null) {
		return 0;
	}

	if (currentIndex === 0) {
		return option.length - 1;
	}

	return currentIndex - 1;
};


const Select:React.FC<SelectProps> =({


    label="Please select an option",
    option = [],
    onOptionSelected,
    renderOption,


})=>{

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [overlayTop, setOverlayTop] = useState<number>(0);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [highlightedIndex, setHighlightedIndex] =
		useState<number | null>(null);


    const [optionRefs, setOptionRefs] = useState<React.RefObject<HTMLLIElement>[]>([]);

    const labelRef = useRef<HTMLButtonElement>(null);

    useLayoutEffect(() => {
		setOverlayTop((labelRef.current?.offsetHeight || 0) + 50);
	}, [labelRef.current?.offsetHeight]);


	useLayoutEffect(() => {
		if (highlightedIndex !== null && isOpen) {
			const ref = optionRefs[highlightedIndex];
			if (ref && ref.current) {
				ref.current.focus();
			}
		}
	}, [isOpen, highlightedIndex]);

    useEffect(() => {
		setOptionRefs(option.map((_) => React.createRef<HTMLLIElement>()));
	}, [option.length]);

    const handleClick=()=>{
        setIsOpen(true)
    }



    const handleOptionClick = (option:SelectOption,index:number)=>{

        if(onOptionSelected){
            onOptionSelected(option,index)
        }
        setSelectedIndex(index)

        setIsOpen(false)
    }

const onButtonKeyDown: KeyboardEventHandler = (event) => {
  event.preventDefault();
  
        if (
			[KEY_CODES.ENTER, KEY_CODES.SPACE, KEY_CODES.DOWN_ARROW].includes(
				event.keyCode
			)
		) {
			setIsOpen(true);
			highlightItem(0)
		}
};

const onOptionKeyDown: KeyboardEventHandler = (event) => {
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
			handleOptionClick(option[highlightedIndex!], highlightedIndex!);
		}
	};


const highlightItem = (optionIndex: number | null) => {
		setHighlightedIndex(optionIndex);
	};

    let selectedOption = null;
	if (selectedIndex != null) {
		selectedOption = option[selectedIndex];
	}


    return ( 
    <div className='dse-select'>
        <button className='dse-select__label'
            ref={labelRef}
           onKeyDown={onButtonKeyDown}
            aria-haspopup={true}
            aria-expanded={isOpen ? true : undefined}
            aria-controls='dse-select-list'
            onClick={handleClick}>
               <Text>
					{selectedOption === null ? label : selectedOption.label}
				</Text>
                <svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className={`dse-select__caret ${
						isOpen
							? 'dse-select__caret--open'
							: 'dse-select__caret--close'
					}`}
					width={'1rem'}
					height={'1rem'}
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M19.5 8.25l-7.5 7.5-7.5-7.5'
					/>
				</svg>
            </button>
        {isOpen?<ul 
                role='menu'
                id='dse-select-list'
                 className='dse-select__overlay'
                 style={{ top: overlayTop }}
                >
            {option.map((option,index)=>{
                const isSelected = selectedIndex ===index;
               const isHighlighted = highlightedIndex === index;

                const ref = optionRefs[index];
        
                const renderOptionProps: RenderOptionProps = {
                    option,
                    isSelected,
                    
                    getOptionRecommendProps: (
                        overrideProps = {}
                    ) => ({
                        // here we will define default props
                        key: option.value,
                        className: `dse-select__option 
								 ${isSelected ? 'dse-select__option--selected' : ''} 
								 ${isHighlighted ? 'dse-select__option--highlighted' : ''}
								`,
                            
                            ref,
                            role: 'menuitemradio',
							'aria-checked': isSelected ? true : undefined,
							'aria-label': option.label,
                            tabIndex: isHighlighted ? -1 : 0,
                            onClick: () => handleOptionClick(option, index),    
                            onMouseEnter: () => highlightItem(index),
							onMouseLeave: () => highlightItem(null),
                            onKeyDown: onOptionKeyDown,
                        // here we will spread override props (user given props)
                        ...overrideProps,
                    }),
                };


                if(renderOption){
                    return renderOption(renderOptionProps)
                }
                return (
                <li 
                   {...renderOptionProps.getOptionRecommendProps()}
                    >
                      <Text>{option.label}</Text>
                      {isSelected && (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='w-6 h-6'
										width={'1rem'}
										height={'1rem'}
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M4.5 12.75l6 6 9-13.5'
										/>
									</svg>
								)}
                        </li>
            )
            })}
        </ul>:''}
    </div>
    )
}

export default Select;