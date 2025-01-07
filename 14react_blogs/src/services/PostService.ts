import {Client, Databases, ID, Query, Storage} from "appwrite";
import {conf} from "../app/conf.ts";
import {TPost} from "../types";


class PostService {
    private readonly client;
    private readonly database;
    private readonly bucket;

    constructor() {
        this.client = new Client()
            .setEndpoint(conf.appUrl)
            .setProject(conf.projectId)

        this.database = new Databases(this.client)
        this.bucket = new Storage(this.client)

    }
    async createPost(
        title:string ,
        slug:string ,
        content:string ,
        featuredImage:string ,
        status:string ,
        userId:string ){
        try{
            const document = await this.database.createDocument(
                conf.databaseID,
                conf.collectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
            const post: TPost = {
                title: document.title,
                content: document.content,
                slug: String(document.$id),
                featuredImage: document.featuredImage,
                status: document.status,
                userId: document.userId,
            }
            console.log(post)
            return post
        }catch (err){
            console.error(err)
        }
    }

    async updatePost(
        slug:string,
        title?:string,
        content?:string ,
        featuredImage?:string ,
        status?:string
    ){
        try{
            const document= await this.database.updateDocument(
                conf.databaseID,
                conf.collectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
            const post: TPost = {
                title: document.title,
                content: document.content,
                slug: String(document.$id),
                featuredImage: document.featuredImage,
                status: document.status,
                userId: document.userId,
            }
            console.log(post)
        }catch (err){
            console.error(err)
        }
    }

    async deletePost(slug:string){
        try{
            return await this.database.deleteDocument(
                conf.databaseID,
                conf.collectionID,
                slug
            )
        }catch (e) {
            console.error(e)
            return false
        }
    }

    async getPost(slug:string) {
        try {
            const document = await this.database.getDocument(
                conf.databaseID,
                conf.collectionID,
                slug
            )
            const post: TPost = {
                title: document.title,
                content: document.content,
                slug: String(document.$id),
                featuredImage: document.featuredImage,
                status: document.status,
                userId: document.userId,
            }
            console.log(post)
            return post
        }catch (e) {
            console.error(e)
        }
    }

    async getAllPosts(queries = [Query.equal("status" , "active")]){
        try {
            const list = await this.database.listDocuments(
                conf.databaseID,
                conf.collectionID,
                queries
            )
            return list.documents.map((document)=>{
                const post: TPost = {
                    title: document.title,
                    content: document.content,
                    slug: String(document.$id),
                    featuredImage: document.featuredImage,
                    status: document.status,
                    userId: document.userId,
                }
                return post
            })
        }catch (e) {
            console.error(e)
        }
    }

    async uploadFile(file : File){
        try {
            return await this.bucket.createFile(
                conf.bucketID,
                ID.unique(),
                file
            )
        }catch (e) {
            console.error(e)
        }
    }

    async getFilePreview(fileId : string){
        return this.bucket.getFilePreview(
            conf.bucketID,
            fileId
        )
    }

    async deleteFile(fileId:string){
        try {
            await this.bucket.deleteFile(
                conf.bucketID,
                fileId
            )
            return true;
        }catch (e) {
            console.error(e)
            return false;
        }
    }
}

const postsService = new PostService();
export default postsService;