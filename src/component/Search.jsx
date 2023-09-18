import { Search as SearchIcon } from '@mui/icons-material'
import React from 'react'

const Search = () => {
  return (
    <div className='w-[100%]'>
        <div className='flex items-center h-10 bg-amazonclone-yellow rounded'>
            <select className='w-30 p-2  bg-gray-300 text-black border text-xs xl:text-sm'>
                <option>All</option>
                <option>Deals</option>
                <option>Computers</option>
                <option>Amazon</option>
                <option>Fashion</option>
                <option>Mobiles</option>
            </select>
            <input className='flex grow items-center h-[100%] rounded-l text-black' type='text'/>
            <button className=' p-5'>
                <SearchIcon className='m-auto h-[27px]'/>
            </button>
            
        </div>
      
    </div>
  )
}

export default Search
