import http from 'axios'

const request= url=>{
  return new Promise(function (resolve,reject) {
    http.request({
      url:url,
    }).then(res=>{
      resolve(res.data)
    }).catch(err=>{
        reject(err)
      })
  })
}
export const test=(url)=>{
  return request(url);
}

