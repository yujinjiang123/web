
import http from "./axios";

const USER_URL="http://kingsword.xyz:8080";

export const login=(username,password)=>{
  return http.post(`${USER_URL}/user/login`,{
      username:username,
      password:password
  });
};

export const sendEmail=(email)=>{
  return http.post(`${USER_URL}/user/emailIdentify`,{
    email:email,
  });
};


export const register=(data)=>{
  return http.post(`${USER_URL}/user/register`,{
    username:data.username,
    password:data.password,
    email:data.email,
    code:data.code,
  });
};

export const rePassword=(email,password)=>{
  return http.post(`${USER_URL}/user/rePassword`,{
      email:email,
      password:password,
  })
};

export const codeIdentify=(email,code)=>{
  return http.post(`${USER_URL}/user/codeIdentify`,{
    email:email,
    code:code,
  })
};

export const changePassword=(email,password)=>{
  return http.post(`${USER_URL}/user/changePassword`,{
    email:email,
    password:password
  })
};

export const personalData=(userId)=>{
  return http.post(`${USER_URL}/user/~~~?userId=${userId}`)
}