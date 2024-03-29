import React from 'react'
import img12 from '../../assets/QrCode.jpg'

const QrCode = () => {
  return (
    <div className="w-screen h-screen flex flex-row items-center justify-evenly mdsmax:block mdsmax:h-fit">
      <div className="w-fit h-96 -mt-40 mdsmax:mt-5 mdsmax:m-auto">
        <h1 className="text-red-600 w-full text-center text-2xl font-bold mb-2">Payment By QR Code</h1>
        <img src={img12} alt="RSS ASSOCIATES QR Code" className='w-full h-full'/>
      </div>
      <div className="w-fit h-96 -mt-40 mdsmax:h-fit mdsmax:mt-20 mdsmax:m-auto mdsmax:mb-10">
        <h1 className="text-red-600 w-full text-center text-2xl font-bold mb-2">Payment By Account</h1>
        <div className="bg-white h-full p-5 font-bold flex justify-between mdmax:p-2">
          <div className="leading-relaxed text-xl mdmax:text-base">
            <h1>Bank Name</h1>
            <h1>Account Name</h1>
            <h1>Account Number</h1>
            <h1>IFSC Code</h1>
          </div>
          <div className="leading-relaxed text-xl mdmax:text-base">
            <h1>&nbsp;:&nbsp;</h1>
            <h1>&nbsp;:&nbsp;</h1>
            <h1>&nbsp;:&nbsp;</h1>
            <h1>&nbsp;:&nbsp;</h1>
          </div>
          <div className="leading-relaxed text-xl mdmax:text-base">
            <h1>Kotak Mahindra Bank</h1>
            <h1>RSS ASSOCIATES</h1>
            <h1>683011004535</h1>
            <h1>KKBK0000217</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QrCode