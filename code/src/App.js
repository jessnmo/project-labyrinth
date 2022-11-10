import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import StartScreen from 'components /StartScreen';
import gameSlice from 'features/game';

export const App = () => {
	const reducer = combineReducers({
		game: gameSlice.reducer,
	});
	const store = configureStore({ reducer });
	return (
		<Provider store={store}>
			<StartScreen />
		</Provider>
	);
};
