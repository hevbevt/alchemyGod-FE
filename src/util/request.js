import axios from 'axios';
import queryStringify from './queryStringify';

const httpSvc = (options) => {
  const {
    method = 'get',
    data,
    placeholder,
    useRaw = false,
  } = options;

  const url = getUrl(options.url, placeholder);

  const cloneData = data;
  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(url, {
        params: cloneData,
      });
    case 'delete':
      return axios.delete(url, {
        params: cloneData,
      });
    case 'post':
      return axios.post(url, useRaw ? cloneData : queryStringify(cloneData), useRaw ? {
        headers: { 'Content-type': 'application/json' },
      } : {
        headers: { 'Content-type': 'application/x-www-form-urlencoded' },
      });
    case 'put':
      return axios.put(url, useRaw ? cloneData : queryStringify(cloneData), useRaw ? {
        headers: { 'Content-type': 'application/json' },
      } : {
        headers: { 'Content-type': 'application/x-www-form-urlencoded' },
      });
    case 'patch':
      return axios.patch(url, cloneData);
    case 'file_upload':
      return axios.post(url, cloneData, {
        headers: { 'Content-type': 'multipart/form-data' },
      });
    default:
      return axios(options);
  }
};

function getUrl(url, placeholder) {
  let result = url;
  if (placeholder) {
    for (const key in placeholder) {
      if (Object.prototype.hasOwnProperty.call(placeholder, key)) {
        result = result.replace(`:${key}`, placeholder[key]);
      }
    }
  }
  return result;
}

function CommonException({ response }) {
  this.response = response;
}

CommonException.prototype = Object.create(Error.prototype);
CommonException.prototype.constructor = CommonException;

export default function request(options) {
  return httpSvc(options).then((response) => {
    const { statusText, status, data } = response;
    // handle error exception
    if (!data.ret && data.errorCode === 401) {
      throw new CommonException({
        response,
      });
    }
    return Promise.resolve({
      success: true,
      message: statusText,
      statusCode: status,
      ...data,
    });
  }).catch((error) => {
    const { response } = error;
    let msg;
    let statusCode;
    let errorCode;
    if (response && response instanceof Object) {
      const { data, statusText, status } = response;
      statusCode = status;
      msg = data.message || data.errorMsg || statusText;
      errorCode = data.errorCode;
    } else {
      statusCode = 600;
      msg = error.message || data.errorMsg || '网络错误';
    }
    return Promise.reject({ success: false, statusCode, message: msg, errorCode });
  });
}
