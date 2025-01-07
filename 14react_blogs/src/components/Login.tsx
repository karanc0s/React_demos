import { Resolver, SubmitHandler, useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {Button, Logo} from "./index.ts";
import {Auth} from "../services/AuthService.ts";
import {AuthActions} from "../store/AuthSlice.ts";

type FormValues = {
    email: string;
    pass: string;
};

const res: Resolver<FormValues> = async (values) => {
    console.log(values);
    return {
        values: !values.email ? {} : values,
        errors: !values.email
            ? {
                email: {
                    type: "required",
                    message: "This is required."
                }
            }
            : {}
    };
};


export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState("");

    const { handleSubmit, register } = useForm<FormValues>({
        resolver:res
    });
    const login: SubmitHandler<FormValues> = async (data) => {
        setError("");
        console.log(data);

        try{
            const session = await Auth.login(data.email , data.pass);
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


                        <div className='w-full'>
                            <input
                                className="px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
                                type="email"
                                placeholder="Email"
                                {...register("email")}
                            />
                        </div>
                        <div className='w-full'>
                            <input
                                className="px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
                                type="password"
                                placeholder="Password"
                                {...register("pass")}
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full"
                        >Sign in</Button>
                    </div>
                </form>
                {/*<form onSubmit={onSubmit}>*/}
                {/*    <div>*/}
                {/*        <label>First Name</label>*/}
                {/*        <input {...register("firstName")} placeholder="Kotaro"/>*/}
                {/*        {errors?.firstName && <p>{errors.firstName.message}</p>}*/}
                {/*    </div>*/}

                {/*    <div>*/}
                {/*        <label>Last Name</label>*/}
                {/*        <input {...register("lastName")} placeholder="Sugawara"/>*/}
                {/*    </div>*/}

                {/*    <input type="submit"/>*/}
                {/*</form>*/}

            </div>
        </div>
    )
}