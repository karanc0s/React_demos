import {Container} from "../components";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {TPost} from "../types";
import PostService from "../services/PostService.ts";

type TParams = {
    slug: string;
}
export default function EditPostPage(){

    const {slug} = useParams<TParams>()
    const navigate = useNavigate()
    const [post , setPost] = useState<TPost | null>(null)

    useEffect(() => {
        if(slug){
            PostService.getPost(slug).then((data)=>{
                if(post){
                    setPost(data!)
                }
            })
        }
    }, [slug, navigate, post]);

    return post ? (
        <div className="py-8">
            <Container>
                <h1>Edit Post Page</h1>
            </Container>
        </div>
    ) : null
}