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
                  <Option v-for="item in weekOptions" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
              <FormItem label="只能查看本周教室信息 :">
                <br>
                <Select clearable v-model="searchForm.weekday" style="width:200px">
                  <Option v-for="item in weekdayOptions" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
              <FormItem label="空闲时段(第几节课) :">
                <br>
                <Checkbox :indeterminate="indeterminate" :value="checkAll" @click.prevent.native="handleCheckAll">全选</Checkbox>
                <CheckboxGroup v-model="searchForm.lessonList" @on-change="checkAllGroupChange">
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
  import {
    getRoomList
  } from "../api/api";
  import {
    initRoomList
  } from "../api/api";
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
        indeterminate: true,
        checkAll: false,
        drawerVisible: false,
        searchForm: {
          weekday: "",
          lessonList: []
        },
        weekOptions: [],
        weekdayOptions: [],
        searchRoomList: [{
            id: 301,
            state: [1, 0, 1, 0, 1],
          }, {
            id: 301,
            state: [1, 0, 1, 0, 1],
          },
          {
            id: 301,
            state: [1, 0, 1, 0, 1],
          },
          {
            id: 301,
            state: [1, 0, 1, 0, 1],
          },
          {
            id: 301,
            state: [1, 0, 1, 0, 1],
          },
          {
            id: 301,
            state: [1, 0, 1, 0, 1],
          },
        ]
      };
    },
    methods: {
      handleCheckAll() {
        if (this.indeterminate) {
          this.checkAll = false;
        } else {
          this.checkAll = !this.checkAll;
        }
        this.indeterminate = false;
        if (this.checkAll) {
          this.searchForm.lessonList = ['1', '2', '3', '4', '5'];
        } else {
          this.searchForm.lessonList = [];
        }
      },
      checkAllGroupChange(data) {
        if (data.length === 5) {
          this.indeterminate = false;
          this.checkAll = true;
        } else if (data.length > 0) {
          this.indeterminate = true;
          this.checkAll = false;
        } else {
          this.indeterminate = false;
          this.checkAll = false;
        }
      },
      handleSearch(serachForm) {
        console.log(this.searchForm);
        getRoomList(serachForm)
          .then((res) => {
            this.searchRoomList = res.data;
            console.log(this.searchRoomList);
          }, (res) => {
            console.log('状态码:' + res.code + '\n' + '错误信息:' + res.message);
          })
          .catch(err => {
            console.log(err);
          })
      },
      initOptions() {
      for (var i = 1; i < 21; i++) {
        this.weekOptions.push({
          value: i,
          label: "第" + i + "周"
        });
      };
      for (var i = 1; i <= 7; i++) {
        this.weekdayOptions.push({
          value: i,
          label: "星期" + i
        });
      }
    },
    },
    mounted: function () {
      initRoomList().then((res) => {
          this.searchRoomList = res.data;
          console.log(this.searchRoomList);
        }, (res) => {
          console.log('状态码:' + res.code + '\n' + '错误信息:' + res.message);
        })
        .catch(err => {
          console.log(err);
        });
        this.initOptions();
    }
  };

</script>
<style scoped>
</style>
