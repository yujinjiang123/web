import http from 'axios'

const UPLOAD_IMAGE="http://118.24.83.137:5679";
const BLOG_URL="http://whq6.cn:8080";

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
        if(res.data.code===200){
          resolve(res.data);
        }else{
          reject(res);
        }
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
  console.log(url);
    return new Promise((resolve,reject) => {
      http.post(url,config)
        .then(res=>{
          if(res.data.code===200){
            resolve(res.data);
          }else{
            reject(res);
          }
        })
        .catch(err=>{
          reject(err);
        })
    })
};

/**
 * 登录验证
 * @param username
 * @param password
 * @returns {Promise<any>}
 */
export const login=(params)=>{
  return post(`${BLOG_URL}/user/signIn`,params);
};


/**
 * 上传图片到服务器，返回该图片的url路径
 * @param $file
 * @returns {Promise<any>}
 */
export const uploadImage=($file)=>{
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
 * 发布博客
 * @param params
 * @returns {Promise<any>}
 */
export const publicBlog=(params)=>{
  return post(`${BLOG_URL}/article/publish`,{
    data:params,
  });
};


/**
 * 获取博客列表
 * @param page
 * @param pageSize
 * @returns {*}
 */
export const getBlogs=(pageNum,pageSize)=>{
  return get(url,{
    data:{
      pageNum:pageNum,
      pageSize:pageSize,
    }
  });
};

