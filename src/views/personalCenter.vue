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
              <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                <MenuItem name="1-1">个人资料</MenuItem>
                <MenuItem name="1-2">我的收藏</MenuItem>
                <MenuItem name="1-3">我的博客</MenuItem>
              </Menu>
            </Sider>
            <Content :style="{padding: '0 0 0 24px', minHeight: '400px', background: '#fff'}">
              <div class="title">
                <h3>个人资料</h3>
              </div>
              <div class="content" style="display:flex">
                <div class="avatar" style="padding-top:20px;width:100px">
                  <img src="https://img.zcool.cn/community/01f9ea56e282836ac72531cbe0233b.jpg@2o.jpg" class="round_icon">
                  <Upload :show-upload-list="false" :on-success="handleSuccess" :format="['jpg','jpeg','png']"
                    :max-size="2048" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize"
                    :before-upload="handleBeforeUpload" action="//jsonplaceholder.typicode.com/posts/">
                    <a href="#" style="margin-left:20px">上传头像</a>
                  </Upload>
                </div>
                <div style="width:950px;padding:40px 0px 0px 20px">
                  <div><span>昵称:</span><span>修改资料</span> </div>
                  <ul style="list-style:none">
                    <li>12</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                  </ul>
                </div>
              </div>
            </Content>
          </Layout>
        </Content>
      </Layout> -->
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
  </div>
</template>

<script>
  import Head from "@/components/head";
  import Search from "@/components/search";
  import Dropdown from "@/components/dropdown";
  import UserAvatar from "@/components/userAvatar";
  export default {
    components: {
      Head: Head,
      search: Search,
      dropdown: Dropdown,
      useravatar: UserAvatar
    },
    data() {
      return {

      }
    },
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

  .round_icon {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    overflow: hidden;
    border: solid 1px;
  }

</style>
