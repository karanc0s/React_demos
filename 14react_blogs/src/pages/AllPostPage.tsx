import {useEffect, useState} from "react";
import PostService from "../services/PostService.ts";
import {TPost} from "../types";
import {Container, PostCard} from "../components";

export default function AllPostPage() {

    const [posts, setPosts] = useState<TPost[]>([]);
    useEffect(() => {
        PostService.getAllPosts([]).then((data) => {
            if(data){
                setPosts(data || [])
            }
        })
    }, [])

    return (
        <div className="w-full py-8">
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((item) => (
                        <div key={item.slug} className='p-2 w-1/4'>
                            <PostCard post={item}  />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}