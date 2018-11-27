import http from 'axios'

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
  formdata.append('image', $file);
  return request({
    url: 'server url',
    method: 'post',
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
