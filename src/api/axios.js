//引入axios
import http from 'axios';

/**
 * 发起get请求
 * @param url
 * @param config
 * @returns {Promise<any>}
 */
export const get = (url, config) => {
  return new Promise((resolve, reject) => {
    http.get(url, config)
      .then(res => {
        if (res.data.code === 200) {
          resolve(res.data);
        } else {
          reject(res);
        }
      })
      .catch(err => {
        reject(err);
      })
  })
};
/**
 * 发起post请求
 * @param url
 * @param config
 * @returns {Promise<any>}
 */
export const post = (url, config) => {
  console.log(url);
  return new Promise((resolve, reject) => {
    http.post(url, config)
      .then(res => {
        if (res.data.code === 200) {
          resolve(res.data);
        } else {
          reject(res);
        }
      })
      .catch(err => {
        reject(err);
      })
  })
};



export default {
  get:get,
  post:post,
}
