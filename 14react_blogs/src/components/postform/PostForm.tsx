import {RootState, TPost , TPostForm} from "../../types";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {Button, Input, RTE, Select} from "../index.ts";
import {useForm} from "react-hook-form";
import {useCallback, useEffect} from "react";
import PostService from "../../services/PostService.ts";

interface Props{
    post?: TPost
}

export default function PostForm({post}: Props) {

    const navigate = useNavigate();
    const userData = useSelector((state: RootState) => state.authReds.userData);

    const {register, handleSubmit, watch, setValue, control, getValues} = useForm<TPostForm>()
    const submitPost = async (data:TPostForm)=>{
        console.log(data);
        if(post){
            // update
            const file = data.image[0] ? await PostService.uploadFile(data.image[0]) : null;
            if(file){
                await PostService.deleteFile(post.featuredImage)
            }
            // const db = await PostService.updatePost(
            //     post.postId ,
            //     fea
            // )

        }else{
            const file =await PostService.uploadFile(data.image[0]);
            if(file && userData){
                const fileId = file.$id
                const dbPost = await PostService.createPost(
                    data.title,
                    data.slug,
                    data.content,
                    fileId,
                    data.status,
                    userData.id
                )
                if(dbPost){
                    navigate(`/post/${dbPost.postId}`)
                }
            }
        }


    }

    const slugTransform = useCallback((value: string) => {
        if(value){
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");
        }
        return ""
    } , [])

    useEffect(()=>{
        const subscription = watch((value, {name})=>{
            if(name === "title"){
                setValue("slug", slugTransform(value.title!), { shouldValidate: true });
            }
        })

        return () => subscription.unsubscribe()
    },[watch , slugTransform , setValue])

    return (
        <form onSubmit={handleSubmit(submitPost)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={""}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    )
}