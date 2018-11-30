<template>
  <div class="layout">
    <layout class="layout">

      <Head>
        <Button type="primary" @click="drawerVisible=true">筛选教室</Button>
        <dropdown slot="user">
          <useravatar slot="dropdown"></useravatar>
        </dropdown>
      </Head>

      <Layout>
        <!-- <Sider style="background-color:grey;" width='300'></Sider> -->
        <Content>
          <Row></Row>
          <RoomCard style="height:663px" :rooms="searchRoomList"></RoomCard>
          <div style="position: fixed; bottom:300px;right:20px;cursor:pointer;background-color:#888;width:50px;height: 50px;"
            @click="drawerVisible = true">
            <Icon type="ios-arrow-back" size="40" style="margin:5px;" />
          </div>
          <Drawer title="空闲教室查询" :closable="false" v-model="drawerVisible" width="300">
            <Form ref="searchForm" :model="searchForm" :rules="searchForm">
              <FormItem label="周次 :">
                <br>
                <Select v-model="searchForm.week" disabled>
                  <Option v-for="item in weekList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
              <FormItem label="只能查看本周教室信息 :">
                <br>
                <Select v-model="searchForm.weekday" style="width:200px">
                  <Option v-for="item in weekdayList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
              <FormItem label="空闲时段(第几节课) :">
                <br>
                <CheckboxGroup v-model="searchForm.lessonList">
                  <Checkbox label="1"></Checkbox>
                  <Checkbox label="2"></Checkbox>
                  <Checkbox label="3"></Checkbox>
                  <Checkbox label="4"></Checkbox>
                  <Checkbox label="5"></Checkbox>
                </CheckboxGroup>
              </FormItem>
              <Button type="primary" @click="handleSearch(searchForm)">查询</Button>
            </Form>
          </Drawer>
        </Content>
      </Layout>
    </layout>
    <!-- <Affix>
  <Button @click="drawerVisible = true" type="primary"><</Button>
    </Affix>-->
  </div>
</template>

<script>
  import RoomCard from "@/components/roomcard";
  import Head from "@/components/head";
  import Search from "@/components/search";
  import Dropdown from "@/components/dropdown";
  import UserAvatar from "@/components/userAvatar";
  import {
    log
  } from 'util';
  export default {
    components: {
      RoomCard: RoomCard,
      Head: Head,
      search: Search,
      dropdown: Dropdown,
      useravatar: UserAvatar
    },
    data() {
      return {
        drawerVisible: false,
        searchForm: {
          weekday: "",
          lessonList: []
        },
        weekList: [],
        weekdayList: [],
        searchRoomList: [],
      };
    },
    methods: {
      // initialOption() {
      //   for (var i = 1; i < 21; i++) {
      //     this.weekList.push({
      //       value: i,
      //       lable: "第" + i + "周"
      //     });
      //   }
      // }
      handleSearch() {
        this.$api.getRoomList()
          .then((data) => {
            this.searchRoomList = data;
          }, (res) => {
            console.log('状态码:' + res.code);
          })
          .catch(err => {
            console.log("数据获取失败");
          })
      }
    },
    mounted: function () {
      for (var i = 1; i < 21; i++) {
        this.weekList.push({
          value: i,
          label: "第" + i + "周"
        });
      }
      for (var i = 1; i <= 7; i++) {
        this.weekdayList.push({
          value: i,
          label: "星期" + i
        });
      }
    }
  };

</script>
<style scoped>
</style>
