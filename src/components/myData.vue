<template>
  <div>
    <div class="title">
      <h3>个人资料</h3>
    </div>
    <div style="display:flex">
      <div class="avatar">
        <img :src="user.avatar" style="cursor: pointer;" @click="handleView" class="round_icon">
        <Upload :show-upload-list="false" :on-success="handleSuccess" :format="['jpg','jpeg','png']" :max-size="2048"
          :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize" action="">
          <a href="#" style="margin-left:20px">上传头像</a>
        </Upload>
      </div>
      <div class="content">
        <div style="color:#999">ID:<span style="margin-left:10px">{{user.id}}</span><a style="float:right">个人主页></a></div>
        <div style="margin:10px 0px 10px 0px;border-bottom:1px solid #e0e0e0;"><span style="margin-right:16px">
            关注: <router-link to="/personalCenter/myFocus">{{user.focusNum}}</router-link>
          </span>
          <span>粉丝: <router-link to="/personalCenter/myFans">{{user.fans}}</router-link></span>
        </div>
        <div style="line-height: 36px">昵称: <span style="margin-left:10px">{{user.nickname}}</span>
          <a style="float:right" @click="modifyVisible=true">修改资料</a>
        </div>
        <ul style="line-height: 36px;">
          <li>实名: <span>{{user.username}}</span></li>
          <li>性别: <span>{{user.gender}}</span></li>
          <li>生日: <span>{{user.birthday}}</span></li>
          <!-- <li>地区: <span>{{user.province==='省'?'':userform.province}} {{user.city}}</span></li> -->
          <li>职业: <span>{{user.job}}</span></li>
          <li>简介: <span>{{user.des}}</span></li>
        </ul>
      </div>
    </div>

    <Modal v-model="modifyVisible" :styles="{top:'50px'}" title="修改资料" @on-ok="handleSubmitUserform" on-cancel="handleCancleUserform">
      <Form :model="userform" label-position="left" :label-width="50">
        <FormItem label="昵称">
          <Input v-model="userform.nickname"></Input>
        </FormItem>
        <FormItem label="实名">
          <Input v-model="userform.username" placeholder="不会泄露的"></Input>
        </FormItem>
        <FormItem label="职位">
          <Input v-model="userform.job"></Input>
        </FormItem>
        <FormItem label="性别">
          <Select v-model="userform.gender" placeholder="请选择">
            <Option value="男">男</Option>
            <Option value="女">女</Option>
          </Select>
        </FormItem>
        <FormItem label="生日">
          <DatePicker v-model="userform.birthday" type="date" placeholder="选择日期" style="width: 200px"></DatePicker>
        </FormItem>
        <!-- <FormItem label="地区"> -->
        <!-- <v-distpicker :province="userform.province" :city="userform.city" hide-area @province="onChangeProvince"></v-distpicker> -->
        <!-- </FormItem> -->
        <FormItem label="简介">
          <Input v-model="userform.des" type="textarea" :rows="4" placeholder="说点什么吧..." />
        </FormItem>
      </Form>
    </Modal>

    <Modal title="View Image" v-model="visible">
      <img :src="user.avatar" v-if="visible" style="width: 100%">
    </Modal>
  </div>
  </div>
</template>

<script>
  // import VDistpicker from 'v-distccpicker';
  import {
    personalData
  } from '../api/user';
  export default {
    components: {
      // VDistpicker,
    },
    data() {
      return {
        visible: false,
        modifyVisible: false,
        user: {
          id: 'lqy1158783206',
          nickname: '破天狂魔',
          username: '玉锦江',
          gender: '女',
          birthday: '1999-9-9',
          province: "河南",
          city: "洛阳",
          job: "高级程序员",
          des: '辣椒',
          fans: 1,
          focusNum: 2,
        },
        userform: {

        },
        defaultUserform: {
          id: "",
          nickname: "",
          username: "",
          gender: "",
          birthday: "",
          province: "",
          city: "",
          job: "",
          des: "",
          fans: '',
          focusNum: '',
        },
      }
    },
    methods: {
      onChangeProvince(data) {
        this.userform.province = data.value
      },
      onChangeCity(data) {
        this.userform.city = data.value
      },
      handleSubmitUserform() {
        this.user = JSON.parse(JSON.stringify(this.userform));
        this.userform = JSON.parse(JSON.stringify(this.defaultUserform));
      },
      handleView() {
        // this.imgName = name;
        // this.visible = true;
        console.log('handleView');
        
      },
      handleSuccess(res, file) {
        this.user.avatar = file.url;
        this.userform.avatar=file.url;
      },
      handleFormatError(file) {
        this.$Notice.warning({
          title: '文件格式不正确',
          desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
        });
      },
      handleMaxSize(file) {
        this.$Notice.warning({
          title: '文件大小超出限制',
          desc: 'File  ' + file.name + ' is too large, no more than 2M.'
        });
      },
    },
    mounted: function () {
      personalData().then(
        (res) => {
          this.user = res.data.user;
        }, (res) => {
          console.log(res);
        }
      ).catch((err) => {
        console.log(err);
      })
    }
  }

</script>
<style scoped>
  div.content {
    width: 950px;
    padding: 20px 20px 100px 20px;
    font-size: 15px;
  }

  div.avatar {
    padding-top: 20px;
    width: 100px
  }

  .round_icon {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    overflow: hidden;
    border: solid 1px;
  }

  li span {
    margin-left: 10px;
  }

</style>
