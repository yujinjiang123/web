import http from 'axios'

const UPLOAD_IMAGE = "http://118.24.83.137:5679";
<<<<<<< HEAD
const BLOG_URL = "http://whq6.cn:8081";
=======
const BLOG_URL = "http://whq6.cn:8080";
>>>>>>> 7de0eb8d4e12e97aaaf69634bb91bbc6a220be08
const UPLOAD_FILE = "kingsword.xyz:5679/upload/doc/sample";
const ALL_ROOM = "http://118.24.83.137:8081/classroom/searchAll";
const SEARCH_ROOM="";
/**
 * 发起get请求
 * @param url
 * @param config
 * @returns {Promise<any>}
 */
const get = (url, config) => {
  return new Promise((resolve, reject) => {
    http.get(url, config)
      .then(res => {
<<<<<<< HEAD
        if (res.status === 200) {
=======
        if (res.data.code === 200) {
>>>>>>> 7de0eb8d4e12e97aaaf69634bb91bbc6a220be08
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
const post = (url, config) => {
<<<<<<< HEAD
  return new Promise((resolve, reject) => {
    http.post(url, config)
      .then(res => {
        if (res.status === 200) {
          resolve(res.data);
=======
  console.log(url);
  return new Promise((resolve, reject) => {
    http.post(url, config)
      .then(res => {
        if (res.data.code === 200) {
          resolve(res);
>>>>>>> 7de0eb8d4e12e97aaaf69634bb91bbc6a220be08
        } else {
          reject(res);
        }
      })
      .catch(err => {
        reject(err);
      })
  })
};

<<<<<<< HEAD

// http.interceptors.request.use(config => {
//   console.log(JSON.parse(JSON.stringify(config)));
// });


=======
/**
 * 登录验证
 * @param username
 * @param password
 * @returns {Promise<any>}
 */
export const login = (params) => {
  return post(`${BLOG_URL}/user/signIn`, params);
};
>>>>>>> 7de0eb8d4e12e97aaaf69634bb91bbc6a220be08


/**
 * 上传图片到服务器，返回该图片的url路径
 * @param $file
 * @returns {Promise<any>}
 */
export const uploadImage = ($file) => {
  let formdata = new FormData();
  formdata.append('file', $file);
  return new Promise((resolve, reject) => {
    http({
<<<<<<< HEAD
      url: `${UPLOAD_IMAGE}//upload/image/sample`,
      method: 'post',
      data: formdata,
      headers: {'Content-Type': 'multipart/form-data'},
    })
=======
        url: `${UPLOAD_IMAGE}//upload/image/sample`,
        method: 'post',
        data: formdata,
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      })
>>>>>>> 7de0eb8d4e12e97aaaf69634bb91bbc6a220be08
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      })
  })
};

/**
 * 发布博客
 * @param params
 * @returns {Promise<any>}
 */
export const publicBlog = (params) => {
<<<<<<< HEAD
  return post(`${BLOG_URL}/article/publish`,params);
=======
  return post(`${BLOG_URL}/article/publish`, {
    data: params,
  });
>>>>>>> 7de0eb8d4e12e97aaaf69634bb91bbc6a220be08
};


/**
 * 获取博客列表
 * @param page
 * @param pageSize
 * @returns {*}
 */
<<<<<<< HEAD
export const getOwnBlogs = (id,pageNum, pageSize) => {
  return get('', {
    id:id,
    pageNum:pageNum,
    pageSize:pageSize
  });
};

/**
 * 获取自己写的博客
 * @param pageNum
 * @param pageSize
 * @returns {Promise<any>}
 */
export const getAllBlogs = (pageNum, pageSize) => {
  return get('', {
    pageNum:pageNum,
    pageSize:pageSize
  });
};

/**
 * 通过id获取博客信息
 * @param id
 * @returns {Promise<any>}
 */
export const goBlog=(id)=>{
  return get( `${BLOG_URL}/article/get?id=${id}`,{
  })
};


export const getRoomList = (weekday, lessonList) => {
  return get(ROOM, {
    data: {
      weekday: weekday,
      lessonList: lessonList,
    }
  })
};

=======
export const getBlogs = (pageNum, pageSize) => {
  return get(url, {
    data: {
      pageNum: pageNum,
      pageSize: pageSize,
    }
  });
};

export const getRoomList = (serachForm) => {
  return get(SEARCH_ROOM, {
    data: {
      weekday: serachForm.weekday,
      lessonList: serachForm.lessonList,
    }
  })
};

export const initRoomList=()=>{
  return get(ALL_ROOM,{})
};

// export const uploadFile = ($file) => {
//   return post(UPLOAD_FILE,{
//     data:{

//     }
//   })
// }
>>>>>>> 7de0eb8d4e12e97aaaf69634bb91bbc6a220be08
