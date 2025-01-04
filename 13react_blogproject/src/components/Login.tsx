import {Resolver, useForm} from "react-hook-form";
import AuthService from "../services/AuthService.ts";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {authActions} from "../store/AuthSlice.ts";
import {Button, Input, Logo} from "./index.ts";

interface FormValues {
    email: string;
    password: string;
}
const formResolver : Resolver<FormValues> = async (values) => {
    return {
        values: !values.email ? {} : values,
        errors: !values.password? {
            password: {
                type: "required",
                message: "This is required."
            }
        } : {}
    };
}

export default function Login(){


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {register , handleSubmit } = useForm<FormValues>({resolver: formResolver})
    const [error, setError] = useState("");


    const login = handleSubmit(async (formValues) => {
        setError("")
        try {
            const session = await AuthService.login(formValues)
            if (session) {
                const userData = await AuthService.getCurrentUser()
                if (userData) {
                    dispatch(
                        authActions.logIn(userData)
                    )
                    navigate("/")
                }
            }
        } catch (err) {
            console.log(err)
            setError(String(err))
        }
    })

    return (
        <div className="flex items-center justify-center w-full">
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

                <form onSubmit={login}>
                    <div className='space-y-5'>
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button
                            type="submit"
                            className="w-full"
                        >Sign in</Button>
                    </div>
                </form>

            </div>
        </div>
    )
}


