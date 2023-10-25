import $http from "./http.js";

export const TYPES = {
  GET_EXAMPLE: "getExample",
};

export const ACTIONS = {
  [TYPES.GET_EXAMPLE](state, url) {
    return $http({
      method: "GET",
      url: url,
    });
  },
};
