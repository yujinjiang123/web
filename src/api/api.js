import http from 'axios'

const UPLOAD_IMAGE="http://118.24.83.137:5679";
const UPLOAD_FILE = "kingsword.xyz:5679/upload/doc/sample";

/**
 * 发起get请求
 * @param url
 * @param config
 * @returns {Promise<any>}
 */
const get=(url,config)=>{
  return new Promise((resolve,reject) => {
    http.get(url,config)
      .then(res=>{
        resolve(res.data);
      })
      .catch(err=>{
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
const post=(url,config)=>{
    return new Promise((resolve,reject) => {
      http.post(url,config)
        .then(res=>{
          resolve(res.data);
        })
        .catch(err=>{
          reject(err);
        })
    })
};

/**
 * 上传图片到服务器，返回该图片的url路径
 * @param pos
 * @param $file
 * @returns {Promise<any>}
 */
export const uploadImage=(pos,$file)=>{
  let formdata = new FormData();
  formdata.append('file', $file);
  return new Promise((resolve,reject) => {
    http({
      url: `${UPLOAD_IMAGE}//upload/image/sample`,
      method: 'post',
      data:formdata,
      headers: { 'Content-Type': 'multipart/form-data'},
    })
      .then(res=>{
        resolve(res.data);
      })
      .catch(err=>{
        reject(err);
      })
  })
};

/**
 * 获取博客列表
 * @param page
 * @param pageSize
 * @returns {*}
 */
export const getBlogs=(page,pageSize)=>{
  let config={
    data:{
      page: page,
      pageSize: pageSize,
    }
  };
  return get("url",config);
};

