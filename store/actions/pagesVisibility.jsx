export const SET_FORMATION = "SET_FORMATION";
export const SET_PROJETS = "SET_PROJETS";
export const SET_CV = "SET_CV";
export const SET_ABOUT_ME = "SET_ABOUT_ME";

export const setFormation = (payload) => ({
	type: SET_FORMATION,
	payload,
});
export const setProjets = (payload) => ({
	type: SET_PROJETS,
	payload,
});
export const setCv = (payload) => ({
	type: SET_CV,
	payload,
});
export const setAboutMe = (payload) => ({
	type: SET_ABOUT_ME,
	payload,
});
