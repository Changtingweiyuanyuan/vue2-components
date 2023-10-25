export const TYPES = {
  MUT_EXAMPLE: "mutExample",
};

export const MUTATIONS = {
  [TYPES.MUT_EXAMPLE](state, payload) {
    state.example = {
      ...payload,
    };
  },
};
