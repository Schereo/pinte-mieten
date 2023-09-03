import { useForm, SubmitHandler } from 'react-hook-form';
import { login, parseAuthError } from '../lib/firebase';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

type LoginValues = {
    email: string;
    password: string;
};

export function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginValues>();
    const navigate = useNavigate();
    const [firebaseError, setFirebaseError] = useState<any>(null);

    console.log(errors)

    async function onSubmit(data: LoginValues) {
        try {
            console.log(data);
            const { email, password } = data;
            await login(email, password);
            navigate('/dashboard');
        } catch (error: unknown) {
            console.error(error);
            setFirebaseError(parseAuthError(error));

        }
    }

    return (
        <div className="flex flex-col">
            <div className="bg-white shadow-md rounded md:px-8 px-4 pt-6 pb-8 md:m-4 m-1">
                <h2 className="text-2xl font-bold">Login</h2>

                <form className="flex flew-col justify-center flex-wrap fle" onSubmit={handleSubmit(onSubmit)}>
                    <div className='w-full basis-full max-w-xs mt-5 m-2'>
                    <input
                        type="text"
                        {...register('email', { required: true })}
                        placeholder="E-Mail"
                        className="input  input-bordered  w-full"
                    />
                    </div>
                    <div className='basis-full max-w-xs mt-5 m-2'>
                    <input
                        type="password"
                        {...register('password', { required: true })}
                        placeholder="Password"
                        className="input  input-bordered w-full  "
                    />
                    </div>
                    <button  className="btn btn-ghost mt-5 m-2">Anmelden</button>
                    {errors.email || errors.password ?  <div className="text-red-500 basis-full text-center">Die Email oder das Passwort ist falsch</div> : null}
                    {firebaseError ?  <div className="text-red-500 basis-full text-center">{firebaseError}</div> : null}
                </form>
            </div>
        </div>
    );
}
