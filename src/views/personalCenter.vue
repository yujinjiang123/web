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
                <div class="title"><h3>个人资料</h3></div>
              
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

</style>
