import {Link} from "react-router-dom";
import PostsService from "../services/PostsService.ts";
import {useEffect, useState} from "react";

interface Props{
    $id : string,
    title: string,
    featuredImage: string,
}

export default function PostCard({$id, title, featuredImage}:Props){

    const [preview, setPreview] = useState("")
    useEffect(()=>{
        PostsService.getFilePreview(featuredImage).then((res) => {
            console.log(res)
            setPreview(res)
        }).catch((error) => {
            console.error("Error fetching image preview:", error);
            //TODO: Optionally, set a fallback image or handle the error state
        })
    } , [featuredImage])

    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    <img src={preview} alt={title}
                         className='rounded-xl'/>

                </div>
                <h2
                    className='text-xl font-bold'
                >{title}</h2>
            </div>
        </Link>
    )
}