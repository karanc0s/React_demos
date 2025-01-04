import {Account, Client, ID,} from "appwrite";
import {conf} from "../app/conf.ts";

class AuthService {
    private static instance: AuthService;
    private account: Account;


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
                return this.login({email, password});
            }else{
                console.error("Error creating new account")
            }
        }catch(err) {
            console.log(err)
            throw err
        }
    }

    async login({email = "user@gmail.com", password = "user@123"})  {
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
            return await this.account.get()
        }catch(err){
            console.log("getCurrentUser:: Error getting current user")
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

export default AuthService.getInstance();

