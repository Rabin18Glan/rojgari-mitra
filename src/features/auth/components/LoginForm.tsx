"use client";

import InputField from '@/components/InputField';
import { useAppDispatch } from '@/store/hooks';
import { login } from '@/store/slices/authSlice';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import Cookies from 'js-cookie';

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})
type FormFields = z.infer<typeof schema>;

function LoginForm() {
    
    const dispatch = useAppDispatch();
    const router = useRouter()


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

        try{
         const response = await axios.post('/api/users/login',data);
console.log(response.data.error)
          if(response.status==200)
          {
            dispatch(login(response.data.userData));
            console.log("Login successful");
            localStorage.setItem('auth', JSON.stringify(response.data.userData));
            router.push('/find-work')
          }

        }catch(err:any)
        {
console.log(err.message)
        }
    }
    return !isSubmitSuccessful ? (
       <div className='flex flex-col gap-5'> <h1 className='text-black text-3xl font-semibold'>Log in to Your Account</h1>
            <form className="  p-10 rounded-3xl flex flex-col gap-3 items-center" action="" onSubmit={handleSubmit(onSubmit)}>
               
                <InputField type="email"
                    placeholder="Email"
                    register={register('email', { required: 'Email is required' })}
                    error={errors.email?.message} />
                <InputField type="password" placeholder='Password'
                    register={register('password')}
                    error={errors.password?.message} />
                <button disabled={isSubmitting}  className='bg-blue-500 p-2 px-5 text-white rounded-xl' type='submit' >
                    {isSubmitting ? "Loading" : "Login"}</button>
                {errors.root && <div className='text-red-500'>{errors.root.message}</div>}

            </form></div>

        
    ) : <div className='bg-gray-200 h-lvh w-full flex items-center justify-center'>successfull submitted</div>
}

export default LoginForm