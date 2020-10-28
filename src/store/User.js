export const UserModule = {
	nameSpaced: true,

	state: {
		user: null,
	},

	// mutations are functions that effect the STATE
	mutations: {
		SET_USER(state, user) {
			state.user = user;
		},
	},

	// Actions are functions that you call throughout your application that call mutations
	actions: {
		setUser({ commit }, user) {
			commit('SET_USER', user);
		},
	},
};
