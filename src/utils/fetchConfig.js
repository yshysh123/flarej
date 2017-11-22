import querystring from 'querystring';

/**
 * 捕获错误
 */
export function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function customHeaders(options) {
  options = options || {};
  options.headers = options.headers || {};
  options.headers['X-Requested-With'] = 'XMLHttpRequest';
  return options;
}

/**
 * 获取数据
 */
export function fetchData(url, callback, params, cfgs) {
  const configs = Object.assign({
    method: 'get',
    credentials: 'include',
    mode: 'cors',
    cache: 'reload'
  }, cfgs);

  configs.method = configs.method.toLowerCase();
  if (params) {
    if (configs.method === 'get' || configs.method === 'delete') {
      url += '?' + querystring.encode(params);
    } else if (configs.method === 'post' || configs.method === 'put') {
      configs.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
      configs.body = JSON.stringify(params);
    }
  }

  return fetch(url, customHeaders(configs))
    .then(handleErrors)
    .then((response) => {
      return response.json();
    })
    .then(callback);
}