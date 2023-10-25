import http from "@/utility/http";

// Add a request interceptors
http.interceptors.request.use((error) => {
  return Promise.reject(error);
});

// Add a response interceptor
http.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response;
  },
  (error) => {
    // Do something with response error
    console.error(`http response error`);
    console.log(error);

    return Promise.reject(error);
  }
);

export default http;
