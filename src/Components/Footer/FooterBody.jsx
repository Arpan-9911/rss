import React from 'react'

const FooterBody = () => {
  return (
    <>
      <div className="w-screen h-fit mt-4 px-4 text-white bg-blue-600 text-center mdmax:m-0">
        <div className="w-1/2 m-auto border-b-2 mdmax:w-60">
          <h1 className="text-base font-bold mdmax:text-sm">Follow Us</h1>
          <div className='flex justify-between w-80 m-auto mdmax:w-52'>
            <h2 className="text-sm"><a href="/">Facebook</a></h2>
            <h2 className="text-sm"><a href="/">Instagram</a></h2>
          </div>
        </div>
        <div className="text-sm">
          <h1>All rights reserved © Arpan-2024</h1>
        </div>
      </div>
    </>
  )
}

export default FooterBody