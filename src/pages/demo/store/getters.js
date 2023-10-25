export const TYPES = {
  CALC_EXAMPLE: "calcExample",
};
export const GETTERS = {
  [TYPES.CALC_EXAMPLE](state) {
    return !!state.example;
  },
};
