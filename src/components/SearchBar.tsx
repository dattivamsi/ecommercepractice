"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import React, { useState } from 'react'

function SearchBar() {

    const [searchItems,setSearchItems] = useState("")
    const router = useRouter()


    const handleSearch = () =>{
        router.push(`/list?name=${searchItems}`)

    }
    const handleChange = (event) =>{
        setSearchItems(event.target.value)
    }
  return (
    <form className='flex items-center justify-between gap-4 bg-gray-100 rounded-md flex-1 p-2' onSubmit={() =>handleSearch()}>
        <input type="text" placeholder='Search' value={searchItems} className='flex-1 bg-transparent outline-none' onChange={(e)=>handleChange(e)}/>
        <button className='cursor-pointer'>
            <Image src="/search.png" alt='' height={16} width={16}/>
        </button>
    </form>
  )
}

export default SearchBar