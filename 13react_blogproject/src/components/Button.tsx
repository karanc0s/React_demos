import {ReactNode} from "react";

interface ButtonProps {
    children: ReactNode
    type?: "button" | "submit" | "reset"; // More specific types for button types
    bgColor?: string;
    textColor?: string;
    className?: string;
    // [key: string]: unknown; // To allow additional props like onClick, etc.
}


const Button: React.FC<ButtonProps> = ({
                                           children,
                                           type = "button",
                                           bgColor = "bg-blue-600",
                                           textColor = "text-white",
                                           className = "",
                                           ...props
                                       }) => {
    return (
        <button
            type={type}
            className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;