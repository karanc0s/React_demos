import {ReactNode} from "react";

interface Props{
    children : ReactNode
}



export default function Container ({children}:Props){

    return(
        <div className="w-full max-w-7xl mx-auto px-4 bg-blue-400">
            {children}
        </div>
    )
}


// Another way to make Functional components
// export const Container : React.FC<Props> = ({ children })=>{
//     return(
//         <div className="w-full max-w-7xl mx-auto px-4 bg-amber-500">
//             {children}
//         </div>
//     )
// }


