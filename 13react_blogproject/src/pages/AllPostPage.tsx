import {Container, PostCard} from "../components/index.ts";
import PostsService from "../services/PostsService.ts";
import {useState , useEffect} from "react";

export default function AllPostPage(){

    const [posts, setPosts] = useState([]);
    useEffect(() => {

    }, []);
    PostsService.getAllPosts().then((data)=>{
        if(data){
            const docs = data.documents
            setPosts(docs)
        }
    })

    return (
        <Container>
            // TODO :: Types
            <div className="flex flex-wrap">
                {posts.map((post)=>(
                    <PostCard key={post.id} $id={post.id} title={post.title} featuredImage={post.featuredImage} />
                ))}
            </div>
        </Container>
    )
}