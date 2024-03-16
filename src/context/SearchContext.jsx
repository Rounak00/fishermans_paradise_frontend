import { createContext, useReducer } from "react";
import { addDays } from "date-fns";

const INITIAL_STATE = {
	city: "london",
	dates: [{
		startDate: new Date(),
		endDate: addDays(new Date(), 1),
		key: 'selection'
	}],
	options: {
		adult: undefined,
		children: undefined,
		room: 1,
	},
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
	switch(action.type) {
		case "NEW_SEARCH":
			return action.payload;
		case "RESET_SEARCH":
			return INITIAL_STATE;
		default:
			return state;
	}
};

export const SearchContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

	return (
		<SearchContext.Provider
			value={{
				city: state.city,
				dates: state.dates,
				options: state.options,
				dispatch,
			}}
		>
			{children}
		</SearchContext.Provider>
	);
};