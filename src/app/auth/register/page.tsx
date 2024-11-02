'use client';

import { useRegister } from "@/api/auth/useAuth";
import { UserRegisterRequest } from "@/interfaces/user";

export default function RegisterPage() {
    const register = useRegister();

    const registerHandler = async () => {
        console.log("register");
        const registerData: UserRegisterRequest = {
            email: "test@gmail.com",
            password: "jaw",
            name: "jaw",
        };
        await register.mutateAsync(registerData);
    };

    return (
        <div>
            <div className="btn" onClick={registerHandler}>
                Register
            </div>
        </div>
    );
}
