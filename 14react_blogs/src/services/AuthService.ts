import {Account, Client, ID} from "appwrite";
import {conf} from "../app/conf.ts";
import {TUser} from "../types";

class AuthService {

    private account: Account;
    private static instance: AuthService;

    private constructor() {
        const client : Client = new Client()
            .setEndpoint(conf.appUrl)
            .setProject(conf.projectId)

        this.account = new Account(client)
    }

    public static getInstance() : AuthService {
        if (!this.instance) {
            this.instance = new AuthService();
        }
        return this.instance;
    }
    async createAccount(email:string , password:string , name:string) {
        try {
            const userAcc = await this.account.create(ID.unique() , email , password , name)
            if(userAcc){
                return this.login(email, password);
            }else{
                console.error("Error creating new account")
            }
        }catch(err) {
            console.log(err)
            throw err
        }
    }
    async login(email = "user@gmail.com", password = "user@123")  {
        try{
            const result = await this.account.createEmailPasswordSession(email, password)
            console.log(result)
            return result
        }catch (err){
            console.log(err)
            throw err
        }
    }
    async getCurrentUser() {
        try{
            const data = await this.account.get()
            console.log(data)
            const user : TUser = {
                id: data.$id,
                email: data.email,
                name: data.name,
                status: data.status,
                createdAt: data.$createdAt,
                lastAccessAt: data.accessedAt
            }
            console.log(user)
            return user
        }catch(err){
            console.log(err)
        }

        return null
    }

    async logout() {
        try{
            await this.account.deleteSessions()
        }catch (err){
            console.log(err)
        }
    }



}
export const Auth =  AuthService.getInstance();