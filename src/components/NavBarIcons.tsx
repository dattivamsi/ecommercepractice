"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import CartModal from './CartModal'

function NavBarIcons() {
    const[isProfileOpen,setIsProfileOpen]=useState(false)
    const[isCartOpen,setIsCartOpen] = useState(false)

    const handleProfile = () =>{
        setIsProfileOpen(!isProfileOpen)
    }
  return (
    <div className='flex items-center gap-4 xl:gap-6'>
        <Image src="/profile.png" alt='' height={16} width={16} className='cursor-pointer relative' onClick={()=>handleProfile()}/>
        {isProfileOpen && (
            <div className='absolute top-14 p-4 rounded-md text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                <div>Logout</div>
                <div>Profile</div>
            </div>
        )}
        <Image src="/notification.png" alt='' height={16} width={16} className='cursor-pointer'/>
        <div className='cursor-pointer relative'>
        <Image src="/cart.png" alt='' height={16} width={16} className='cursor-pointer' onClick={()=>setIsCartOpen(!isCartOpen)}/>
        <div className='absolute bg-F35C7A text-white text-sm flex justify-center items-center -top-4 -right-4 rounded-full h-6 w-6 text-center'>2</div>
        </div>
        {isCartOpen && (
            <CartModal />
        )}
    </div>
  )
}

export default NavBarIcons