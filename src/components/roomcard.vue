<template>
  <div>
    <Col span="6" style="background:#eee;padding-bottom:10px;padding-right:10px;" v-for="(roomItem,roomIndex) in rooms"
      :key="roomIndex">
    <Card :bordered="false">
      <p slot="title">
        <b>#{{roomItem.id}}</b>
      </p>
      <a href="#" slot="extra" @click.prevent>借用</a>
      <ul style="list-style:none">
        <li v-for="(stateItem,stateIndex) in roomItem.state">
          <Row>
            <Col span="16">
            <a target="_blank">{{name[stateIndex]}}</a>
            </Col>
            <Col span="2">
            <div :class="stateItem==1?'class1':'class2'"></div>
            </Col>
            <Col span="6">{{ stateItem==1?'空闲可用':'已占用'}}</Col>
          </Row>
          <!-- <hr> -->
        </li>
      </ul>
    </Card>
    </Col>
  </div>
</template>
<script>
  export default {
    props: ['rooms'],

    data() {
      return {
        name: ["第一大节 08:00-09:40", "第二大节 10:00-11:40", "第三大节 14:30-16:10", "第四大节 16:20-18:00", "第五大节 19:00-20:30"],
      };
    },
    methods: {
      changeLimit() {}
    },
    mounted() {}
  };

</script>
<style>
  div.class1 {
    width: 10px;
    height: 10px;
    margin-top: 5px;
    background-color: #67c23a;
  }

  div.class2 {
    width: 10px;
    height: 10px;
    margin-top: 5px;
    background-color: #ed4014;
  }

</style>
