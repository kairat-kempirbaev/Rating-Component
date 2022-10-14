import React from 'react';
import { useSelector } from 'react-redux';

type Score = {
  rating: { value: number }
}

function Thanks() {
  const rating = useSelector((state: Score) => state.rating.value);
  return (
    <main className='flex flex-col w-[375px]   bg-[#a7a2a0] gap-3 items-center rounded-xl px-3 py-6 text-center'>
      <div className='flex flex-col items-center gap-4'>
        <img src="illustration-thank-you.svg" alt="" />
        <p className='text-[#ff7900] font-semibold bg-[#00886c] text-center  rounded-xl py-2 px-6'>You selected { rating + 1 } out of 5</p>
      </div>
      <h1 className='text-2xl font-extrabold text-[#4d4848]'>Thank you!</h1>
      <p className='text-[#1d1a1a73]'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </main>
  )
}

export default Thanks
