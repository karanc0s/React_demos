import {Resolver, useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {Auth} from "../services/AuthService.ts";
import {AuthActions} from "../store/AuthSlice.ts";
import {Logo, Input, Button} from "./index.ts";


interface FormValues{
    fullName : string
    email : string
    password: string
}
const formResolver : Resolver<FormValues> = async (values) =>{
    // TODO :: Erros in form
    return {
        values: values,
        errors: {}
    }
}

export default function SignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register , handleSubmit} = useForm<FormValues>({
        resolver: formResolver,
    })
    const [error, setError] = useState("")
    const create = handleSubmit(async (data)=>{
        setError("")
        try{
            const session = await Auth.createAccount(data.email, data.password, data.fullName)
            if(session){
                const userData = await Auth.getCurrentUser()
                if(userData) dispatch(AuthActions.logIn(userData))
                navigate("/")
            }
        }catch (e) {
            console.log(e)
            setError(String(e))
        }
    })


    return (
        <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%"/>
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={create}>
                    <div className="space-y-5">
                        <Input
                            label="Full Name:"
                            placeholder="Enter your name"
                            {...register("fullName")}
                        />
                        <Input
                            label="Email :"
                            type="email"
                            placeholder="Enter your email"
                            {...register("email")}
                        />
                        <Input
                            label="Password :"
                            type="password"
                            placeholder="Enter your password"
                            {...register("password")}
                        />
                        <Button type="submit" className="w-full">
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}