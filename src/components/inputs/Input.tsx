import React from "react";

type Props = {
    type?: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
    error?: string
}

const Input: React.FC<Props> = ({
    type = 'text',
    value,
    onChange,
    placeholder,
    error
  }) => {
    
    const hasError = !!error;

    return(
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`
                relative flex flex-row
                w-full h-fit
                justify-center items-center
                p-3 gap-3
                bg-neutral-900
                rounded-md
                font-medium
                focus:outline-none focus:ring
                transition-colors duration-200
                ${hasError ? 'border-red-500 focus:ring-red-500 text-red-500'
                    : 'border-neutral-800 focus:ring-neutral-500 text-white'
                }
            `}
        />
    );
}

export default Input;