"use client";

import MyButton from '@/components/Button/MyButton';
import InputField from '@/components/InputField';
import { useAppDispatch } from '@/store/hooks';
import { login } from '@/store/slices/authSlice';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { z } from 'zod'

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})
type FormFields = z.infer<typeof schema>;

function Login() {
    
    const dispatch = useAppDispatch();


    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm<FormFields>(
        {
            defaultValues: {
                email: ""
            },
            resolver: zodResolver(schema)
        }
    )

    const onSubmit: SubmitHandler<FormFields> = async (data) => {


        try {

            const response = await axios.post('http://127.0.0.1:8000/api/login', data,
                {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type, Authorization'

                    }
                }
            );

           
            dispatch(login({ userData: response.data.user, token: response.data.token }));


   


        } catch (err) {

            setError("root", {
                message: `${err}`
            })


        }
    }
    return !isSubmitSuccessful ? (
        <div className='bg-gray-200 h-lvh w-full flex items-center justify-center '>
            <form className="bg-white p-10 rounded-3xl flex flex-col gap-3 items-center" action="" onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-black text-3xl font-semibold'>Login</h1>
                <InputField type="email"
                    placeholder="Email"
                    register={register('email', { required: 'Email is required' })}
                    error={errors.email?.message} />
                <InputField type="password" placeholder='Password'
                    register={register('password', {
                        // required:"Password is required",
                        // minLength:
                        // {
                        //     value:8,
                        //     message :"password should me at least 8 character"
                        // }
                    })}
                    error={errors.password?.message} />
                <MyButton disabled={isSubmitting} className='text-black' type='submit' >login
                    {isSubmitting ? "Loading" : "Login"}</MyButton>
                {errors.root && <div className='text-red-500'>{errors.root.message}</div>}
                <div>or</div>
                <button onClick={() => {}} className='font-semibold text-customBlue'>Register New</button>
            </form>

        </div>
    ) : <div className='bg-gray-200 h-lvh w-full flex items-center justify-center'>successfull submitted</div>
}

export default Login