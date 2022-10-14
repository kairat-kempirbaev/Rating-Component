import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setRating } from './RatingSlice';


function Rating() {
  const [value, setValue] = useState(-1);

  const dispatch = useDispatch();
  const setRatingHandler = (event: { preventDefault: () => void; }) => {
    dispatch(setRating(value));
    setValue(-1);
  };

  return (
    <main className='flex flex-col w-[375px] justify-center  bg-[#bba79c]  items-stretch rounded-xl p-6'>
      <img className='p-3 bg-[#00886c] rounded-full self-start' src="icon-star.svg" alt="" />
      <h1 className="my-4 text-3xl font-bold text-left text-[#4d4848]">
        How did we do?
      </h1>
      <p className='text-[#1d1a1a73] font-semibold'>
        Please let us know how we did with your support request.
        All feedback is appreciated to help us improve our offering!
      </p>
      <fieldset className='flex gap-3 justify-around py-4'>
        <legend className='sr-only'>Rate us!</legend>
        {[...Array(5)].map((_, i: number) =>
          <label htmlFor={String(i)} className={'h-[50px] w-[50px] p-[13px] cursor-pointer rounded-full text-center text-base font-bold '
            + (value == i ? "bg-[#00886c] text-[#242121]" : "bg-[#00c19f] text-[#4d4848]")}
            onClick={() => setValue(i)}>
            <input id={String(i)} type="radio" name='score' value={i} className='sr-only ' onClick={() => setValue(i)} />
            {i + 1}
          </label>
        )}
      </fieldset>
      <Link to="/checkout" className='rounded-full bg-[#ff7900] p-3 grow w-full text-center uppercase text-lg font-bold text-[#413f3f] tracking-widest' onClick={setRatingHandler}>
        submit
      </Link>
    </main>
  )
}

export default Rating
