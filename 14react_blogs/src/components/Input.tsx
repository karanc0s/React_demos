import React, {InputHTMLAttributes, useId} from "react";


interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string,
}

export const Input = React.forwardRef<HTMLInputElement, Props>((
        props,
        ref,
        ...rest
    ) => {

        const id = useId();


        return (
            <div className='w-full'>
                {props.label && <label
                    className='inline-block mb-1 pl-1'
                    htmlFor={id}>
                    {props.label}
                </label>
                }
                <input
                    type={props.type}
                    className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${props.className}`}
                    ref={ref}
                    {...rest}
                    id={id}
                />
            </div>
        )
    }
)

//
// type FormValues = {
//     "First Name": string;
// };
//
// export const Input1 = forwardRef<HTMLInputElement, {
//     label: string
// } & ReturnType<UseFormRegister<FormValues>>>(({onChange, onBlur, name, label, ...rest}, ref) => {
//     const id = useId();
//
//
//     return (
//         <div className='w-full'>
//             {label && <label
//                 className='inline-block mb-1 pl-1'
//                 htmlFor={id}>
//                 {label}
//             </label>
//             }
//             <input
//                 // type={type}
//                 className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full `}
//                 ref={ref}
//                 {...rest}
//                 id={id}
//             />
//         </div>)
//     // <>
//     //     <label>{label}</label>
//     //     <input name={name} ref={ref} onChange={onChange} onBlur={onBlur} />
//     // </>
// });
