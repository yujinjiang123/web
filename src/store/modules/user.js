import {login} from "@/api/user"

const user={
  state:{
    id:"",
    username:'',
    nickname:'',
    email:'',
    status:'',
    code:'',
    token:'',
    avatar:'',
    role:'',
  },
  mutations: {
    SET_USERNAME: (state, username) => {
      state.username = username;
    },
    SET_NICKNEMAE: (state, nickname) => {
      state.nickname = nickname;
    },
    SET_EMAIL: (state, email) => {
      state.email = email;
    },
    SET_STATUS: (state, status) => {
      state.status = status;
    },
    SET_CODE: (state, code) => {
      state.code = code;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLE: (state, role) => {
      state.role = role;
    }
  },
  actions:{
    //用户名登录
    Login({commit},userInfo){
      const username=userInfo.username.trim();
      return new Promise((resolve,reject)=>{
        login(username,userinfo.password).then(res=>{
            const data =res.data;
            commit.set('SET_TOKEN',data.token);
            setToken(res.data.token);
            resolve();
          }).catch(err=>{
            reject(err);
          })
      })
    }
  }
};


export default user
