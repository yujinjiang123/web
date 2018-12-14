
import http from "./axios";

const USER_URL="http://whq6.cn:8080";

export const login=(username,password)=>{
  return http.post(`${USER_URL}/user/signIn`,{
    id:username,
    password:password
  });
};

export const sendEmail=(email)=>{
  return http.post(`${USER_URL}/user/code`,{
    email:email
  });
};


export const register=(data)=>{
  return http.post(`${USER_URL}/user/signUp`,{

  });
};

export const personalData=()=>{
  return http.get('http://kingsword.xyz:8080/user/getUserInfo',{});
};

export const changePersonalData=(user)=>{
  return http.get('http://kingsword.xyz:8080/user/changeUserInfo',{
    user:user
  })
}
