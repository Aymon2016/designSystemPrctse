import React,{useState,useRef,useLayoutEffect} from 'react'
import "@dse/scss/lib/Select.css"
import Text from '../../atoms/text/text';

interface SelectOption {
    label:string;
    value:string;
}

interface SelectProps {

    label?:string;
    option?:Array<SelectOption>;
    onOptionSelected?:(option:SelectOption,optionIndex:number) => void;
}

const Select:React.FC<SelectProps> =({
     label="Please select an option",
    option = [],
    onOptionSelected,
})=>{

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [overlayTop, setOverlayTop] = useState<number>(0);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const labelRef = useRef<HTMLButtonElement>(null);

    useLayoutEffect(() => {
		setOverlayTop((labelRef.current?.offsetHeight || 0) + 50);
	}, [labelRef.current?.offsetHeight]);



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

    let selectedOption = null;
	if (selectedIndex != null) {
		selectedOption = option[selectedIndex];
	}


    return ( 
    <div className='dse-select'>
        <button className='dse-select__label'
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
                 className='dse-select__overlay'
                 style={{ top: overlayTop }}
                >
            {option.map((option,index)=>{
                const isSelected = selectedIndex ===index;
                return (
                <li 
                    className={`dse-select__option ${isSelected ? 'dse-select__option--selected':''}`}
                    key={option.value}
                    onClick = { ()=>handleOptionClick(option,index)}>
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