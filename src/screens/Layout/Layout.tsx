import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      {/* <div className='border-b-2 border-slate-300 flex justify-between items-center px-5 py-2'>
        <p className="font-normal text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
        <div>
        <button className="border border-red-700 px-3 py-1 rounded-md capitalize text-red-700" onClick={() => console.log('clicked')}>button</button>
        <button className="border border-red-700 px-3 py-1 ml-2 rounded-md  text-red-700" onClick={() => console.log('clicked')}>button</button>
        </div>
      </div> */}
      <nav className="bg-white px-5 py-4 flex justify-between items-center mb-8 drop-shadow-md">
        <img src='https://media.licdn.com/dms/image/C4D0BAQGbMF7PV0i8-A/company-logo_200_200/0/1620126099335?e=2147483647&v=beta&t=tnCsp9_hFT1FyKEHmKB_4e0dE_3kOkFMVqCOgHazzZo' alt="logo" className='w-[50px]' />
        <ul>
          <li className='text-black font-normal text-sm md:text-xmd'>
            <Link to="/"><span className='ml-5'>Home</span></Link>
            <Link to="/blogs"><span className='ml-5'>Blogs</span></Link>
            <Link to="/contact"><span className='ml-5'>Contact us</span></Link>
            <Link to="*"><span className='ml-5'>Another</span></Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}