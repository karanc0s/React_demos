import PostService from "../services/PostService.ts";
import {useEffect, useState} from "react";
import {RootState, TPost} from "../types";
import {Container, PostCard} from "../components/index.ts"
import {useSelector} from "react-redux";

export default function HomePage() {

    const[posts , setPosts] = useState<TPost[]>([]);
    const authStatus = useSelector((state:RootState) =>{
        return state.authReds.status
    })
    useEffect(() => {
        if(authStatus){
            PostService.getAllPosts().then((list)=>{
                if(posts){
                    setPosts(list || []);
                }
            })
        }
        console.log(`useEffect HomePage AuthStatus :${authStatus}`);
    }, [authStatus]);

    if(!authStatus){
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    if(posts.length == 0){
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Empty Posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div>
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