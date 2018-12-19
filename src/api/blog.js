import http from "./axios";

const BLOG_URL="http://kingsword.xyz:8080";


export const publicBlog = (params) => {
  let data={
    stuId:params.stuId,
      username: params.username,
    title: params.title,
    content: params.content
  };
  return http.post(`${BLOG_URL}/blog/creatBlog`,params);
};

export const getBlog=(id)=>{
  return http.post(`${BLOG_URL}/blog/getBlog`,{
    id:id,
  })
};

export const searchBlogs=(params)=>{
  return http.post(`${BLOG_URL}/blog/search`,{
    classify: params.classify,
    pageNumber: params.pageNumber,
    pageSize: params.pageSize,
    title:params.title,
  })
};
