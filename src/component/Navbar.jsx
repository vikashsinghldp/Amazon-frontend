import { ShoppingCart } from '@mui/icons-material'
import React from 'react'
import Search from './Search'

const Navbar = () => {
  return (
    <header className='min-w-[1000px]'>
        <div className='flex bg-amazonclone text-white h-[60px]'>
            {/* left */}

            <div className='flex items-center'>
                <img className='h-[35px] w-[100px] m-2' src={"../images/amazon.png"}/>
              <div className='pr-4 pl-4'>
                <div className='text-xs xl:text-sm'>Deliver to</div>
                <div className='text-sm xl:text-base font-bold'>India</div>
                </div> 
            </div>
            {/* middle */}
            <div className='flex grow relative items-center'>
                <Search/>
            </div>
            {/* right */}
            <div className='flex items-center m-4'>
            <div className='pr-4 pl-4'>
                <div className='text-xs xl:text-sm'>Hello,Sign In</div>
                <div className='text-sm xl:text-base font-bold'>Accounts & Lists</div>
                </div> 
                <div className='pr-4 pl-4'>
                <div className='text-xs xl:text-sm'>Returns</div>
                <div className='text-sm xl:text-base font-bold'>& Orders</div>
                </div> 
                <div className='flex pr-3 pt-3 items-center'>
                    <ShoppingCart/>
                    <div className=' text-xs xl:text-sm font-bold'>Cart</div>
                </div>
            </div>
        </div>
        <div className='flex bg-amazonclone-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6'>
            <div>Today's Deals</div>
            <div>Customer's Services</div>
            <div>Registry</div>
            <div>Gift Cards</div>
            <div>sell</div>
        </div>
    </header>
  )
}

export default Navbar
