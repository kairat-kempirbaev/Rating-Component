import { configureStore } from '@reduxjs/toolkit';
import ratingReducer from './RatingSlice';

export default configureStore({
  reducer: {
    rating: ratingReducer,
  },
});