import axios from "axios";

const config = {
  withCredentials: false,
  responseType: "json",
};

const $http = axios.create(config);

export default $http;
