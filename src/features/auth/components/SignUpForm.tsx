"use client";
import MyButton from '@/components/Button/MyButton';
import InputField from '@/components/InputField';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { z } from 'zod';
import { UserAuthData } from '@/types/userTypes';
import { setUserAuthDetails } from '@/store/slices/userFormSlice';


const schema = z.object({
  username: z.string().min(3),

  email: z.string().email(),
  password: z.string().min(8),
  password_confirmation: z.string().min(8),

})
type FormFields = z.infer<typeof schema>;


function SignUpForm() {
  const {role,skills,title} = useAppSelector(state=>state.userForm)
  const router = useRouter();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful } }
    = useForm<FormFields>(
      {
        defaultValues: {
          email: ""
        },
        resolver: zodResolver(schema)
      }
    )


  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const userData = {
      ...data,
role,
skills,
title
    }
    
    try {
      if (data.password !== data.password_confirmation) {
        setError('password_confirmation', { message: "password doesn't matched" })
      }
      else {
        
        console.log(userData);
        const response = await axios.post('http://localhost:3000/api/users/signup',userData).catch((error)=>console.log(error))
        const responseData = response.data;
        if (response.status == 200||responseData.success) {
          router.push('/signup/check-email');
        }
        console.log(responseData.data.error);
     
      }

     

    } catch (err:any) {
      setError("root", {
        message: `${err}`
      }
      
    )
    toast.error(err.message)

    }


  }

  return !isSubmitSuccessful ? (
    <div className='flex flex-col gap-5'> <h1 className='text-black text-3xl font-semibold'>Create New Account</h1>
      <form className="bg-white p-10 rounded-3xl flex flex-col gap-3 items-center" action="" onSubmit={handleSubmit(onSubmit)}>
        <InputField placeholder='User Name' type="text"
          register={register('username')}
          error={errors.username?.message} />
        <InputField type="email"
          placeholder="Email"
          register={register('email', { required: 'Email is required' })}
          error={errors.email?.message} />
        <InputField type="password" placeholder='Password'
          register={register('password')}
          error={errors.password?.message} />
        <InputField type="password" placeholder='Confirm Password'
          register={register('password_confirmation')}
          error={errors.password_confirmation?.message} />
        <MyButton disabled={isSubmitting} className='bg-blue-500' type='submit'>
          {isSubmitting ? "Loading" : "Create"}</MyButton>
        {errors.root && <div className='text-red-500'>Something went Wrong</div>}

      </form>
    </div>
  ) : <div className='bg-gray-200 h-lvh w-full flex items-center justify-center'>successfull submitted</div>
}

export default SignUpForm