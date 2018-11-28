<template>
  <div>

    <Head>
      <search placeholder="搜索教室" slot="search"></search>
      <template>
        <Affix :offset-right="50">
          <Button @click="drawerVisible = true" type="primary">高级搜索</Button>
        </Affix>
        <Drawer title="高级搜索" :closable="false" v-model="drawerVisible" width="300">
          <Form ref="searchForm" :model="searchForm" :rules="searchForm">
            <FormItem label="教学楼 :">
              <CheckboxGroup v-model="searchForm.building">
                <Checkbox label="1"></Checkbox>
                <Checkbox label="2"></Checkbox>
                <Checkbox label="3"></Checkbox>
              </CheckboxGroup>
            </FormItem>
            <FormItem label="空闲时段 :">
              <CheckboxGroup v-model="searchForm.selection">
                <Checkbox label="1"></Checkbox>
                <Checkbox label="2"></Checkbox>
                <Checkbox label="3"></Checkbox>
                <Checkbox label="4"></Checkbox>
                <Checkbox label="5"></Checkbox>
              </CheckboxGroup>
            </FormItem>
          </Form>
        </Drawer>
      </template>
      <dropdown slot="user">
        <useravatar slot="dropdown"></useravatar>
      </dropdown>
    </Head>
    <RoomCard></RoomCard>
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
          building: "",
          selection: []
        }
      };
    }
  };

</script>
