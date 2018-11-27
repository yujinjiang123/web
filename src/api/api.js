import http from 'axios'

const UPLOAD_IMAGE="http://118.24.83.137:5679";

//发起get请求
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

//发起post请求
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

export const test=(url)=>{
  return get(url);
};

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


  return post(`${UPLOAD_IMAGE}//upload/image/sample`,{
    data: formdata,
    headers: { 'Content-Type': 'multipart/form-data' },
  })
};

export const getBlogs=(page,pageSize)=>{
  let params={
    page:page,
    pageSize:pageSize,
  };
  let config={
    url:"",   //TODO
    method:'get',
    data:params,
  };
  return request(config);
};
