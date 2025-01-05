import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";

interface Props{
    title?: string,
    slug?: string,
    content?:string,
    status?:string,
}

export default function PostForm({title,slug,content,status}:Props){

    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues:{
            title: title || "",
            slug: slug || "",
            content: content || "",
            status: status || "active"
        }
    })

    const navigate = useNavigate();
    const userData = useSelector((state: RootState) => state.authReducers.userData)


    const sumit = async(data)=>{
        
    }


    return (
        <div>
        </div>
    )
}