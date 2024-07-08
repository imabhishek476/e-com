import React from 'react'

function index() {
  return (
    <div className='container py-4  mr-4 flex justify-around'>
        <div className='flex items-center'>
            <div className='w-[6vw]'>
                <img className='object-cover' src="https://pitamber-ecommerce.netlify.app/static/media/Shipping%20Van.225e3ee72c4201467457.png" alt="" />
            </div>
            <div className='text-sm font-semibold'>
                <div>Free Shipping</div>
                <div>For all order over $ 599</div>
            </div>
        </div>
        <div className='flex items-center'>
            <div className='w-[6vw]'>
                <img className='object-cover' src="https://pitamber-ecommerce.netlify.app/static/media/return.f1328cf8050029a5ed52.png" alt="" />
            </div>
            <div className='text-sm font-semibold'>
                <div>1 & 1 Returns</div>
                <div>Cancellation after 1 day</div>
            </div>
        </div>
        <div className='flex items-center'>
            <div className='w-[3vw]'>
                <img className='object-cover' src="https://pitamber-ecommerce.netlify.app/static/media/secure.8f56a5cb3ebd98cb9374.png" alt="" />
            </div>
            <div className='text-sm font-semibold'>
                <div>100% Secure Payment</div>
                <div>Guarantee secure payments</div>
            </div>
        </div>
        <div className='flex items-center'>
            <div className='w-[6vw]'>
                <img className='object-cover' src="https://pitamber-ecommerce.netlify.app/static/media/offer.0dfa5a1597b0b5b6c859.png" alt="" />
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