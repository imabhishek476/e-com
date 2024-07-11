import React from 'react'
import truck from '../../../assets/images/home/truck.png'
import oneVone from '../../../assets/images/home/1_1_return.png'
import secure from '../../../assets/images/home/secure.png'
import offers from '../../../assets/images/home/offers.png'

function index() {
  return (
    <div className='container py-4  mr-4 flex justify-around'>
        <div className='flex items-center'>
            <div className='w-[6vw]'>
                <img className='object-cover' src={truck} alt="shipping" />
            </div>
            <div className='text-sm font-semibold'>
                <div>Free Shipping</div>
                <div>For all order over $ 599</div>
            </div>
        </div>
        <div className='flex items-center'>
            <div className='w-[6vw]'>
                <img className='object-cover' src={oneVone} alt="Returns" />
            </div>
            <div className='text-sm font-semibold'>
                <div>1 & 1 Returns</div>
                <div>Cancellation after 1 day</div>
            </div>
        </div>
        <div className='flex items-center'>
            <div className='w-[4.5vw]'>
                <img className='object-cover' src={secure} alt="Secure payment" />
            </div>
            <div className='text-sm font-semibold'>
                <div>100% Secure Payment</div>
                <div>Guarantee secure payments</div>
            </div>
        </div>
        <div className='flex items-center'>
            <div className='w-[4.5vw]'>
                <img className='object-cover' src={offers} alt="Offers" />
            </div>
            <div className='text-sm font-semibold'>
                <div>Daily Offers</div>
                <div>Discount up to 50% OFF</div>
            </div>
        </div>
    </div>
  )
}

export default index