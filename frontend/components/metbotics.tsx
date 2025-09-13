import React from 'react'

const metbotics = () => {
  return (
    <div className=" mt-20 flex items-center justify-center ">
      {/* Outer card */}
      <div className=" border-2 border-amber-50 p-8 rounded-2xl shadow-lg flex flex-col items-center w-[90%] max-w-md">
        {/* Circle image container */}
        
          {/* Add your <img> here later */}
        <img src="/robot.png" alt="error"
        className="w-40 h-50 ounded-full flex items-center justify-center overflow-hidden "
        />

        {/* Content below circle */}
        <h1 className="text-white text-2xl font-semibold mt-6">
          MedBotics
        </h1>
      </div>
    </div>
  )
}

export default metbotics
