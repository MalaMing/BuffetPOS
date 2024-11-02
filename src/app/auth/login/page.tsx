'use client';

import { useLogin } from "@/api/auth/useAuth";
import { UserLoginRequest } from "@/interfaces/user";
import { useForm } from "react-hook-form";

export default function LoginPage() {

    const login = useLogin();
    const { register: loginForm, handleSubmit, watch, formState: { errors } } = useForm();
    
    const onSubmit = (data: any) => {
        console.log(data);
        // loginHandler();
    }

    const loginHandler = async () => {
        console.log("register");
        const loginData: UserLoginRequest = {
            email: "test@gmail.com",
            password: "jaw",
        };
        login.mutate(loginData);
    };

    const BaseForm = ({name, formId, type}: {name: string, formId: string, type: string}) => {
        return (
            <div className="flex flex-col">
                <label className="input input-bordered flex items-center gap-2">
                    {name}:
                    <input 
                        {...loginForm(`${formId}`, { required: true })} 
                        type={type}
                    />
                </label>
                
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center w-full gap-10">
            <div className="text-3xl font-bold text-primary">Login</div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 w-2/4">
                <BaseForm
                    name="Email"
                    formId="email"
                    type="email"
                />
                <BaseForm
                    name="Password"
                    formId="password"
                    type="password"
                />
                <button className="btn btn-primary" type="submit">Register</button>
            </form>
        </div>
    )
}