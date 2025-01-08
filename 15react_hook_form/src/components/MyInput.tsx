import {forwardRef, HTMLProps, Ref, useId} from "react";

interface Props extends HTMLProps<HTMLInputElement>{
    label: string;
}

export const MyInput = forwardRef((props : Props , ref : Ref<HTMLInputElement>) =>{
    const {label , ...restProps} = props

    const id = useId()
    return (
        <div className="w-full">
            {label && <label className="inline-block mb-1 pl-1"  htmlFor={id}>{label}</label>}
            <input
                name={`name_${props.label}`}
                className="px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
                title="text"
                id={id}
                ref={ref}
                {...restProps}
            />
        </div>
    )
})