import axios, { AxiosRequestConfig } from 'axios';
import CookieManager from '@react-native-cookies/cookies';
// import { removeLocalStorage } from './'; // Adjust the path as necessary
import { API_URL } from '../config'; // Adjust the path as necessary
import { ToastAndroid } from 'react-native';

const baseURL = API_URL?.concat('/api');

const CancelToken = axios.CancelToken;
const pendingRequests = new Map();

axios.interceptors.response.use(
  response => response,
  async (error = {}) => {
    const { status, config } = error.response || {};
    const { url } = config || {};
    if (status === 401) {
      if (url.includes('/api/order/get-video')) {
        return Promise.reject(error);
      }
      // removeLocalStorage('user');
      await CookieManager.clearAll(); // Clear cookies
      ToastAndroid.show('Session expired. Please log in again.', ToastAndroid.LONG);
      // You may want to navigate to the login screen or reload the app
    }
    return Promise.reject(error);
  },
);

const codeMessage: { [key: string]: string } = {
  200: 'The request has succeeded',
  201: 'New resource has been created',
  202: 'The request has been received',
  204: 'No Content',
  401: 'Unauthorized Operation',
  403: 'You do not have access rights to the content',
  404: 'Not Found',
  406: 'Not Acceptable',
  410: 'The request content is no longer available',
  422: 'The request was well-formed but was unable to be followed due to semantic errors.',
  500: "The server has encountered a situation it doesn't know how to handle",
  502: 'Bad Gateway',
  503: 'The server is not ready to handle the request',
  504: 'Timeout',
};

type CustomResponse = {
  success?: boolean;
  errorHandled?: boolean;
  reason?: string;
} & Partial<Response>;

const errorHandler = (
  error: { response: CustomResponse },
  custom: { showError?: boolean; statusCodes?: number[] },
): CustomResponse => {
  const { statusCodes = [] } = custom;
  if (axios.isCancel(error)) {
    return {
      success: false,
      errorHandled: true,
      reason: 'cancelled',
      ...error,
    };
  }

  const { response } = error;
  if (!response) {
    ToastAndroid.show('Please check your internet connection', ToastAndroid.LONG);
    return { success: false, errorHandled: true };
  }

  if (response && response.status && codeMessage[response.status]) {
    response.success = false;
    response.errorHandled = true;
    const errorText = codeMessage[response.status] || response.statusText;
    if (!statusCodes.length || !statusCodes.includes(response.status)) {
      ToastAndroid.show(errorText || 'Sorry something went wrong', ToastAndroid.LONG);
    }
  }

  return { ...response, success: false, errorHandled: true, reason: 'network' };
};

/**
 * Fetch data from given url
 * @param {*} url
 * @param {*} options
 *
 * Note Don't add anymore params if needed add an object type called 'extra' or something
 */
type IRequestProps = {
  url?: string;
  options?: AxiosRequestConfig;
  cookies?: any;
  includeAuthHeader?: boolean;
  handleError?: boolean;
  token?: string;
  customError?: {
    showError?: boolean;
    statusCodes?: number[];
  };
};

export const request1 = (props: IRequestProps) => {
  const {
    url = '',
    options = {},
    cookies = null,
    includeAuthHeader = true,
    handleError = true,
    customError,
    token,
  } = props;
  return apiRequest(url, options, cookies, includeAuthHeader, handleError, customError, token);
};

const apiRequest = async (
  url: string,
  options: AxiosRequestConfig = {},
  _ = null,
  includeAuthHeader = true,
  handleError = true,
  customError = {},
  token?: string,
) => {
  const headers: any = {};

  if (includeAuthHeader) {
    const cookieToken = await CookieManager.get('token');
    const authToken = token || cookieToken.value;
    if (authToken) {
      headers['Authorization'] = `Bearer ${authToken}`;
    }
  }

  let opts = options;

  opts = {
    ...opts,
    headers: { ...headers, ...options.headers },
  };

  return axios((options.baseURL || baseURL) + url, opts)
    .then(json => {
      if (json?.data?.length > -1) {
        return { success: true, data: json.data };
      }
      return { success: true, ...json?.data };
    })
    .catch(e => {
      if (handleError) {
        return errorHandler(e, customError);
      } else {
        throw e;
      }
    });
};
const request = (
  url: string,
  options: AxiosRequestConfig = {},
  _ = null,
  includeAuthHeader = true,
  handleError = true,
  token = '',
) => {
  return apiRequest(url, options, _, includeAuthHeader, handleError, {}, token);
};
//
export const cancellableRequest1 = async ({
  requestId = '',
  url = '',
  options = {},
  cookies = null,
  handleError = true,
  customError = { showError: true },
}: {
  requestId: string;
  url?: string;
  options?: AxiosRequestConfig;
  cookies?: any;
  handleError?: boolean;
  customError?: { showError?: boolean; statusCodes?: number[] };
}) => {
  if (pendingRequests.has(requestId)) {
    pendingRequests.get(requestId).cancel();
    pendingRequests.delete(requestId);
  }

  const cancelToken = new CancelToken(cancel => {
    pendingRequests.set(requestId, { url, cancel });
  });
  return await request1({
    url,
    options: {
      cancelToken,
      ...options,
    },
    cookies,
    includeAuthHeader: true,
    handleError,
    customError,
  }).then(response => {
    if (response.success || (!response.success && response.reason !== 'cancelled')) {
      pendingRequests.delete(requestId);
    }
    return response;
  });
};

export const cancellableRequest = async (
  requestId: string,
  url: string,
  options: any = {},
  cookies = null,
  handleError = true,
) => {
  if (pendingRequests.has(requestId)) {
    pendingRequests.get(requestId).cancel();
    pendingRequests.delete(requestId);
  }

  const cancelToken = new CancelToken(cancel => {
    pendingRequests.set(requestId, { url, cancel });
  });
  return await request(
    url,
    {
      cancelToken,
      ...options,
    },
    cookies,
    true,
    handleError,
  ).then(response => {
    if (response.success || (!response.success && response.reason !== 'cancelled')) {
      pendingRequests.delete(requestId);
    }
    return response;
  });
};

export default request;
