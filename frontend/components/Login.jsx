import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  return (
    <div>
    <dialog id="my_modal_3" className="modal">
     <div className="modal-box">
       <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
       </form>
    <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br/>
        <input type='email' placeholder='Enter Your Email' className='w-00 px-7 py-1 border rounded-md outline-none'
        input {...register("email", { required: true })}/>
        <br/>
        {errors.email && <span className='text-sm text-red-500'>Email is required</span>}
     </div>
    {/*Password*/}
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br/>
        <input type='password' placeholder='Enter Your Password' className='w-00 px-7 py-1 border rounded-md outline-none'
        input {...register("password", { required: true })}/>
        <br/>
        {errors.password && <span className='text-sm text-red-500'>Password is required</span>}
    </div>
    {/*Button*/}
    <div className='flex justify-around mt-4'>
      <button className='bg-blue-500 text-white rounded-md px-5 py-1.5 hover:bg-blue-700 duration-200'>Login</button>
        <p>Not registered!? <Link to="/Signup" className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
      
    </div>
  </div>
  </dialog>
</div>
  )
}

export default Login