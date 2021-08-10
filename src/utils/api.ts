import axios, { CancelToken } from 'axios';

export interface Response {
  succeed: boolean;
  data?: any;
  status: number;
}

export type Method = 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';

export const BASE_URL = 'http://localhost:8080';
export const API_VERSION = 'v1';

export const requestAPI = (
  path: string,
  method: Method,
  cancelToken: CancelToken,
  data?: FormData
) => {
  const url = `${BASE_URL}/${API_VERSION}/${path}`;

  // axios will return a promise that can resolve to response or error
  // result will always have Response type after the axios's promise chain

  const result = async () => {
    try {
      const axiosResult = await axios(url, {
        method: method,
        data,
        cancelToken
      })
        .then(res => {
          return {
            succeed: true,
            data: res.data,
            status: res.status
          };
        })
        .catch(err => {
          if (axios.isCancel(err)) {
            return {
              succeed: false,
              data: err.message,
              status: -1
            };
          } else {
            return {
              succeed: false,
              data: err.message,
              status: err.status
            };
          }
        });
      return axiosResult;
    } catch (err) {
      throw err;
    }
  };

  return result;
};
