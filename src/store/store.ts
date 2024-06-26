import { configureStore } from '@reduxjs/toolkit';
import { movieSlice } from './movieSlice';
import { movieDetailSlice } from './movieDetailSlice';
import { movieHeaderSlice } from './movieHeaderSlice';
// ...
export const store = configureStore({
	reducer: {
		movies: movieSlice.reducer,
		moviesDetail: movieDetailSlice.reducer,
		moviesHeader: movieHeaderSlice.reducer,
	},
});
export type RootState = ReturnType<typeof store.getState>;
