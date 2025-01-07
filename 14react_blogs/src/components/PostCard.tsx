import {TPost} from "../types";
import {useEffect, useState} from "react";
import PostService from "../services/PostService.ts";
import {Link} from "react-router-dom";

interface Props{
    post : TPost
}

export default function PostCard({post}:Props){
    const [preview, setPreview] = useState("")
    useEffect(()=>{
        PostService.getFilePreview(post.featuredImage).then((res) => {
            console.log(res)
            setPreview(res)
        }).catch((error) => {
            console.error("Error fetching image preview:", error);
            //TODO: Optionally, set a fallback image or handle the error state
        })
    } , [post.featuredImage])

    const $id = post.slug

    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    <img src={preview} alt={post.title}
                         className='rounded-xl'/>

                </div>
                <h2
                    className='text-xl font-bold'
                >{post.title}</h2>
            </div>
        </Link>
    )
}
