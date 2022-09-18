import { SET_FORMATION, SET_PROJETS, SET_CV, SET_ABOUT_ME } from "../actions/pagesVisibility";

export const initialState = {
	formation: false,
	projets: false,
	cv: false,
	aboutMe: false,
};

const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case SET_FORMATION: {
			return {
				...state,
				formation: action.payload,
			};
		}
		case SET_PROJETS: {
			return {
				...state,
				projets: action.payload,
			};
		}
		case SET_CV: {
			return {
				...state,
				cv: action.payload,
			};
		}
		case SET_ABOUT_ME: {
			return {
				...state,
				aboutMe: action.payload,
			};
		}
		default:
			return state;
	}
};

export default reducer;
