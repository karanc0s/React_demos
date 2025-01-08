import { useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {Button, Input, Logo} from "./index.ts";
import {Auth} from "../services/AuthService.ts";
import {AuthActions} from "../store/AuthSlice.ts";

type FormValues = {
    email: string;
    password: string;
};

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState("");

    const { handleSubmit, register } = useForm<FormValues>();
    const login =  async (data : FormValues) => {
        setError("");
        console.log(data);

        try{
            const session = await Auth.login(data.email , data.password);
            if(session){
                const userData = await Auth.getCurrentUser()
                if(userData) dispatch(
                    AuthActions.logIn(userData)
                )
                navigate("/")
            }
        }catch(err){
            console.log(err);
            setError(String(err));
        }
    };



    return (
        <div className="flex items-center justify-center w-full ">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%"/>
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(login)} className='space-y-5'>

                    <div className='space-y-5  my-3'>


                        <Input
                            label='Email'
                            placeholder="Enter your email"
                            type="email"
                            {...register("email" , {
                                required: true,
                            })}
                        />
                        <Input
                            label='Password'
                            placeholder="Enter your password"
                            type="password"
                            {...register("password" , {
                                required: true,
                            })}
                        />

                        <Button type="submit" className="w-full">Sign in</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}