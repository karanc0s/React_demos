import {useEffect, useState} from "react";
import {RootState, TPost} from "../types";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {Button, Container} from "../components";
import PostService from "../services/PostService.ts";
import parse from "html-react-parser";


type TParams = {
    slug: string;
}
export default function PostPage() {
    const [post, setPost] = useState<TPost | null>(null);
    const [ftImage, setftImage] = useState("");
    const {slug} = useParams<TParams>();
    const navigate = useNavigate();
    const userData = useSelector((state: RootState) => {
        return state.authReds.userData
    })
    const isAuthor = (post && userData) ? post.userId === userData.id : false;

    useEffect(() => {
        if(slug){
            PostService.getPost(slug).then((data)=>{
                if(data){
                    setPost(data)
                    PostService.getFilePreview(data.featuredImage).then((img)=>{
                        setftImage(img)
                    })
                }else{
                    navigate("/")
                }
            })
        }
    }, [navigate, slug])

    const deletePost = ()=>{

    }


    return post ? (
        <div className="py-8" >
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={ftImage}
                        alt={post.title}
                        className="rounded-xl"
                    />
                    {
                        isAuthor && (
                            <div className="absolute right-6 top-6">
                                <Link to={`/edit-post/${post.slug}`}>
                                    <Button bgColor="bg-green-500" className="mr-3">
                                        Edit
                                    </Button>
                                </Link>
                                <Button bgColor="bg-red-500" onClick={deletePost} >
                                    Delete
                                </Button>
                            </div>
                        )
                    }
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}