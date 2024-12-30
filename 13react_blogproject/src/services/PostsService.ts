import {Client , ID , Databases , Storage , Query} from "appwrite";
import {conf} from "../app/conf.ts";

class PostsService {

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
        userID:string
    ){
        try{
            return this.database.createDocument(
                conf.databaseID,
                conf.collectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userID
                }
            )
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
            return this.database.updateDocument(
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
            return await this.database.getDocument(
                conf.databaseID,
                conf.collectionID,
                slug
            )
        }catch (e) {
            console.error(e)
        }
    }

    async getAllPosts(queries = [Query.equal("status" , "active")]){
        try {
            return await this.database.listDocuments(
                conf.databaseID,
                conf.collectionID,
                queries
            )
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

const postsService = new PostsService();
export default postsService;