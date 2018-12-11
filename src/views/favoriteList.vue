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
                <h3>我的收藏</h3>
              </div>
              <div style="display:flex">
                <div class="content">
                </div>
              </div>
            </Content>
          </Layout>
        </Content>
        <Footer></Footer>
      </Layout>
    </Layout>
</div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>
