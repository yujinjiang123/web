<template>
  <div>
    <Layout class="layout">

      <Head>
        <dropdown slot="user">
          <useravatar slot="dropdown"></useravatar>
        </dropdown>
      </Head>
      <Layout :style="{padding: '0 0',margin:'-15px 0 0 0'}">
        <Content :style="{ background: '#fff',margin:'30px 150px'}">
          <Layout :style="{}">
            <Sider hide-trigger :style="{background: '#fff',height:'200px'}">
              <Menu active-name="1-1" theme="light" width="auto" :open-names="['1-1']">
                <MenuItem name="1-1" to='/personalCenter/myData'>个人资料</MenuItem>
                <MenuItem name="1-2" to='/personalCenter/myCollection'>我的收藏</MenuItem>
                <MenuItem name="1-3" to='/personalCenter/myFocus'>我的关注</MenuItem>
                <MenuItem name="1-4" to='/personalCenter/myFans'>我的粉丝</MenuItem>
                <Divider style="margin:0"/>
                <MenuItem to="//www.baidu.com" target='_blank'>我的博客</MenuItem>
              </Menu>
            </Sider>
            <Content :style="{padding: '0 24px', minHeight: '400px', background: '#fff'}">
              <router-view></router-view>
            </Content>
          </Layout>
        </Content>
      </Layout>
      <Footer class="layout-footer-center">2018-2018 &copy; lqy</Footer>
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
      useravatar: UserAvatar,
    },
    data() {
      return {
        user: {
          stuId: 'lqy1158783206',
          username: '破天狂魔',
          nickname: '刘琦贇',
          gender: '女',
          birthday: '1999-9-9',
          area: '郑州',
          job: "高级程序员",
          des: '辣椒'
        }
      }
    },
    methods: {

    }
  }

</script>

<style>
  div.title {
    height: 80px;
    line-height: 85px;
    border-bottom: 1px solid #e0e0e0;
  }

  h3 {
    font-size: 26px;
    color: #3d3d3d;
  }

  ul {
    list-style: none
  }

</style>
