import { useState,useEffect } from 'react';

function App() {
  const [score, setScore] = useState(0)

  useEffect(()=> console.log(score)  )

  return (
    <main className='flex flex-col w-[450px] justify-center  bg-[#bba79c]  items-stretch rounded-xl p-6'>
      <img className='p-3 bg-[#00886c] rounded-full self-start' src="public/icon-star.svg" alt="" />
      <h1 className="my-4 text-3xl font-bold text-left text-[#4d4848]">
        How did we do?
      </h1>
      <p className='text-[#1d1a1a73] pb-3 font-semibold'>
        Please let us know how we did with your support request.
        All feedback is appreciated to help us improve our offering!
      </p>
      <fieldset className='flex gap-3 justify-around py-4'>
        <legend className='sr-only'>Rate us!</legend>
        {[...Array(5)].map((_, i) =>
          <label htmlFor="String(i)">
            <input id={String(i)} type="radio" name='score' value={i+1} className='active sr-only rounded-full bg-black appearance-none' onClick={()=>setScore(i)}/>
            <span className='block w-5 h-5 p-4 rounded-full bg-black text-white cursor-pointer' onClick={()=>setScore(i)}>{i+1}</span>
          </label>
        )}
      </fieldset>
      <button id="submit" className='rounded bg-[#ff7900] p-3 grow'><label className='uppercase font-semibold text-lg' htmlFor="#submit">submit</label></button>
    </main>
  )
}

export default App
