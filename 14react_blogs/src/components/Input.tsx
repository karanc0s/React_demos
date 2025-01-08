import React, {HTMLProps, Ref, useId} from "react";


interface Props extends HTMLProps<HTMLInputElement> {
    label?: string,
}

export const Input = React.forwardRef((
        props: Props,
        ref: Ref<HTMLInputElement>
    ) => {

        const {label, type, ...restOfProps} = props
        const id = useId();

        return (
            <div className='w-full'>
                {label && <label
                    className='inline-block mb-1 pl-1'
                    htmlFor={id}>
                    {label}
                </label>
                }
                <input
                    type={type}
                    className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${props.className}`}
                    ref={ref}
                    {...restOfProps}
                    id={id}
                />
            </div>
        )
    }
)