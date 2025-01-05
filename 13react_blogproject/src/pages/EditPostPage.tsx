import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import PostsService from "../services/PostsService.ts";
import {Container} from "../components";
import {PostForm} from "../components";

export default function EditPostPage(){
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            PostsService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm  />
            </Container>
        </div>
    ) : null
}