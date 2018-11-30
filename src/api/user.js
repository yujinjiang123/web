import http from 'axios';

const USER_URL="";

export const login=(username,password)=>{
  let config={
    data:{
      username:username,
      password:password
    }
  };
  //TODO
  return axios.post(url,config);
};

export const rePassword=(usename,password)=>{
  let config={
    data:{
      username:username,
      password:password
    }
  };
  //TODO
  return axios.post(url,config);
}


