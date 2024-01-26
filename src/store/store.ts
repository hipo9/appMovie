import { configureStore } from '@reduxjs/toolkit';
import { movieSlice } from './movieSlice';
import { movieDetailSlice } from './movieDetailSlice';
// ...
export const store = configureStore({
	reducer: {
		movies: movieSlice.reducer,
		moviesDetail: movieDetailSlice.reducer,
	},
});
export type RootState = ReturnType<typeof store.getState>;
