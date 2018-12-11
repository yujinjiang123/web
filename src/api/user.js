
import http from "./axios";

const USER_URL="http://whq6.cn:8080";

export const login=(username,password)=>{
  let data={
    username:username,
    password:password
  };
  //TODO
  return http.post(`${USER_URL}/user/signIn`,data);
};

export const sendEmail=(email)=>{
  let data={
    email:email
  };
  //TODO
  return http.get(url,data);
};


export const register=(data)=>{
  //TODO
  return http.post(url,data);
};

export const rePassword=(usename,password)=>{
    let data={
      username:username,
      password:password
    };
    //TODO
    return http.post(url,config);
};


