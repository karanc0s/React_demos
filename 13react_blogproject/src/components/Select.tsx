import { forwardRef, useId} from "react";


interface Props{
    options : string[]
    label : string
    className? : string
}

const Select = forwardRef<HTMLSelectElement, Props>((
    {
        options = [],
        className,
        label,
        ...restOfProps
    }: Props,
    ref
)=>{
    const id = useId()

    return (
        <div className="w-full">

            {label && <label htmlFor={id} className=''></label>}

            <select
                id={id}
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none 
                focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                {...restOfProps}
            >
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}

            </select>

        </div>
    )
})



export default Select