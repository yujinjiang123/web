<template>
  <div>
    <Layout class="layout">

      <Head>
        <dropdown slot="user">
          <useravatar slot="dropdown"></useravatar>
        </dropdown>
      </Head>
      <Layout :style="{padding: '24px 100px'}">
        <Content :style="{padding: '24px 0', background: '#fff'}">
          <Layout>
            <Sider hide-trigger :style="{background: '#fff'}">
              <Menu active-name="1-1" theme="light" width="auto" :open-names="['1']">
                <MenuItem name="1-1">个人资料</MenuItem>
                <MenuItem name="1-2">我的收藏</MenuItem>
                <MenuItem name="1-3">我的博客</MenuItem>
              </Menu>
            </Sider>
            <Content :style="{padding: '0 0 0 24px', minHeight: '400px', background: '#fff'}">
              <div class="title">
                <h3>个人资料</h3>
              </div>
              <div style="display:flex">
                <!-- <div class="avatar" >
                  <img src="https://img.zcool.cn/community/01f9ea56e282836ac72531cbe0233b.jpg@2o.jpg" class="round_icon">
                  <Upload :show-upload-list="false" :on-success="handleSuccess" :format="['jpg','jpeg','png']"
                    :max-size="2048" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize"
                    :before-upload="handleBeforeUpload" action="//jsonplaceholder.typicode.com/posts/">
                    <a href="#" style="margin-left:20px">上传头像</a>
                  </Upload>
                </div> -->
                <div class="content">
                  <div style="color:#999">ID:<span style="margin-left:10px">{{user.id}}</span><a style="float:right">个人主页></a></div>
                  <div style="margin:10px 0px 10px 0px;border-bottom:1px solid #e0e0e0;"><span style="margin-right:16px">关注:
                    </span>
                    <span>粉丝: </span>
                  </div>
                  <div>昵称: <span style="margin-left:10px">{{user.na}}</span>
                    <a style="float:right" @click="modifyVisible=true">修改资料</a>
                  </div>
                  <ul style="list-style:none;line-height: 36px;">
                    <li>实名: <span>{{user.name}}</span></li>
                    <li>性别: <span>{{user.gender}}</span></li>
                    <li>生日: <span>{{user.birthday}}</span></li>
                    <li>地区: <span>{{user.province==='省'?'':userform.province}} {{user.city}}</span></li>
                    <li>职业: <span>{{user.job}}</span></li>
                    <li>简介: <span>{{user.des}}</span></li>
                  </ul>
                </div>
              </div>
            </Content>
          </Layout>
        </Content>
      </Layout>
      <Footer class="layout-footer-center">2018-2018 &copy; lqy</Footer>
    </Layout>

    <Modal v-model="modifyVisible" :styles="{top:'50px'}" title="修改资料" @on-ok="handleSubmitUserform"on-cancel="handleCancleUserform">
      <Form :model="userform" label-position="left" :label-width="50">
        <FormItem label="昵称">
          <Input v-model="userform.na"></Input>
        </FormItem>
        <FormItem label="实名" >
          <Input v-model="userform.name" placeholder="不会泄露的"></Input>
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
        <FormItem label="地区">
          <v-distpicker :province="userform.province" :city="userform.city" hide-area @province="onChangeProvince"
            ></v-distpicker>
        </FormItem>
        <FormItem label="简介">
          <Input v-model="userform.des" type="textarea" :rows="4" placeholder="说点什么吧..." />
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
  import Head from "@/components/head";
  import Search from "@/components/search";
  import Dropdown from "@/components/dropdown";
  import UserAvatar from "@/components/userAvatar";
  import VDistpicker from 'v-distpicker';
  export default {
    components: {
      Head: Head,
      search: Search,
      dropdown: Dropdown,
      useravatar: UserAvatar,
      VDistpicker,
    },
    data() {
      return {
        modifyVisible: false,
        user: {
          id: 'lqy1158783206',
          na: '破天狂魔',
          name: '玉锦江',
          gender: '女',
          birthday: '1999-9-9',
          province:"河南",
          city:"洛阳",
          job: "高级程序员",
          des: '辣椒'
        },
        userform: {

        },
        defaultUserform:{
          id:"",
          na:"",
          name:"",
          gender:"",
          birthday:"",
          province:"",
          city:"",
          job:"",
          des:"",
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
      handleSubmitUserform(){
        this.user=JSON.parse(JSON.stringify(this.userform));
        this.userform=JSON.parse(JSON.stringify(this.defaultUserform));
      }
    }
  }

</script>
<style>
  div.title {
    font-size: 20px;
    color: #3d3d3d;
    height: 80px;
    line-height: 90px;
    border-bottom: 1px solid #e0e0e0;
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

  div.content {
    width: 950px;
    padding: 20px 20px 100px 20px;
    font-size: 15px;
  }

  li span {
    margin-left: 10px;
  }

</style>
