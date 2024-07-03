"use client";
import MyButton from '@/components/Button/MyButton';
import InputField from '@/components/InputField';
import { useAppDispatch } from '@/store/hooks';
import { login } from '@/store/slices/authSlice';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form'

import { z } from 'zod'


const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
  password_confirmation: z.string().min(8)
})
type FormFields = z.infer<typeof schema>;

function Register() {
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
    try {
      if (data.password !== data.password_confirmation) {
        setError('password_confirmation', { message: "password doesn't matched" })
      }
      else {
        const response = await axios.post('http://127.0.0.1:8000/api/register', data)
        const responseData = response.data;
        if (responseData.status == 1) {
          dispatch(login({
            userData: responseData.user,

            token: responseData.token
          }))
        }
        console.log(responseData);
     
      }

    } catch (err) {
      setError("root", {
        message: `${err}`
      })

    }
  }

  return !isSubmitSuccessful ? (
    <div className='bg-gray-200 h-lvh w-full flex items-center justify-center '>
      <form className="bg-white p-10 rounded-3xl flex flex-col gap-3 items-center" action="" onSubmit={handleSubmit(onSubmit)}>

        <h1 className='text-black text-3xl font-semibold'>Register</h1>
        <InputField placeholder='User Name' type="text"
          register={register('name')}
          error={errors.name?.message} />
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
          {isSubmitting ? "Loading" : "Register"}</MyButton>
        {errors.root && <div className='text-red-500'>Something went Wrong</div>}
        <button onClick={() =>{}} className='font-semibold text-customBlue'>I have a account</button>
      </form>
    </div>
  ) : <div className='bg-gray-200 h-lvh w-full flex items-center justify-center'>successfull submitted</div>
}

export default Register