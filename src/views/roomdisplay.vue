<template>
  <div class="layout">
    <layout class="layout">

      <Head>
        <!-- <search placeholder="搜索教室" slot="search"></search>        -->
        <dropdown slot="user">
          <useravatar slot="dropdown"></useravatar>
        </dropdown>
      </Head>

      <Layout>
        <!-- <Sider style="background-color:grey;" width='300'></Sider> -->
        <Content>
          <Row>
          </Row>
          <RoomCard style="height:663px"></RoomCard>
          <div style="position: fixed; bottom:300px;right:20px;cursor:pointer;background-color:#888;width:50px;height: 50px;"
            @click="drawerVisible = true">
            <Icon type="ios-arrow-back" size="40" style="margin:5px;" />
          </div>
          <Drawer title="高级搜索" :closable="false" v-model="drawerVisible" width="300">
            <Form ref="searchForm" :model="searchForm" :rules="searchForm">
              <FormItem label="周次 :"><br>
                <Select v-model="searchForm.week">
                  <Option v-for="item in weekList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
              <FormItem label="星期 :"><br>
                <Select v-model="searchForm.weekday" style="width:200px">
                  <Option v-for="item in weekdayList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
              <FormItem label="空闲时段(第几节课) :"><br>
                <CheckboxGroup v-model="searchForm.lessonList">
                  <Checkbox label="1"></Checkbox>
                  <Checkbox label="2"></Checkbox>
                  <Checkbox label="3"></Checkbox>
                  <Checkbox label="4"></Checkbox>
                  <Checkbox label="5"></Checkbox>
                </CheckboxGroup>
              </FormItem>
            </Form>
          </Drawer>
        </Content>
      </Layout>
    </layout>

    <!-- <Affix>
  <Button @click="drawerVisible = true" type="primary"><</Button>
</Affix> -->
  </div>
</template>

<script>
  import RoomCard from "@/components/roomcard";
  import Head from "@/components/head";
  import Search from "@/components/search";
  import Dropdown from "@/components/dropdown";
  import UserAvatar from "@/components/userAvatar";
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
          week: "",
          weekday: "",
          lessonList: [],
        },
        weekList: [],
        weekdayList: [

        ],
      };
    },
    methods: {
      initialOption() {
        for (var i = 1; i < 21; i++) {
          this.weekList.push({
            value: i,
            lable: '第' + i + '周',
          })
        }
      }
    },
    mounted: function () {
      for (var i = 1; i < 21; i++) {
        this.weekList.push({
          value: i,
          label: '第' + i + '周',
        })
      };
      for (var i = 1; i <= 7; i++) {
        this.weekdayList.push({
          value: i,
          label: '星期' + i,
        })
      }
    }

  };

</script>
<style scoped>

</style>
