'use client'
import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div className='mt-10 flex items-center justify-center '>
      <div className='flex flex-col justify-center items-center bg-transparent '>
        <div className='flex items-center justify-around e md:w-72 w-60'>
          <img src="robot.png"
            className='h-20'
            alt="error" />
          <h1
            className='text-white font-medium'
          >SIGN-UP</h1>
        </div>
        <input type="email"
          className=' md:w-72 w-60 text-orange-300 placeholder:text-white text-center border-white border p-1.5 rounded-xl hover:border-primary-500 hover:border-2 m-4 '
          placeholder='Email'
        />
        <input type="text"
          className=' md:w-72 w-60 text-orange-300 placeholder:text-white text-center border-white border p-1.5 rounded-xl hover:border-primary-500 hover:border-2 m-4 '
          placeholder='Username'
        />
        <input type="password"
          className=' md:w-72 w-60 text-orange-300 placeholder:text-white text-center border-white border p-1.5 rounded-xl hover:border-primary-500 hover:border-2 m-4'
          placeholder='Password'
        />
        <button className="border-2 border-primary-500 py-1 m-4 px-3 rounded-2xl bg-primary-500 hover:bg-primary-600 transition">
            SIGN-UP
        </button>
        <p className='text-amber-50'>Already <span className='text-primary-500'>Sign-up ?</span>
        <Link href='/signin'>
        <span className='hover:underline hover:text-primary-500'> SIGN-IN</span>
        </Link>
        </p>
      </div>
    </div>
  )
}

export default page
